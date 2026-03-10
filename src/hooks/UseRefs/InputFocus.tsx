import { useRef } from "react";

export const InputFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={focusInput}>hey</button>
    </>
  );
};
