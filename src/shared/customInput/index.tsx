import { InputCntr } from "./style";

interface InputProps {
  type?: string;
  disable?: boolean;
  isReadOnly?: boolean;
  className?: string;
  value?: any;
  maxLimit?: number;
  minLimit?: number;
  onChange?: any;
  placeholder?: any;
}

export const CustomInput = (props: InputProps) => {
  const {
    type,
    disable,
    isReadOnly, 
    className,
    maxLimit,
    minLimit = 0,
    value,
    onChange,
    placeholder,
  } = props;

  return (
      <InputCntr>
        <input
           onChange={onChange}
           readOnly={isReadOnly}
           value={value}
           max={maxLimit}
           min={minLimit}
           className={className}
           disabled={disable}
           placeholder={placeholder}
           type={type}
        />
      </InputCntr>
  );
};
