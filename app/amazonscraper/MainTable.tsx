import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getDataFilesLIst } from "@/serverActions/amazonscraper";
import { DataFileListItem, JobLIst } from "@/type";
import Link from "next/link";
import DetailModal from "./_components/DetailModal";

export default async function MainTable({ status, data }: { status: string, data: JobLIst[] }) {
    const files = await getDataFilesLIst()

    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Product Scraped
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Time
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        End time
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.reverse().map((job, i) => (
                    <tr key={job.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {getFile(job.id, files!)?.keyword}
                        </th>
                        <td className="px-6 py-4">
                            {job.start_time}
                        </td>
                        <td className="px-6 py-4">
                            {status}
                        </td>
                        <td className="px-6 py-4">
                            {job.end_time}
                        </td>
                        {status === 'finished' && <td className="px-6 py-4 text-right">
                            <DetailModal file={getFile(job.id, files!)} />
                            <Link href='/' className={cn(buttonVariants({ variant: 'default' }), "font-medium")}>Download File</Link>
                        </td>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
function getFile(jobid: string, files: DataFileListItem[]): DataFileListItem | undefined {
    const file = files?.find(file => file.jobid === jobid)
    console.log(file);

    return file
}