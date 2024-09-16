import { ChangeEventHandler, FC } from "react";

type IProps = {
  text: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

const Input: FC<IProps> = (props) => {
  const { text, onChange } = props;
  return (
    <textarea
      id="message"
      rows={4}
      className="block p-2.5 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Write your thoughts here..."
      value={text}
      onChange={onChange}
    ></textarea>
  );
};

export { Input };
