/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Xd2Sde8vGCb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardContent, Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import Nav from "@/components/nav"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "Cabinet Takeoff",
    description: "Unlock precision in cabinetry takeoffs, tailored to fit your project&apos;s exact needs with unparalleled accuracy.",
    image: "path_to_image/cabinet.jpg",
  },
  {
    title: "Civil Takeoff",
    description: "A comprehensive analysis and quantification of all materials and work required for civil engineering and infrastructure projects.",
    image: "path_to_image/civil.jpg",
  },
  {
    title: "Cladding Takeoff",
    description: "A detailed measurement and quantification of materials required for the exterior covering or facade of buildings and structures.",
    image: "path_to_image/cladding.jpg",
  },
  {
    title: "Commercial Estimating",
    description: "Materials, labor, and equipment for commercial building projects, essential for accurate budgeting, scheduling, and procurement.",
    image: "path_to_image/commercial.jpg",
  },
  {
    title: "Concrete Estimating Services",
    description: "The volume, cost, and materials needed for concrete structures, crucial for budgeting and material procurement.",
    image: "path_to_image/concrete.jpg",
  },
  {
    title: "Doors & Windows Takeoff",
    description: "Find out the number, sizes, types, and finishes of doors and windows for a construction project.",
    image: "path_to_image/doors_windows.jpg",
  },
  {
    title: "Drywall Takeoff",
    description: "Quantify sheets, compound, tape, and fasteners for precise budgeting and material adequacy in wall and ceiling installations.",
    image: "path_to_image/drywall.jpg",
  },
  {
    title: "EIFS Takeoff",
    description: "Quantify the materials for insulation and finish systems, key for thermal efficiency and aesthetics in construction.",
    image: "path_to_image/eifs.jpg",
  },
  {
    title: "Electrical Estimating Services",
    description: "All lighting fixtures, switches, outlets, and other electrical components required for a construction project.",
    image: "path_to_image/electrical.jpg",
  },
  {
    title: "Flooring Estimating Services",
    description: "The types, quantities, and costs of flooring materials needed for a project, including tile, hardwood, carpet, and underlayment.",
    image: "path_to_image/flooring.jpg",
  },
  {
    title: "Framing Takeoff",
    description: "All materials required for the structural framework, including lumber, nails, metal connectors, and sheathing.",
    image: "path_to_image/framing.jpg",
  },
  {
    title: "Home Renovation Takeoff",
    description: "Quantifies materials, fixtures, and finishes for home updates, covering structural, electrical, and plumbing.",
    image: "path_to_image/home_renovation.jpg",
  },
  {
    title: "HVAC Takeoff",
    description: "The quantities and types of heating, ventilation, and air conditioning units and materials needed for a project.",
    image: "path_to_image/hvac.jpg",
  },
  {
    title: "Insulation Estimating Services",
    description: "Calculates the amount of insulation material needed for a project, including type, thickness, and area coverage.",
    image: "path_to_image/insulation.jpg",
  },
  {
    title: "Landscaping Estimating Services",
    description: "We calculate the quantities and types of materials needed for your landscaping projects.",
    image: "path_to_image/landscaping.jpg",
  },
  {
    title: "Lumber Takeoff",
    description: "The quantities and types of lumber required for construction projects, ensuring precise material procurement.",
    image: "path_to_image/lumber.jpg",
  },
  {
    title: "Masonry Estimating Services",
    description: "Quantifies the various types of bricks, blocks, stones, mortar, and other masonry materials needed.",
    image: "path_to_image/masonry.jpg",
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
    description: "It methodically assesses the area to be painted, calculates the types and quantities of paint, primer, and other materials needed.",
    image: "path_to_image/painting.jpg",
  },
  {
    title: "Plumbing Estimating Services",
    description: "The types and quantities of plumbing fixtures such as sinks, faucets, toilets, showers, and more.",
    image: "path_to_image/plumbing.jpg",
  },
  {
    title: "Precast Takeoff",
    description: "The specifications and quantities of precast concrete elements required for projects.",
    image: "path_to_image/precast.jpg",
  },
  {
    title: "Reinforcing Steel Takeoff",
    description: "The quantities and specifications of reinforcing bars (rebar) required.",
    image: "path_to_image/reinforcing_steel.jpg",
  },
  {
    title: "Residential Estimating",
    description: "The quantities and costs of all materials, labor, and equipment needed for residential projects.",
    image: "path_to_image/residential.jpg",
  },
  {
    title: "Roofing Estimating Services",
    description: "The quantities and specifications of roofing materials, such as shingles, tiles, underlayment, flashing, and nails.",
    image: "path_to_image/roofing.jpg",
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
        <div className="flex items-center gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold" href="#">
            <span className="sr-only">Acme Construction</span>
          </Link>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:underline">
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
                    {/* <ChevronRightIcon className="h-4 w-4" /> */}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link className="flex items-center gap-1 hover:underline" href="#">
            Services
          </Link>
          <Link className="flex items-center gap-1 hover:underline" href="#">
            Testimonials
          </Link>
          <Link className="flex items-center gap-1 hover:underline" href="#">
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
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Accurate Construction Estimations
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Get precise and reliable construction cost estimations with our advanced AI-powered service.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Started
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Contact Sales
                  </Link>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold">10,000+</h3>
                    <p className="text-gray-500 dark:text-gray-400">Estimates Done</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold">15+</h3>
                    <p className="text-gray-500 dark:text-gray-400">Years of Experience</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <h3 className="text-3xl font-bold">99.9%</h3>
                    <p className="text-gray-500 dark:text-gray-400">Precision</p>
                  </div>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/woman-takeoff.webp"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex min-[400px]:flex-row justify-center">
            <Card className="w-full w-3/4">
              <CardHeader>
                {/* Add Lucide CircleCheck icon (green) */}
                F
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>
                  Want estimates or have any questions? Fill out the form and our team will get back to you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" required />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" required />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:space-x-4">
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" required type="email" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" required type="tel" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" required />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="files">Upload Files</Label>
                    <Input id="files" pattern="[0-9]{10}"
                      title="Please enter a valid 10-digit phone number" multiple required type="file" />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Our Services
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Comprehensive Construction Estimation Services
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We offer a wide range of construction estimation services to meet your project needs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                  <img src={service.image} alt={service.title} className="h-32 w-32 object-cover" />
                  <h3 className="text-lg font-semibold mt-2">{service.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center mt-2">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Industry Leaders</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  See what our clients have to say about our construction estimation services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “The accuracy of the estimations provided by TakeOffer is simply unmatched. It has significantly
                    improved our project planning and budgeting.“
                  </blockquote>
                  <div>
                    <div className="font-semibold">John Doe</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">CEO, XYZ Constructions</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “TakeOffer&apos;s service has been a game changer for us. It has helped us save time and resources in our
                    construction projects.“
                  </blockquote>
                  <div>
                    <div className="font-semibold">Jane Smith</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Project Manager, ABC Builders</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                    “We have been using TakeOffer for the past year and it has been a great experience. Their customer
                    support is also excellent.“
                  </blockquote>
                  <div>
                    <div className="font-semibold">Robert Johnson</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Owner, Johnson Enterprises</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Achievements
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by the Best</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are proud to have worked with some of the top construction companies in the world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <img
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center sm:w-full lg:order-last"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
              <img
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center sm:w-full lg:order-last"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
              <img
                alt="Logo"
                className="mx-auto aspect-[2/1] overflow-hidden rounded-lg object-contain object-center sm:w-full lg:order-last"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
            </div>
          </div>
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
  )
}

function ConstructionIcon(props) {
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
      <rect x="2" y="6" width="20" height="8" rx="1" />
      <path d="M17 14v7" />
      <path d="M7 14v7" />
      <path d="M17 3v3" />
      <path d="M7 3v3" />
      <path d="M10 14 2.3 6.3" />
      <path d="m14 6 7.7 7.7" />
      <path d="m8 6 8 8" />
    </svg>
  )
}