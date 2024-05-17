'use client'
import Link from "next/link";
import { CardContent, Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ContactForm from "@/components/contact-form";
import Testimonials from "./testimonials.component";
import { FileSpreadsheet, Upload, CircleCheckBig, Mail, Phone, X, Menu, Clock, Calculator, Target, Headphones, MessageCircle, MailIcon, PhoneIcon, ClockIcon, CircleDollarSign, Check, LineChart } from 'lucide-react';
import Navbar from "./navbar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqData = [
    {
        "question": "What Estimate & Takeoff Services Does TakeOffer Offer?",
        "answer": "TakeOffer specializes in providing detailed estimating services for a diverse range of projects, including residential, commercial, and industrial constructions. Read more about our material takeoffs."
    },
    {
        "question": "How Can Your Estimating Services Benefit My Construction Project?",
        "answer": "Our estimating services provide accurate and comprehensive material assessments, allowing you to budget effectively, bid competitively, and reduce the risk of costly oversights or underestimations in your projects."
    },
    {
        "question": "How Accurate Are Your Estimates And Takeoffs?",
        "answer": "Our estimates and takeoffs are highly accurate, thanks to our experienced team of estimators and advanced software tools. We continuously update our databases to reflect current market conditions, ensuring reliable and precise estimates."
    },
    {
        "question": "Do You Provide Support After Delivering The Estimate?",
        "answer": "Yes, we offer post-estimate support to address any questions or revisions you may have. Our goal is to ensure that you are fully confident and prepared to use the estimate for your bidding and construction planning."
    },
    {
        "question": "Can You Handle Urgent Estimating Requests?",
        "answer": "We understand the dynamic nature of the construction industry and can accommodate urgent estimating requests depending on our current workload. Please contact us to discuss your specific timeline needs, and we will do our best to meet them."
    },
    {
        "question": "How Do You Ensure The Confidentiality And Security Of Our Project Information?",
        "answer": "We take confidentiality and security seriously, employing strict data protection protocols and non-disclosure agreements to safeguard all client information and project details."
    }
]

