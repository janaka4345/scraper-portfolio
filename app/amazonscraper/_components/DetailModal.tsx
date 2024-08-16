import { Button } from "@/components/ui/button";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getDataFile } from "@/serverActions/amazonscraper";
import { DataFileListItem } from "@/type";

export default async function DetailModal({ file }: { file: DataFileListItem | undefined }) {
    if (!file) {
        return null
    }
    const fileData = await getDataFile(file?.filename)
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='"font-medium"' variant="link">View Data</Button>
            </DialogTrigger>
            <DialogContent className="w-[60svw] h-[60svh] overflow-hidden">
                <DialogHeader>
                    <DialogTitle>Scraped Data</DialogTitle>
                    <DialogDescription>
                        Scraped data for the keyword {file.keyword}
                    </DialogDescription>
                </DialogHeader>
                <div className=" py-4  overflow-scroll">
                    <pre>{JSON.stringify(fileData, null, 2)}</pre>
                </div>
                <DialogFooter>
                    <Button type="submit">Download File</Button>
                    <Button type="submit">Delete File</Button>
                </DialogFooter>
            </DialogContent >
        </Dialog >
    )
}