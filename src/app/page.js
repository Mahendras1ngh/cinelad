// import Navbar from '../components/layout/Navbar'
// import Hero from '../components/sections/Hero'
// import Services from '../components/sections/Services'
// import Pricing from '../components/sections/Pricing'
// import Process from '../components/sections/Process'
// import Testimonials from '../components/sections/Testimonials'
// import FAQ from '../components/sections/FAQ'
// import Footer from '../components/layout/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Unavailable</h1>
          <p className="text-gray-600">
            We're currently experiencing technical difficulties. Please try again later.
          </p>
        </div>
        <div className="text-sm text-gray-500">
          Error Code: 503
        </div>
      </div>
    </main>
  )
}

{/* 
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Process />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
*/}