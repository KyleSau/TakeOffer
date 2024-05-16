'use client'
import Link from "next/link";
import { CardContent, Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import Testimonials from "./testimonials.component";
import { Mail, Phone, X, Menu, Clock, Calculator, Target, Headphones, MessageCircle, MailIcon, PhoneIcon, ClockIcon, CircleDollarSign, Check, LineChart } from 'lucide-react';
import { useState } from "react";
import Navbar from "./navbar";
import Head from 'next/head'

const services = [
    {
        title: "Cladding Takeoff",
        description: "A detailed measurement and quantification of materials required for the exterior covering or facade of buildings and structures.",
        image: "cladding.jpeg",
    },
    {
        title: "Concrete Estimating Services",
        description: "The volume, cost, and materials needed for concrete structures, crucial for budgeting and material procurement.",
        image: "concrete.jpg",
    },
    {
        title: "Doors & Windows Takeoff",
        description: "Find out the number, sizes, types, and finishes of doors and windows for a construction project.",
        image: "doorswindows.jpeg",
    },
    {
        title: "Drywall Takeoff",
        description: "Quantify sheets, compound, tape, and fasteners for precise budgeting and material adequacy in wall and ceiling installations.",
        image: "drywall.jpg",
    },
    {
        title: "EIFS Takeoff",
        description: "Quantify the materials for insulation and finish systems, key for thermal efficiency and aesthetics in construction.",
        image: "eifs.jpg",
    },
    {
        title: "Electrical Estimating Services",
        description: "All lighting fixtures, switches, outlets, and other electrical components required for a construction project.",
        image: "electric.jpeg",
    },
    {
        title: "Flooring Estimating Services",
        description: "The types, quantities, and costs of flooring materials needed for a project, including tile, hardwood, carpet, and underlayment.",
        image: "flooring.webp",
    },
    {
        title: "Framing Takeoff",
        description: "All materials required for the structural framework, including lumber, nails, metal connectors, and sheathing.",
        image: "framing.jpeg",
    },
    {
        title: "Insulation Estimating Services",
        description: "Calculates the amount of insulation material needed for a project, including type, thickness, and area coverage.",
        image: "insulation.jpg",
    },
    {
        title: "Landscaping Estimating Services",
        description: "We calculate the quantities and types of materials needed for your landscaping projects.",
        image: "landscaping.jpeg",
    },
    {
        title: "Lumber Takeoff",
        description: "The quantities and types of lumber required for construction projects, ensuring precise material procurement.",
        image: "lumber.jpg",
    },
    {
        title: "Masonry Estimating Services",
        description: "Quantifies the various types of bricks, blocks, stones, mortar, and other masonry materials needed.",
        image: "masonry.jpeg",
    },
    {
        title: "Metal Framing Takeoff",
        description: "The quantities and specifications of metal studs, tracks, fasteners, and other components required for framing construction projects.",
        image: "metalframing.jpg",
    },
    {
        title: "Millwork Estimating Services",
        description: "The types and quantities of custom-made architectural woodwork and cabinetry, required for construction projects.",
        image: "millwork.jpg",
    },
    {
        title: "Painting Takeoff",
        description: "Assess the area to be painted, calculates the types and quantities of paint, primer, and other materials needed.",
        image: "painting.jpeg",
    },
    {
        title: "Plumbing Estimating Services",
        description: "The types and quantities of plumbing fixtures such as sinks, faucets, toilets, showers, and more.",
        image: "plumbing.jpeg",
    },
    {
        title: "Rebar Takeoff",
        description: "The quantities and specifications of reinforcing bars (rebar) required.",
        image: "rebar.jpg",
    },
    {
        title: "Roofing Estimating Services",
        description: "The quantities and specifications of roofing materials, such as shingles, tiles, underlayment, flashing, and nails.",
        image: "roofing.jpeg",
    },
    {
        title: "Siding Takeoff",
        description: "The specifications and quantities of siding materials, such as vinyl, wood, fiber cement, or metal panels.",
        image: "siding.jpg",
    },
    {
        title: "Site Work Takeoff",
        description: "The quantities of all materials, labor, and equipment needed for site preparation and development. Earthwork / Excavation.",
        image: "excavating.jpeg",
    },
    {
        title: "Steel Framing Takeoff",
        description: "The quantities and specifications of steel framing materials, including beams, columns, studs, and joists.",
        image: "steel-framing.jpg",
    },
    {
        title: "Stucco Takeoff",
        description: "The specifications and quantities of stucco materials, such as cement, sand, lime, and additives.",
        image: "stucco.jpg",
    },
    {
        title: "Tenant Improvement Takeoff",
        description: "The quantities and costs of all materials, labor, and equipment for renovating or customizing commercial spaces.",
        image: "tenant-improvement.jpg",
    },
    {
        title: "Tile Takeoff",
        description: "The quantities and specifications of tile materials, including ceramic, porcelain, glass, or stone tiles.",
        image: "tile.webp",
    },
];

export default function Component() {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <section
                    className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: "url('/bg.jpg')" }}
                >
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4 p-6 rounded-lg">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-sky-100 dark:text-gray-50">
                                        Construction<br />Estimating Services
                                    </h1>

                                    <p className="max-w-full font-bold text-gray-100 text-xl dark:text-gray-400">
                                        Material Takeoff For Residential & Commercial Construction Projects. Handle More Bids, Win More Projects.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Link href=""
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto py-12 md:py-24 lg:py-32 dark:bg-gray-800">
                    <div className="flex flex-col items-center mb-8">
                        <div className="grid grid-cols-4 gap-8">
                            <div className="col-span-1  flex flex-col items-center justify-center">
                                <CircleDollarSign className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <p className="text-lg text-gray-700 dark:text-gray-300 bg-gray-200 p-5">
                                    Experience the edge of competitive pricing with our construction estimate services, boasting an unparalleled 99% accuracy rate. Bid confidently with tailored project costs that eliminate overruns, ensuring a balanced budget every time.
                                </p>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                                <Check className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <p className="text-lg text-gray-700 bg-gray-200 p-5 dark:text-gray-300">
                                    Unlock cost-effective outsourcing solutions tailored to your needs. Say goodbye to full-time estimator expenses and hello to affordable, top-quality takeoffs. Pay only for the hours you require, maximizing your budget without compromising on excellence.
                                </p>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                                <Clock className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <p className="text-lg text-gray-700 bg-gray-200 p-5 dark:text-gray-300">
                                    Speed is the name of the game with our fast turnaround times. Get estimates and takeoffs promptly to stay ahead of the curve in the market. Effortlessly meet your deadlines and secure lucrative opportunities with ease.
                                </p>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center">
                                <LineChart className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <p className="text-lg bg-gray-200 p-5 text-gray-700 dark:text-gray-300">
                                    Efficiency fuels growth, and our services are your ticket to both. Streamline operations and pave the way for expansion by outsourcing your estimates to us. Free up valuable resources for bigger bids and watch your business soar.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Construction Estimation and Material Takeoff
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        TakeOffer provides high-quality and competitively priced construction estimation and material takeoff
                                        services. Our team of experienced professionals ensures accurate and detailed reports to help you plan
                                        your projects effectively.
                                    </p>
                                </div>
                                <div className="grid gap-4">
                                    <div className="flex items-center gap-4">
                                        <Mail className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                        <div>
                                            <div className="font-medium">Email</div>
                                            <a className="text-gray-500 hover:underline dark:text-gray-400" href="mailto:contact@takeoffer.net">
                                                contact@takeoffer.net
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                        <div>
                                            <div className="font-medium">Phone</div>
                                            <a className="text-gray-500 hover:underline dark:text-gray-400" href="tel:+18159958820">
                                                +1 (815) 995-8820
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Clock className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                                        <div>
                                            <div className="font-medium">Working Hours</div>
                                            <p className="text-gray-500 dark:text-gray-400">24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="flex min-[400px]:flex-row justify-center">
                                    <Card className="w-full w-3/4">
                                        <CardHeader>
                                            <CardTitle>Contact Form</CardTitle>
                                            <CardDescription>
                                                Want estimates or have any questions? Fill out the form and our team will get back to you.
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <ContactForm />
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="flex justify-center w-full py-6 md:py-12 lg:py-16">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800 dark:text-gray-50">
                                Comprehensive Construction Estimation Services
                            </h2>
                            <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                                We offer a wide range of construction estimation services to meet your project needs.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                                    <img src={service.image} alt={service.title} className="h-32 w-32 object-cover rounded-md" />
                                    <h3 className="text-lg font-semibold mt-2 text-gray-800 dark:text-gray-50">{service.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-center mt-2">
                                        {service.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
                    <Testimonials />
                </section>
            </main>
            <footer className="bg-gray-900 text-gray-200 py-12 md:py-16 lg:py-20">
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
            </footer>
        </div >
    );
}
