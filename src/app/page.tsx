import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>TakeOffer - Precision in Construction Estimating</title>
        <meta name="description" content="Expert quantity surveying and cost estimation tailored to your construction needs. Get zip code-based estimates for all construction trades." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/logo.svg" alt="TakeOffer Logo" width={48} height={48} />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Home
                </a>
                <a href="#services" className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  Services
                </a>
                <a href="#testimonials" className="text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                  Testimonials
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a href="#contact" className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Your Trusted Partner in Construction Estimating
          </h1>
          <p className="mt-4 text-lg leading-6 text-gray-600">
            Get precise material take-offs and cost estimates based on your zip code for any construction project.
          </p>
          <a href="#contact" className="mt-8 w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:w-auto">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section id="services" className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                A Better Way to Build
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                From initial demolition to final inspections, our comprehensive estimating services cover all aspects of your construction projects.
              </p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                What Our Clients Say
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                See how we've helped companies streamline their projects with accurate and reliable estimates.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-white text-sm">
            © 2024 TakeOffer. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
