import { getJobList } from "@/serverActions/amazonscraper"
import { JobLIst } from "@/type"
import { revalidatePath } from "next/cache"
import ScrapeJob from "./_components/ScrapeJob"
import MainTable from "./MainTable"

export const revalidate = 10
export default async function page() {

    const { data: jobs } = await getJobList()
    const pendingJobs: JobLIst[] = jobs.pending
    const runningJobs: JobLIst[] = jobs.running
    const finishedJobs: JobLIst[] = jobs.finished
    revalidatePath('/amazonscraper')

    return (
        <section>
            <ScrapeJob />
            <h1>Pending jobs</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
                <MainTable data={pendingJobs} status='pending' />
            </div>

            <h1>Running jobs</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
                <MainTable data={runningJobs} status='running' />
            </div>
            <h1>Finished jobs</h1>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10">
                <MainTable data={finishedJobs} status='finished' />
            </div>

        </section>
    )
} 
