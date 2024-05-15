import Link from 'next/link'
import React from 'react'

export default function nav() {
    return (
        <div>
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <span className="">TakeOffer</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Services
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Testimonials
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
                        Contact
                    </Link>
                </nav>
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 ml-4"
                    href="#"
                >
                    Get Started
                </Link>
            </header>
        </div>
    )
}
