import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const Container: React.FC<Props> = ({ children }) => (
    <div className='px-2 md:px-12 lg:px-20 container mx-auto text-dark font-semibold'>{children}</div>
    
)


export default Container