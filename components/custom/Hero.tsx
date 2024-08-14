export default function Hero() {
    return (
        // <section className="bg-center h-[100svh]  bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <section className="bg-center h-[100svh]   bg-gray-700 bg-blend-multiply">
            <div className=" px-4 mx-auto text-center relative ">
                <div className="flex pt-[calc(100svh/2-30svh)] ml-10 flex-col  items-start justify-center">
                    {/* <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"></h1> */}
                    <h1 className=" scroll-m-20 text-gray-50 text-8xl font-extrabold tracking-tight lg:text-9xl">
                        Extract
                    </h1>
                    <h1 className="scroll-m-20  text-gray-50 text-8xl font-extrabold tracking-tight lg:text-9xl">
                        Analyze
                    </h1>
                    <h1 className=" text-gray-50 scroll-m-20 text-8xl font-extrabold tracking-tight lg:text-9xl">
                        Excel
                    </h1>
                </div>
                <p className="my-8 text-lg font-normal text-gray-300 lg:text-xl w-fit ml-10 ">Custom Web Scraping Solutions for Your Unique Needs</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                        Get started

                    </a>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>
                </div>
                {/* <div className="h-[300px] w-full bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
                    Galss morhism tab
                </div> */}
            </div>
        </section >

    )
}