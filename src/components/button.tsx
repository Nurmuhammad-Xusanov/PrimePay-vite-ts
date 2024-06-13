import { FC } from "react";

interface Props{
    styles?: string;
    text?: string;
}

const Button: FC<Props> = ({text, styles}): JSX.Element => {
  return (
    <button type='button' className={`py-3 px-6 font-montserrat font-medium text-[18px] bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
        {text}
    </button>
  )
}

export default Button;
