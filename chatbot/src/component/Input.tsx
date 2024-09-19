import { ChangeEventHandler, FC } from "react";

type IProps = {
  text: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<IProps> = (props) => {
  const { text, onChange } = props;
  return (
    <>
      <input
        type="text"
        value={text}
        onChange={onChange}
        placeholder="Ecrivez quelque chose ici....."
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
};

export { Input };
