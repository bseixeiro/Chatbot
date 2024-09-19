import { FC, useState } from "react";
import { getPromptReponse } from "@/app/tools/ai";
import { Input } from "@/component/Input";
import { Chat } from "@/component/chat";

type IProps = {
  texta: string;
};

const ChatScreen: FC<IProps> = () => {
  const [text, setText] = useState("");
  const [chats, setChats] = useState<
    { sender: "Moi" | "PokeChat"; text: string }[]
  >([]);

  const handleClick = async () => {
    if (text.trim() === "") return;

    let newChats = [...chats, { sender: "Moi" as const, text: text }];
    setText("");
    setChats(newChats);

    const reponse = await getPromptReponse(text);
    newChats = [...newChats, { sender: "PokeChat" as const, text: reponse }];
    setChats(newChats);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pokemon bg-no-repeat bg-cover">
      <div className="h-4/5 bg-white m-5 w-3/5 rounded-lg border-gray-400 border-4 p-3 overflow-y-scroll">
        {chats.map((c, i) => (
          <Chat key={i} text={c.text} user={c.sender}></Chat>
        ))}
      </div>
      <div className="flex w-4/5 justify-center items-center">
        <Input text={text} onChange={(e) => setText(e.target.value)}></Input>
        <button
          className="bg-green-800 p-3 rounded-lg m-5 h-fit w-fit"
          onClick={() => handleClick()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export { ChatScreen };
