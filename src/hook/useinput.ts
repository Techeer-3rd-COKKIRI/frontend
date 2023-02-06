import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

type ReturnTypes = [
  string,
  Dispatch<SetStateAction<string>>,
  (e: ChangeEvent<HTMLInputElement>) => void,
  (e: React.KeyboardEvent<HTMLInputElement>) => void,
];

const useInput = (initialData: string): ReturnTypes => {
  const [value, setValue] = useState<string>(initialData);
  const handler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Enter' &&
      !e.shiftKey &&
      e.nativeEvent.isComposing === false
    ) {
      e.preventDefault();

      setValue('');
    }
  };
  return [value, setValue, handler, onKeyDown];
};

export default useInput;
