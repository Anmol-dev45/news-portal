// Desc: SectionTitle component

interface Prop {
  title: string
}



const SectionTitle: React.FC<Prop> = ({ title }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="h-11 w-3 bg-primary" />
      <h3 className="text-dark font-extrabold text-[30px] capitalize">{title}</h3>
    </div>
  )
}

export default SectionTitle