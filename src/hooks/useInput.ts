import { ChangeEvent, useState } from "react";

export const useInput = (initialValue: string = "") => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  // as const를 통해 튜플의 값을 변경 불가하도록 (각 배열 인덱스에 대한 정확한 타입 유지 위해)
  return [value, setValue, onChange, reset] as const;
};
