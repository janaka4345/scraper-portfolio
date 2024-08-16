import { getDataFilesLIst } from "@/serverActions/amazonscraper";
import { DataFileListItem, JobLIst } from "@/type";
import CancelJob from "./_components/CancelJob";
import DetailModal from "./_components/DetailModal";
import DownloadData from "./_components/DownloadData";

export default async function MainTable({ status, data }: { status: string, data: JobLIst[] }) {
    const files = await getDataFilesLIst()

    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                {status === 'pending' && <span>Pending Jobs</span>}
                {status === 'running' && <span>Running Jobs</span>}
                {status === 'finished' && <span> Finished Jobs</span>}

            </caption>
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
                            {new Date(job.start_time).toLocaleTimeString()}{' '}{new Date(job.start_time).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                            {status}
                        </td>
                        <td className="px-6 py-4">
                            {status === 'finished' && new Date(job.end_time).toLocaleTimeString()}{' '}{new Date(job.end_time).toLocaleDateString()}

                        </td>

                        {status === 'finished' ? <td className="px-6 py-4 text-right">
                            <DetailModal file={getFile(job.id, files!)} />
                            <DownloadData file={getFile(job.id, files!)} />
                        </td> : <td className="px-6 py-4 text-right">
                            <CancelJob jobid={job.id} />
                        </td>}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
function getFile(jobid: string, files: DataFileListItem[]): DataFileListItem | undefined {
    const file = files?.find(file => file.jobid === jobid)
    return file
}