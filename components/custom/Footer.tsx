import Image from "next/image";

export default function Footer() {
    return (

        <footer id="footer" className="bg-slate-200 rounded-lg shadow ">
            <div className="w-full max-w-screen-2xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 ">
                        <Image src='/logo.png' className="" width={100} height={100} alt="scrape labs Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary ">Scrape Labs</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-500 sm:mx-auto  lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="#" className="hover:underline">Scrape Labs</a>. All Rights Reserved.</span>
            </div>
        </footer>


    )
}