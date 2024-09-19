import { FC } from "react";

type IProps = {
  text: string;
  user: string;
};

const Chat: FC<IProps> = (props) => {
  const { text, user } = props;
  const commonClassName =
    "flex flex-col p-2 border-4  m-2 rounded-lg  w-fit min-w-96";
  const classNames =
    user === "Moi"
      ? `${commonClassName} justify-center items-end border-blue-500 bg-blue-100`
      : `${commonClassName} justify-center items-start border-green-500 bg-green-100`;

  return (
    <div className="flex">
      <div className={user === "Moi" ? "w-full" : ""}></div>
      <div className={classNames}>
        <p className="font-bold text-sm">{user}</p>
        <p className="w-full">{text}</p>
      </div>
      <div className={user !== "Moi" ? "w-full" : ""}></div>
    </div>
  );
};

export { Chat };
