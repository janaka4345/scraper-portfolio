import { getJobList } from "@/serverActions/walmartscraper"
import { JobLIst } from "@/type"
import { revalidatePath } from "next/cache"
import ScrapeJobForm from "../_components/WalmartScrapeJobForm"
import MainTable from "../_components/WalmartMainTable"

export const revalidate = 10
export default async function page() {

    const { data: jobs } = await getJobList()
    const pendingJobs: JobLIst[] = jobs.pending
    const runningJobs: JobLIst[] = jobs.running
    const finishedJobs: JobLIst[] = jobs.finished
    revalidatePath('/walmartscraper')

    return (
        <section className="mx-8 flex flex-col gap-4 mt-[10svh]">
            <h1 className=" text-3xl text-gray-700 font-bold tracking-tight w-fit mx-auto mt-4 ">Scrape the Wallmart.com</h1>
            <ScrapeJobForm />

            {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10"> */}
            <MainTable data={pendingJobs} status='pending' />
            {/* </div> */}


            {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10"> */}
            <MainTable data={runningJobs} status='running' />
            {/* </div> */}

            {/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg mx-10"> */}
            <MainTable data={finishedJobs} status='finished' />
            {/* </div> */}

        </section>
    )
} 
