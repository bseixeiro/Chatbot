import { FC } from "react";

type IProps = {
  text: string;
  user: string;
};

const Chat: FC<IProps> = (props) => {
  const { text, user } = props;
  return (
    <>
      <p>{user}</p>
      <p>{text}</p>
    </>
  );
};

export { Chat };
