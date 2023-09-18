import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
const Container: React.FC<Props> = ({ children }) => (
    <div className='px-3 md:px-12 lg:px-20 container mx-auto py-4'>{children}</div>
)


export default Container