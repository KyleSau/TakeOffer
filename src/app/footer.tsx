"use client"
import { Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function footer() {
    return (
        <div><footer className="bg-gray-900 text-gray-200 py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold">TakeOffer</span>
                    </div>
                    <p className="text-gray-400 text-sm">Empowering businesses to make informed decisions.</p>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Services</h4>
                    <ul className="space-y-1">
                        <li>
                            <Link className="hover:text-gray-300 transition-colors" href="#">
                                Market Analysis
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300 transition-colors" href="#">
                                Competitive Intelligence
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300 transition-colors" href="#">
                                Pricing Optimization
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-gray-300 transition-colors" href="#">
                                Sales Enablement
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Contact</h4>
                    <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                            <Phone className="h-5 w-5" />
                            <a className="text-gray-500 hover:underline dark:text-gray-400" href="tel:+18159958820">
                                +1 (815) 995-8820
                            </a>

                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail className="h-5 w-5" />
                            <a className="text-gray-500 hover:underline dark:text-gray-400" href="mailto:contact@takeoffer.net">
                                contact@takeoffer.net
                            </a>
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="text-lg font-semibold">Legal</h4>
                    <ul className="space-y-1">
                        <li>
                            <Link className="hover:text-gray-300 transition-colors" href="#">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer></div>
    )
}
