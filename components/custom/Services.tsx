import Link from "next/link";

export default function Services() {
    return (
        <section id='services' className="w-[100svw] h-[90svh] grid grid-cols-3 grid-rows-2 bg-white gap-2 px-20  py-4 ">
            <div className="bg-red-500">
                <h1>Web Scraping on the cloud</h1>
                <h1>Web Scraping with portable application</h1>
            </div>
            <div className="bg-red-500">
                <h1>static web scraping</h1>
                <h1>Dynamic web scraping</h1>
            </div>
            <div className="bg-red-500">
                <h1>Cleaning up data</h1>
                <h1>Data formatting and conversion to requirements </h1>
            </div>
            <div className="bg-red-500">
                <h1>Save data to a sql /noSQL database</h1>
                <h1>Download data file as json, csv, etc.</h1>
            </div>
            <div className="bg-red-500">
                <h1>Scraping images with text and extract texts </h1>
                <h1>Scraping video files and save locally or upload to cloud  </h1>
            </div>
            <div className="bg-red-500">
                <h1>scheduled scraping </h1>
                <h1>Scraping without getting banned </h1>
            </div>
        </section>
    )
}