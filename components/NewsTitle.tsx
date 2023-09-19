import { ReactNode } from "react"

interface Props {
  children: ReactNode
}

const NewsTitle: React.FC<Props> = ({ children }) => {
  return (
    <h2 className='text-base md:text-2xl text-dark font-bold'>
      {children}
    </h2>
  )
}

export default NewsTitle