import Footer from "./footer";
import { Input } from "@/components/ui/input";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useState } from "react";

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

    const [searchQuery, setSearchQuery] = useState('');

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
                                    <Link href="#contact"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="container mx-auto py-6 dark:bg-gray-800">
                    <div className="flex flex-col items-center mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="col-span-1 flex flex-col items-center justify-center h-full">
                                <CircleDollarSign className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Competitive Pricing</h1>
                                <p className="text-base md:text-lg lg:text-base text-gray-700 dark:text-gray-300 p-5">
                                    Experience the edge of competitive pricing with our construction estimate services, boasting an unparalleled 99% accuracy rate. Bid confidently with tailored project costs that eliminate overruns, ensuring a balanced budget every time.
                                </p>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center h-full">
                                <CircleCheckBig className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Cost-Effective</h1>
                                <p className="text-base md:text-lg lg:text-base text-gray-700 dark:text-gray-300 p-5">
                                    Unlock cost-effective outsourcing solutions tailored to your needs. Say goodbye to full-time estimator expenses and hello to affordable, top-quality takeoffs. Pay only for the hours you require, maximizing your budget without compromising on excellence.
                                </p>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center h-full">
                                <Clock className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Fast Turnaround Time</h1>
                                <p className="text-base md:text-lg lg:text-base text-gray-700 dark:text-gray-300 p-5">
                                    Speed is the name of the game with our fast turnaround times. Get estimates and takeoffs promptly to stay ahead of the curve in the market. Effortlessly meet your deadlines and secure lucrative opportunities with ease.
                                </p>
                            </div>
                            <div className="col-span-1 flex flex-col items-center justify-center h-full">
                                <LineChart className="h-12 w-12 text-black dark:text-gray-400 mb-4" />
                                <h1 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">Efficiency and Growth</h1>
                                <p className="text-base md:text-lg lg:text-base text-gray-700 dark:text-gray-300 p-5">
                                    Efficiency fuels growth, and our services are your ticket to both. Streamline operations and pave the way for expansion by outsourcing your estimates to us. Free up valuable resources for bigger bids and watch your business soar.
                                </p>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="container mx-auto py-6 dark:bg-gray-800">
                    {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"> */}
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    {/* <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">Services</div> */}
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Projects</h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Our estimation and takeoff services provide the competitive edge you need to succeed.
                                    </p>
                                </div>
                                <ul className="grid gap-4">
                                    <li className="flex items-start gap-4">
                                        <CircleDollarSign className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <div>
                                            <h4 className="font-medium">Competitive Pricing</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Accurate construction estimates with a 99% accuracy rate, ensuring a balanced budget and no
                                                overruns.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Calculator className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <div>
                                            <h4 className="font-medium">Cost-Effective</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Affordable outsourcing solutions that eliminate the need for a full-time estimator, allowing clients
                                                to pay only for the hours they require.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <div>
                                            <h4 className="font-medium">Fast Turnaround Time</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Prompt estimates and takeoffs to help clients stay ahead of the competition and meet their
                                                deadlines.
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <LineChart className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                                        <div>
                                            <h4 className="font-medium">Efficiency and Growth</h4>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Streamlined operations that free up resources, allowing clients to focus on expansion and growth.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <img
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="/takeoff.webp"
                                width="550"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-6 md:py-12 lg:py-16">
                    <div className="container grid gap-12 px-4 md:px-6">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
                            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                Here's a breakdown of how you can use our service:
                            </p>
                        </div>
                        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center dark:bg-gray-50 dark:text-gray-900">
                                        <Upload className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Submit Your Floor Plans</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Please submit your drawings and specifications to us by attaching your documents through our contact
                                            form or by sending them directly to contact@takeoffer.net. We accept documents in PDF format for your
                                            convenience. If you have any inquiries or need assistance, feel free to reach out at any time. Our
                                            team is always ready to support you.
                                        </p>
                                        {/* <div className="flex items-center gap-2 pt-2">
                                            <DownloadIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">Download template</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center dark:bg-gray-50 dark:text-gray-900">
                                        <QuoteIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Get Your Project Quote</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            After we look at your plans, we'll quickly send you a free quote for estimation services and material
                                            takeoffs. If you say yes to our quote, we'll start working on your project right away, making sure it
                                            fits your schedule and what you need. Then, we'll get your project's material takeoff ready for you.
                                        </p>
                                        {/* <div className="flex items-center gap-2 pt-2">
                                            <QuoteIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">View sample quote</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center dark:bg-gray-50 dark:text-gray-900">
                                        <FileSpreadsheet className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">Receive Your Estimate</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            You'll get an estimate from us with all the details and estimates your project needs. If you have
                                            questions at any point, our team is here to help you out.
                                        </p>
                                        {/* <div className="flex items-center gap-2 pt-2">
                                            <CurrencyIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                            <span className="text-sm text-gray-500 dark:text-gray-400">View sample estimate</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="contact" className="w-full py-6 md:py-12 lg:py-16 bg-white">
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
                                    <Card className="w-full">
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
                <section className="w-full py-6 md:py-12 lg:py-16">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 md:gap-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                                <div className="grid gap-1">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                                    <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                        Explore our wide range of services to find the perfect solution for your needs.
                                    </p>
                                </div>
                                <div className="w-full md:w-auto">
                                    <Input
                                        className="w-full md:w-[300px]"
                                        placeholder="Search services..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {services
                                    .filter(service => service.title.toLowerCase().includes(searchQuery.toLowerCase()))
                                    .map((service, index) => (
                                        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
                                            <Link className="absolute inset-0 z-10" href="#">
                                                <span className="sr-only">View</span>
                                            </Link>
                                            <img
                                                alt={service.image}
                                                className="object-cover w-full h-60"
                                                height={300}
                                                src={service.image}
                                                style={{
                                                    aspectRatio: "500/300",
                                                    objectFit: "cover",
                                                }}
                                                width={500}
                                            />
                                            <div className="bg-white p-4 dark:bg-gray-950">
                                                <h3 className="font-bold text-xl">{service.title}</h3>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section id="services" className="flex justify-center w-full py-6 md:py-12 lg:py-16">
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
                </section> */}
                {/* <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
                    <Testimonials />
                </section> */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    Hear from our satisfied customers about their experience with our product.
                                </p>
                            </div>
                            <Carousel className="w-full max-w-3xl">
                                <CarouselContent>
                                    <CarouselItem>
                                        <div className="p-4 md:p-6">
                                            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                                “The customer service I received was exceptional. The support team went above and beyond to address
                                                my concerns.”
                                            </blockquote>
                                            <div className="mt-4 flex items-center justify-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                <div>Jules Winnfield</div>
                                                <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                                                <div>CEO, Acme Inc</div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="p-4 md:p-6">
                                            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                                “I was hesitant at first, but after using the product, I was blown away by its capabilities. It has
                                                truly transformed the way I work.”
                                            </blockquote>
                                            <div className="mt-4 flex items-center justify-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                <div>Mia Wallace</div>
                                                <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                                                <div>Product Manager, Umbrella Corp</div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <div className="p-4 md:p-6">
                                            <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                                                “I was impressed by the attention to detail and the overall user experience. It's clear the team put
                                                a lot of thought into the design.”
                                            </blockquote>
                                            <div className="mt-4 flex items-center justify-center space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                <div>Vincent Vega</div>
                                                <div className="h-1 w-1 rounded-full bg-gray-300 dark:bg-gray-700" />
                                                <div>UX Designer, Acme Inc</div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
                                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
                            </Carousel>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        {/* <div className="grid gap-6 lg:grid-cols-2 lg:gap-12"> */}
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Estimating and Takeoff Services
                            </h2>
                            <p className="mt-4 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                TakeOffer provides comprehensive estimating and takeoff services to construction projects of
                                all sizes and complexities. Our team of experienced professionals specializes in delivering accurate and
                                reliable cost estimates and detailed material takeoffs to help our clients make informed decisions and
                                ensure the success of their projects.
                            </p>
                        </div>
                        <div className="grid gap-6 py-12">
                            {faqData.map((faq, index) => (
                                <Accordion key={index} className="w-full" collapsible type="single">
                                    <AccordionItem value="project-specialties">
                                        <AccordionTrigger key={index} className="text-xl font-bold">{faq.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="mt-2 text-gray-500 md:text-base/relaxed lg:text-sm/relaxed xl:text-base/relaxed dark:text-gray-400">
                                                {faq.answer}
                                            </p>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </div>
                        {/* </div> */}
                    </div>
                </section>
            </main>
            <Footer />
        </div >
    );
}

function QuoteIcon(props) {
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
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
    )
}

function CurrencyIcon(props) {
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
            <circle cx="12" cy="12" r="8" />
            <line x1="3" x2="6" y1="3" y2="6" />
            <line x1="21" x2="18" y1="3" y2="6" />
            <line x1="3" x2="6" y1="21" y2="18" />
            <line x1="21" x2="18" y1="21" y2="18" />
        </svg>
    )
}


function DownloadIcon(props) {
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
    )
}


function Heading1Icon(props) {
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
            <path d="M4 12h8" />
            <path d="M4 18V6" />
            <path d="M12 18V6" />
            <path d="m17 12 3-2v8" />
        </svg>
    )
}


function Heading2Icon(props) {
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
            <path d="M4 12h8" />
            <path d="M4 18V6" />
            <path d="M12 18V6" />
            <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
        </svg>
    )
}