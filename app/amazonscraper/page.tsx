import { getDataFilesLIst, scrapeData } from "@/serverActions/amazonscraper"
import Link from "next/link"

export default async function page() {
    const { data } = await getDataFilesLIst()
    const res = await scrapeData("")

    return (
        <section>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <div className="flex flex-col gap-2">
                {/*@ts-ignore*/
                    data.map(item => (
                        <Link key={item.name} href={`/amazonscraper/${item.name}`}>{item.name}</Link>
                    ))}
            </div>
            <div>
                {JSON.stringify(res.data)}
            </div>

        </section>
    )
} 
