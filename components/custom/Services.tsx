import Link from "next/link";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const headingData = [
        ['Web Scraping on the cloud', 'Web Scraping with portable application'],
        ['Static websites scraping', 'Dynamic websites scraping'],
        ['Cleaning up data', 'Data formatting and conversion as required'],
        ['Save data to a SQL /noSQL databases', 'Download data file as .json, .csv, etc.'],
        ['Scraping images with texts and extract only texts', 'Scraping video files and save locally or upload to cloud'],
        ['Periodically scheduled scraping', 'Scraping without getting banned']

    ]
    return (
        <section id='services' className="w-full px-10 relative h-[100svh] bg-[url('/data-pipeline-architecture.jpg')]  grid grid-cols-3 grid-rows-2  gap-2 pt-[10svh] pb-[5svh]">
            {headingData.map((heading, i) => (
                <ServiceCard key={i} headings={heading} />
            ))}
        </section>
    )
}