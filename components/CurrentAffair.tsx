import React from 'react'
import Container from './Container'
import SectionTitle from './SectionTitle'
import { NEWS } from '@/lib/dummy'
import NewsCard from './NewsCard'
const CurrentAffair = async () => {



  const res = await fetch('https://dummyjson.com/products', {cache: "no-cache"})
  const data = await res.json()

  const news = data['products'].map((product: any) => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      image: product.images && product.images.length > 0 ? product.images[0] : null,
    }
  });

  return (

    <section className="py-32">
      <Container>
        <div>
          <SectionTitle title="Common Affairs" />
        </div>
        <div className="flex max-md:gap-16 gap-8 flex-wrap justify-start mt-12">
          {news.map(({ id, title, description, image }:
            {
              id: number;
              title: string;
              description: string;
              image: string;
            }) => (
            <NewsCard id={id} title={title} description={description} image={image} key={id}/>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default CurrentAffair