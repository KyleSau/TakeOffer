"use client"
import React from 'react'
import Navbar from '../navbar'
import Footer from '../footer'
import Link from 'next/link'
import { Check } from 'lucide-react'

export default function page() {
    return (
        <div>
            <Navbar />
            <section className="container w-full py-5">
                <div className="flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                        <div className="col-span-1 flex flex-col items-center justify-center relative">
                            <h2 className="text-6xl font-bold m-10">Our Service Process</h2>
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">1. Submit Your Floor Plans</h3>
                            <p className="text-base md:text-lg lg:text-base text-gray-700 dark:text-gray-300 p-5 w-3/4">
                                Please submit your drawings and specifications to us by attaching your documents through our contact form or by sending them directly to <Link href="mailto:contact@takeoffer.net" className="font-bold text-lg underline">contact@takeoffer.net</Link> We accept documents in PDF format for your convenience. If you have any inquiries or need assistance, feel free to reach out at any time. Our team is always ready to support you.
                            </p>
                            <a href="#" className="text-blue-600 hover:underline">Upload Drawing Plans ⟶</a>
                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center relative">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">2. Get Your Project Quote</h3>
                            <p className="text-base md:text-lg lg:text-base text-gray-700 dark:text-gray-300 p-5 w-3/4">
                                After we look at your plans, we’ll quickly send you a free quote for estimation services and material takeoffs. If you say yes to our quote, we’ll start working on your project right away, making sure it fits your schedule and what you need. Then, we’ll get your project’s material takeoff ready for you.
                            </p>
                        </div>
                        <div className="col-span-1 flex flex-col items-center justify-center relative">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">3. Receive Your Estimate</h3>
                            <p className="text-base md:text-lg lg:text-base text-gray-700 dark:text-gray-300 p-5 w-3/4">
                                You’ll get an estimate from us with all the details and estimates your project needs. If you have questions at any point, our team is here to help you out.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container mx-auto py-12 md:py-24 lg:py-32 dark:bg-gray-800">
                <div className="flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">Our Pricing</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="col-span-1 bg-white dark:bg-gray-900 rounded-md p-8 shadow-lg">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Single Trade Pricing</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Perfect for Single Trade Contractors</p>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">$100</p>
                            <ul className="text-gray-600 dark:text-gray-400 mb-4">
                                <li className="font-bold"><Check />Turnaround Time 24 to 48 Hrs</li>
                                <hr />
                                <li className="font-bold">Any Trade or Any Kind of Project</li>
                                <hr />
                                <li className="font-bold">Free Quote Within 5 to 10 Minutes</li>
                                <hr />
                                <li className="font-bold">Free Consultation</li>
                                <hr />
                                <li className="font-bold">Immediate and Unlimited Revisions</li>
                                <hr />
                                <li className="font-bold">24/7 Email Support</li>
                                <hr />
                                <li className="font-bold">Live Chat and Call Support</li>
                                <hr />
                                <li className="font-bold">No Hidden Charges</li>
                                <hr />
                                <li className="font-bold">Refund Policy (Risk Free)</li>
                            </ul>
                            <button className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300">Get Started</button>
                        </div>
                        <div className="col-span-1 bg-white dark:bg-gray-900 rounded-md p-8 shadow-lg">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Pro</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">Ideal for medium-sized projects</p>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">$1500/mo</p>
                            <ul className="text-gray-600 dark:text-gray-400 mb-4">
                                <li>10 to 15 Projects</li>
                                <li>Bid Filing and Consultation</li>
                                <li>Material Takeoffs and Cost Management</li>
                                <li>Turnaround Time 24 to 48 Hrs</li>
                                <li>Any Trade or Any Kind of Project</li>
                                <li>Free Quote Within 5 to 10 Minutes</li>
                                <li>Free Consultation</li>
                                <li>Immediate and Unlimited Revisions</li>
                                <li>24/7 Email Support</li>
                                <li>Live Chat and Call Support</li>
                                <li>No Hidden Charges</li>
                                <li>Refund Policy (Risk Free)</li>
                            </ul>
                            <button className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300">Get Started</button>
                        </div>
                        <div className="col-span-1 bg-white dark:bg-gray-900 rounded-md p-8 shadow-lg">
                            <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Enterprise</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">For large-scale projects</p>
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">Contact Us</p>
                            <ul className="text-gray-600 dark:text-gray-400 mb-4">
                                <li>Dedicated Resources</li>
                                <li>Feasibility Studies</li>
                                <li>Consultation on smartly filing bids</li>
                                <li>Manage the bidding network profiles</li>
                                <li>Project Scheduling</li>
                                <li>Material Takeoffs</li>
                                <li>Cost Management</li>
                                <li>Preconstruction & Change Order Management</li>
                                <li>Subcontractor Marketing</li>
                                <li>Generating New Project Leads</li>
                                <li>Turnaround Time 24 to 48 Hrs</li>
                                <li>Any Trade or Any Kind of Project</li>
                                <li>Free Quote Within 5 to 10 Minutes</li>
                                <li>Free Consultation</li>
                                <li>Immediate and Unlimited Revisions</li>
                                <li>24/7 Email Support</li>
                                <li>Live Chat and Call Support</li>
                                <li>No Hidden Charges</li>
                                <li>Refund Policy (Risk Free)</li>
                            </ul>
                            <button className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-6 py-2 rounded-full hover:bg-blue-700 dark:hover:bg-blue-500 transition duration-300">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
