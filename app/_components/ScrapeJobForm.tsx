'use client'
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"

const searchSchema = z.object({
    keyword: z.string().min(2).max(50),
})

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { scrapeData } from "@/serverActions/amazonscraper"

export default function ScrapeJobForm() {
    const router = useRouter()
    const form = useForm<z.infer<typeof searchSchema>>({
        resolver: zodResolver(searchSchema),
        defaultValues: {
            keyword: "",

        },
    })

    async function onSubmit(values: z.infer<typeof searchSchema>) {
        console.log(values)
        try {
            await scrapeData(`${values.keyword}`)
            router.push('/amazonscraper/?scraping=true')

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="my-8 gap-2 flex flex-row max-w-[30svw] min-w-[20svw] mx-auto">

                <FormField
                    control={form.control}
                    name="keyword"
                    render={({ field }) => (
                        <FormItem>
                            {/* <FormLabel>Keyword</FormLabel> */}
                            <FormControl>
                                <Input placeholder="keyword to scrape" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button disabled={form.formState.isSubmitting} type="submit">Scrape</Button>
            </form>
        </Form>
    )
}