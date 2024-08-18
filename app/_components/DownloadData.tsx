'use client'
import { Button } from "@/components/ui/button";
import { getDataFile } from "@/serverActions/amazonscraper";
import { DataFileListItem } from "@/type";

export default function DownloadData({ file }: { file: DataFileListItem | undefined }) {
    async function handleDownload() {
        const fileData = await getDataFile(file?.filename!)
        const jsonStr = JSON.stringify(fileData);
        const blob = new Blob([jsonStr], { type: 'application/json' });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = `${file?.keyword}_${file?.jobid}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    }
    if (!file) {
        return null
    }
    return (
        <Button onClick={handleDownload} className="font-medium">Download File</Button>
    )
}