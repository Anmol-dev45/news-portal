import Container from "./Container"
import Latest from "./Latest"
const Hero = () => {
  return (
    <section className="py-32 border-b-2 border-gray-300">
        <Container>
          <div className="flex max-lg:flex-col items-start gap-10">
            <div className="lg:w-8/12">
              <div className="w-full h-[380px] lg:h-[420px] border-2 border-dark mb-8">
              </div>
              <div>
                <h3 className="text-dark font-bold text-4xl">Lorem ipsum dolor sit amet.</h3>
                <p className="text-dark/70 text-lg ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam quod placeat commodi?</p>
              </div>
            </div>
            <div className="lg:w-4/12">
              <Latest />
            </div>
          </div>
        </Container>
      </section>
  )
}

export default Hero