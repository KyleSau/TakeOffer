'use client'
import Link from "next/link";
import { CardContent, Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import ContactForm from "@/components/contact-form";
import Testimonials from "./testimonials.component";
import { Clock, Calculator, Target, Headphones, MessageCircle } from 'lucide-react';

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
        image: "path_to_image/eifs.jpg",
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
        image: "path_to_image/insulation.jpg",
    },
    {
        title: "Landscaping Estimating Services",
        description: "We calculate the quantities and types of materials needed for your landscaping projects.",
        image: "landscaping.jpeg",
    },
    {
        title: "Lumber Takeoff",
        description: "The quantities and types of lumber required for construction projects, ensuring precise material procurement.",
        image: "path_to_image/lumber.jpg",
    },
    {
        title: "Masonry Estimating Services",
        description: "Quantifies the various types of bricks, blocks, stones, mortar, and other masonry materials needed.",
        image: "masonry.jpeg",
    },
    {
        title: "Metal Framing Takeoff",
        description: "The quantities and specifications of metal studs, tracks, fasteners, and other components required for framing construction projects.",
        image: "path_to_image/metal_framing.jpg",
    },
    {
        title: "Millwork Estimating Services",
        description: "The types and quantities of custom-made architectural woodwork and cabinetry, required for construction projects.",
        image: "path_to_image/millwork.jpg",
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
        title: "Reinforcing Steel Takeoff",
        description: "The quantities and specifications of reinforcing bars (rebar) required.",
        image: "path_to_image/reinforcing_steel.jpg",
    },
    {
        title: "Roofing Estimating Services",
        description: "The quantities and specifications of roofing materials, such as shingles, tiles, underlayment, flashing, and nails.",
        image: "roofing.jpeg",
    },
    {
        title: "Siding Takeoff",
        description: "The specifications and quantities of siding materials, such as vinyl, wood, fiber cement, or metal panels.",
        image: "path_to_image/siding.jpg",
    },
    {
        title: "Site Work Takeoff",
        description: "The quantities of all materials, labor, and equipment needed for site preparation and development. Earthwork / Excavation.",
        image: "path_to_image/site_work.jpg",
    },
    {
        title: "Steel Framing Takeoff",
        description: "The quantities and specifications of steel framing materials, including beams, columns, studs, and joists.",
        image: "path_to_image/steel_framing.jpg",
    },
    {
        title: "Stucco Takeoff",
        description: "The specifications and quantities of stucco materials, such as cement, sand, lime, and additives.",
        image: "path_to_image/stucco.jpg",
    },
    {
        title: "Tenant Improvement Takeoff",
        description: "The quantities and costs of all materials, labor, and equipment for renovating or customizing commercial spaces.",
        image: "path_to_image/tenant_improvement.jpg",
    },
    {
        title: "Tile Takeoff",
        description: "The quantities and specifications of tile materials, including ceramic, porcelain, glass, or stone tiles.",
        image: "path_to_image/tile.jpg",
    },
    {
        title: "Wallcovering Takeoff",
        description: "The specifications and quantities of materials, such as wallpaper, paint, fabric, or decorative panels, required for interior or exterior walls.",
        image: "path_to_image/wallcovering.jpg",
    }
];

export default function Component() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-white px-4 py-5 shadow-sm dark:bg-gray-950 md:px-6">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-2xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl">Take Offer</h1>
                </div>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1 hover:underline text-2xl">
                            Takeoffs
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[300px] max-h-[400px] overflow-y-auto">
                            <DropdownMenuLabel className="px-4 py-2 text-sm font-medium">Takeoff Services</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {services.map((service, index) => (
                                <DropdownMenuItem key={index}>
                                    <Link
                                        className="flex items-center justify-between w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                                        href="#"
                                    >
                                        <span>{service.title}</span>
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link className="flex items-center gap-1 hover:underline text-2xl" href="#">
                        Services
                    </Link>
                    <Link className="flex items-center gap-1 hover:underline text-2xl" href="#">
                        Testimonials
                    </Link>
                    <Link className="flex items-center gap-1 hover:underline text-2xl" href="#">
                        Contact
                    </Link>
                    <Link
                        className="inline-flex h-12 w-36 justify-center items-center rounded-md bg-sky-300 text-m font-medium text-black shadow transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 dark:focus-visible:ring-gray-300"
                        href="#"
                    >
                        Get Started
                    </Link>
                </nav>
            </header>
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
                                        Material Takeoff For Residential & Commercial Construction Projects
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link
                                        className="flex h-10 w-1/3 items-center justify-center rounded-full bg-sky-400 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-yellow-400 dark:text-gray-900 dark:hover:bg-yellow-500 dark:focus-visible:ring-gray-300"
                                        href="#contact"
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        className="flex h-10 w-1/3 items-center justify-center rounded-full border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                                        href="#"
                                    >
                                        Contact Sales
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center mt-20">
                    <div className="flex justify-center space-x-6 ">
                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-50">10,000+</h3>
                            <p className="text-gray-600 dark:text-black">Estimates Done</p>
                            <Calculator className="text-xl text-gray-800 dark:text-gray-50" />
                        </div>
                        <div className="hidden md:block self-center w-px h-12 bg-gray-200 dark:bg-gray-700"></div> {/* Bar Divider */}

                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-50">15+ Years</h3>
                            <p className="text-gray-600 dark:text-gray-600">Experience</p>
                            <Clock className="text-xl text-gray-800 dark:text-gray-50" />
                        </div>
                        <div className="hidden md:block self-center w-px h-12 bg-gray-200 dark:bg-gray-700"></div> {/* Bar Divider */}

                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-50">Precise</h3>
                            <p className="text-gray-600 dark:text-gray-600">Accuracy</p>
                            <Target className="text-xl text-gray-800 dark:text-gray-50" />
                        </div>
                        <div className="hidden md:block self-center w-px h-12 bg-gray-200 dark:bg-gray-700"></div> {/* Bar Divider */}

                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold text-gray-800">Fast</h3>
                            <p className="text-gray-600 dark:text-gray-600">Responses</p>
                            <MessageCircle className="text-xl text-gray-800 dark:text-gray-50" />
                        </div>
                        <div className="hidden md:block self-center w-px h-12 bg-gray-200 dark:bg-gray-700"></div> {/* Bar Divider */}

                        <div className="flex flex-col items-center">
                            <h3 className="text-3xl font-bold text-gray-800">24/7</h3>
                            <p className="text-gray-600 dark:text-gray-600">Support</p>
                            <Headphones className="text-xl text-gray-800 dark:text-gray-50" />
                        </div>

                    </div>
                </section>
                <section id="contact" className="w-full py-6 md:py-12 lg:py-16">
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
                </section>
                <section className="flex justify-center w-full py-6 md:py-12 lg:py-16">
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
                <section className="w-full py-12 md:py-24 lg:py-32 bg-sky-600 dark:bg-gray-800">
                    <Testimonials />
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TakeOffer. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div >
    );
}
