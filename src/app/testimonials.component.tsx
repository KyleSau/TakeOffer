'use client'
export default function Testimonials() {
    return (
        <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                        What Our Clients Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                        <blockquote className="mb-4 text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                            "The construction estimation service provided by this company was incredibly accurate and efficient. They
                            saved us time and money on our project."
                        </blockquote>
                        <div className="flex items-center">
                            <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                                {/* <img alt="Client Avatar" className="h-full w-full object-cover" src="/placeholder.svg" /> */}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">John Doe</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Construction</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                        <blockquote className="mb-4 text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                            "I was amazed by the level of detail and accuracy in the construction estimates provided by this service.
                            It made our budgeting process so much easier."
                        </blockquote>
                        <div className="flex items-center">
                            <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                                {/* <img alt="Client Avatar" className="h-full w-full object-cover" src="/placeholder.svg" /> */}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Jane Smith</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Project Manager, Builders Inc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                        <blockquote className="mb-4 text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                            "This construction estimation service has been a game-changer for our business. The insights and data they
                            provide are invaluable."
                        </blockquote>
                        <div className="flex items-center">
                            <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                                {/* <img alt="Client Avatar" className="h-full w-full object-cover" src="/placeholder.svg" /> */}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Michael Johnson</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Owner, Reliable Contractors</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
                        <blockquote className="mb-4 text-lg font-medium leading-relaxed text-gray-700 dark:text-gray-300">
                            "I highly recommend this construction estimation service to anyone in the industry. The team is
                            knowledgeable and responsive."
                        </blockquote>
                        <div className="flex items-center">
                            <div className="mr-4 h-10 w-10 overflow-hidden rounded-full">
                                {/* <img alt="Client Avatar" className="h-full w-full object-cover" src="/placeholder.svg" /> */}
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">Emily Davis</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Project Coordinator, Builders Collective</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}