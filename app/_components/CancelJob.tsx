'use client'
import { Button } from "@/components/ui/button";
import { cancelJob } from "@/serverActions/amazonscraper";
import { useRouter } from "next/navigation";

export default function CancelJob({ jobid }: { jobid: string }) {
    const router = useRouter()
    async function handleCancel() {
        try {
            await cancelJob(jobid)
            router.refresh()
        } catch (error) {
            console.log('something went wrong');

        }


    }
    return (
        <Button onClick={handleCancel}>Cancel Job</Button>
    )
}