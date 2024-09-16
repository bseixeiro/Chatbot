"use client";

import { Input } from "@/component/Input";
import { Chat } from "@/component/chat";
import { useState } from "react";
import { getPromptReponse } from "./ia/getPromptReponse";

export default function Home() {
  const [text, setText] = useState("");
  const [convs, setConvs] = useState<Array<string>>([]);
  const handleClick = async () => {
    const reponse = await getPromptReponse(text);
    const newConvs = [...convs, text, reponse];
    setText("");
    setConvs(newConvs);
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="h-96 bg-white m-5 w-80 overflow-y-scroll">
          {convs.map((c, i) => (
            <Chat key="i" text={c} user={i % 2 == 0 ? "you" : "ai"}></Chat>
          ))}
        </div>
        <Input text={text} onChange={(e) => setText(e.target.value)}></Input>
        <button
          className="bg-green-800 p-3 rounded-lg m-5"
          onClick={() => handleClick()}
        >
          Submit
        </button>
      </div>
    </>
  );
}
