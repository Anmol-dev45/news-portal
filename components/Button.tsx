import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const Button: React.FC<Props> = ({ children }) => (
  <button className="px-8 py-3 text-sm rounded-full bg-dark text-white font-medium capitalize ">
    {children}
  </button>
)


export default Button