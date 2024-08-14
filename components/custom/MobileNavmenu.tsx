import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
export default function MobileNavmenu() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant='outline' data-collapse-toggle="navbar-sticky" className="inline-flex hover:scale-110 rounded-lg transition-all duration-150 items-center p-2 w-8 h-8 justify-center text-sm text-gray-500  md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg fill="none" className="w-5 h-5 fill-primary border-primary" aria-hidden="true" viewBox="0 0 17 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" /></svg>
                </Button>
            </SheetTrigger>
            <SheetContent className="md:hidden">
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}