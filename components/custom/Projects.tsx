import Link from "next/link";

export default function Projects() {
    return (
        <section id='projects' className="bg-white px-4 py-8 antialiased  md:py-16">
            <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4  md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <div className="lg:col-span-5 lg:mt-0">
                    <Link href="/amazonscraper">
                        <img className="mb-4 h-56 w-56 object-contain  sm:h-96 sm:w-96 md:h-full md:w-full" src="amazon.png" alt="peripherals" />

                    </Link>
                </div>
                <div className="me-auto place-self-center lg:col-span-7">
                    <h1 className=" mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                        Amazon Scraper <br />
                    </h1>
                    <p className="mb-6 text-gray-500 ">Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation. Try Now to secure your discount.</p>
                    <Link href="/amazonscraper" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "> Try Now </Link>
                </div>
            </div>
            <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4  md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <div className="lg:col-span-5 lg:mt-0">
                    <Link href="/walmartscraper">
                        <img className="mb-4 h-56 w-56  sm:h-96 sm:w-96 md:h-full md:w-full" src="/walmart.png" alt="peripherals" />

                    </Link>
                </div>
                <div className="me-auto place-self-center lg:col-span-7">
                    <h1 className=" mb-3 text-2xl object-contain font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                        Walmart Scrapper <br />
                    </h1>
                    <p className="mb-6 text-gray-500 ">Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation. Try Now to secure your discount.</p>
                    <Link href="/walmartscraper" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "> Try Now </Link>
                </div>
            </div>
            <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4  md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <div className="lg:col-span-5 lg:mt-0">
                    <Link href="#">
                        <img className="mb-4 h-56 w-56  sm:h-96 sm:w-96 md:h-full md:w-full" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg" alt="peripherals" />
                        <img className="mb-4 hidden  md:h-full" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg" alt="peripherals" />
                    </Link>
                </div>
                <div className="me-auto place-self-center lg:col-span-7">
                    <h1 className=" mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                        Save $500 today on your purchase <br />
                        of a new iMac computer.
                    </h1>
                    <p className="mb-6 text-gray-500 ">Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation. Try Now to secure your discount.</p>
                    <Link href="#" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "> Try Now </Link>
                </div>
            </div>
            <div className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4  md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <div className="lg:col-span-5 lg:mt-0">
                    <Link href="#">
                        <img className="mb-4 h-56 w-56  sm:h-96 sm:w-96 md:h-full md:w-full" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg" alt="peripherals" />
                        <img className="mb-4 hidden  md:h-full" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg" alt="peripherals" />
                    </Link>
                </div>
                <div className="me-auto place-self-center lg:col-span-7">
                    <h1 className=" mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
                        Save $500 today on your purchase <br />
                        of a new iMac computer.
                    </h1>
                    <p className="mb-6 text-gray-500 ">Reserve your new Apple iMac 27” today and enjoy exclusive savings with qualified activation. Try Now to secure your discount.</p>
                    <Link href="#" className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "> Try Now </Link>
                </div>
            </div>
        </section>
    )
}