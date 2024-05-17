"use client"
import React from 'react'
import Navbar from '../navbar'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function page() {
    return (
        <div className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Pricing</div>
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Choose the right plan for your needs</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            Flexible pricing options to fit your budget and requirements.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10 mt-10">
                    <Card>
                        <CardHeader>
                            <CardTitle>Single Trade Pricing</CardTitle>
                            <CardDescription>For individual projects</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center">
                                <span className="text-5xl font-bold">$149.99</span>
                            </div>
                            <Separator className="my-4" />
                            <ul className="grid gap-2">
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Turnaround Time 24 to 48 Hrs</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Any Trade or Any Kind of Project</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Free Quote Within 5 to 10 Minutes</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Free Consultation</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Immediate and Unlimited Revisions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>24/7 Email Support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Live Chat and Call Support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>No Hidden Charges</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Refund Policy (Risk Free)</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" size="lg">
                                Get Started
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Pro</CardTitle>
                            <CardDescription>For small businesses</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center">
                                <span className="text-5xl font-bold">$1500/mo</span>
                            </div>
                            <Separator className="my-4" />
                            <ul className="grid gap-2">
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>10 to 15 Projects</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Bid Filing and Consultation</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Material Takeoffs and Cost Management</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Turnaround Time 24 to 48 Hrs</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Any Trade or Any Kind of Project</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Free Quote Within 5 to 10 Minutes</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Free Consultation</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Immediate and Unlimited Revisions</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>24/7 Email Support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Live Chat and Call Support</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>No Hidden Charges</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Refund Policy (Risk Free)</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full" size="lg">
                                Get Started
                            </Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Enterprise</CardTitle>
                            <CardDescription>For large organizations</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center">
                                <span className="text-5xl font-bold">Contact Us</span>
                            </div>
                            <Separator className="my-4" />
                            <ul className="grid gap-2">
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Dedicated Resources</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Manage the bidding network profiles</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Material Takeoffs</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Subcontractor Marketing</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Generating New Project Leads</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Turnaround Time 24 to 48 Hrs</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Any Trade or Any Kind of Project</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckIcon className="mt-1 h-4 w-4 text-green-500" />
                                    <span>Free Quote</span>
                                </li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">
                                Contact Sales
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function CheckIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}