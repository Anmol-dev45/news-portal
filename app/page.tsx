import Latest from "@/components/Latest"
import NewsCard from "@/components/NewsCard"
import SectionTitle from "@/components/SectionTitle"
import { NEWS } from "@/lib/dummy"
import path from "path"
export default function Home() {
  return (
    <>
      <SectionTitle title="current affairs" />
      <div className="w-[460px]">
        <Latest />
      </div>
    </>
  )
}
