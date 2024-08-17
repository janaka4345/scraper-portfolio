
export default function ServiceCard({ headings }: { headings: string[] }) {
    return (
        <div className="flex flex-col items-center w-full h-full  px-4 justify-around  rounded-lg  border-white border backdrop-blur-lg mx-auto bg-gray-300/35  shadow  hover:bg-gray-300/55 ">
            {headings.map((heading, i) => (<h5 key={i} className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">{heading}</h5>))}
        </div>
    )
}