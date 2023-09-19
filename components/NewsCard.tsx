import Image from 'next/image'
import NewsTitle from './NewsTitle'
import NewsDescription from './NewsDescription'

interface Props {
  title: string;
  description: string;
  image: string
}
const NewsCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <div className='max-w-sm'>
      <div>
        <Image src={image}
          height={240}
          width={375}
          alt='image of news' />
      </div>
      <div className='mt-2'>
        <NewsTitle>{title}</NewsTitle>
      </div>
      <div>
        <NewsDescription text={description}  color='black'/>
      </div>
    </div>
  )
}

export default NewsCard