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
import { getDataFile } from "@/serverActions/walmartscraper";
import { DataFileListItem } from "@/type";
import DownloadData from "./DownloadData";

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
                    <DownloadData file={file} />
                    <Button disabled={true} type="submit">Delete File</Button>
                </DialogFooter>
            </DialogContent >
        </Dialog >
    )
}