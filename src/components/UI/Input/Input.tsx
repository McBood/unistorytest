import React, { FC } from "react";

import "./input.scss";

interface InputProps {
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <div className="input">
      <input value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  );
};

export default Input;
