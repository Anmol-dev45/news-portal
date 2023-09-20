import Container from "@/components/Container";
import NewsDescription from "@/components/NewsDescription";
import NewsTitle from "@/components/NewsTitle";

interface Props {
  params: {
    news: number;
  }
}

const page: React.FC<Props> = async ({ params }) => {
  const res = await fetch(`https://dummyjson.com/products/${params.news}`)
  const data = await res.json()
  return (
    <section>
      <Container>
        <div className="w-full">
          <img src={data.images[0]} alt="image" className="w-full" />
        </div>
        <NewsTitle>{data.title}</NewsTitle>
        <NewsDescription text={data.description} color='black' fullSize={true}/>
      </Container>
    </section>
  )
}

export default page