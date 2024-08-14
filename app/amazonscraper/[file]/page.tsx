import { getDataFile } from "@/serverActions/amazonscraper"

export default async function page({ params }: { params: { file: string } }) {
    const { data } = await getDataFile(params.file)
    console.log(data);

    return (
        <>
            <div>{JSON.stringify(data, null, 2)}</div>
        </>
    )
}