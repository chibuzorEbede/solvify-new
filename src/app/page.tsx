import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      {/* Hero Section */}
      <section className="w-full max-w-6xl flex flex-col items-center text-center pt-16 pb-8 px-4 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Struggling with Academic Work?
          <br />
          <span className="text-orange-500">We&apos;ve Got You Covered</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Expert assistance for assignments, exams, and dissertations
        </p>
        <a
          href="#"
          className="px-8 py-3 bg-blue-800 text-white rounded-full font-semibold text-lg hover:bg-blue-900 transition mb-8"
        >
          Get started
        </a>
        {/* Decorative dots */}
        <span className="absolute left-4 top-8 w-3 h-3 bg-blue-800 rounded-full"></span>
        <span className="absolute right-8 top-24 w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="absolute left-12 bottom-8 w-3 h-3 bg-orange-500 rounded-full"></span>
        <span className="absolute right-4 bottom-16 w-3 h-3 bg-blue-800 rounded-full"></span>
        {/* Hero Image */}
        <div className="w-full flex justify-center mt-4">
          <Image
            src="/hero_image.png"
            alt="Students collaborating"
            width={600}
            height={350}
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* About Us Section */}
      <section
        id="about"
        className="w-full max-w-6xl flex flex-col items-center text-center py-12 px-4"
      >
        <h2 className="text-blue-800 font-semibold mb-2">About Us</h2>
        <h3 className="text-2xl font-bold mb-4">
          We Render Reliable, Confidential, and High-Quality Academic Assistance
        </h3>
        <p className="text-gray-700 max-w-2xl mb-8">
          At Solvify Concepts, we believe that academic success should be within
          reach for every student. That&apos;s why we provide expert support to
          help you navigate your academic journey with ease. Whether it&apos;s
          assignments, coursework, dissertation materials, or assistance for
          your exams, our professionals have the support system you need to
          succeed. We understand the challenges students face: tight deadlines,
          complex topics, and the pressure to excel. We offer reliable,
          confidential, and high-quality academic assistance tailored to your
          specific needs.
        </p>
        <div className="w-full flex justify-center">
          <Image
            src="/about_us_image.png"
            alt="About us"
            width={400}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full max-w-6xl py-12 px-4">
        <h2 className="text-center text-blue-800 font-semibold mb-2">
          Our Services
        </h2>
        <h3 className="text-center text-2xl font-bold mb-8">
          We take out the academic stress
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">📝</div>
            <h4 className="font-bold mb-2">Assignments & Coursework</h4>
            <p className="text-gray-700 text-center">
              Well-researched, plagiarism-free content tailored to your
              requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">🎓</div>
            <h4 className="font-bold mb-2">Dissertation & Research Guidance</h4>
            <p className="text-gray-700 text-center">
              Expert insights to refine, structure, and enhance your research.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <div className="text-3xl mb-2">✍️</div>
            <h4 className="font-bold mb-2">Essay & Report Writing</h4>
            <p className="text-gray-700 text-center">
              Professionally structured and well-articulated academic papers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-6xl py-12 px-4 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <Image
            src="/why_choose_us_image.png"
            alt="Why choose us"
            width={400}
            height={250}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-blue-800 font-semibold">Why Choose Us?</h2>
          <h3 className="text-2xl font-bold mb-2">
            Your Success, Our Priority
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-2xl">✔️</span> Experienced Academic Experts
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✔️</span> 100% Confidential & Reliable
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✔️</span> Timely Delivery
            </li>
            <li className="flex items-center gap-2">
              <span className="text-2xl">✔️</span> Affordable Pricing
            </li>
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-black text-white py-12 px-4">
        <h2 className="text-center text-2xl font-bold mb-8">Testimonials</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="bg-white text-black rounded-lg shadow p-6 max-w-xs w-full flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center overflow-hidden">
              <Image
                src="/solvify-logo.png"
                alt="Client"
                width={48}
                height={48}
              />
            </div>
            <div className="font-bold mb-1">Sarah Lee</div>
            <div className="text-sm text-gray-600 text-center mb-2">
              Super fast and reliable service! Helped me ace my coursework.
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow p-6 max-w-xs w-full flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center overflow-hidden">
              <Image
                src="/solvify-logo.png"
                alt="Client"
                width={48}
                height={48}
              />
            </div>
            <div className="font-bold mb-1">James Okoro</div>
            <div className="text-sm text-gray-600 text-center mb-2">
              Friendly team and great results. Highly recommend Solvify!
            </div>
          </div>
          <div className="bg-white text-black rounded-lg shadow p-6 max-w-xs w-full flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-200 mb-2 flex items-center justify-center overflow-hidden">
              <Image
                src="/solvify-logo.png"
                alt="Client"
                width={48}
                height={48}
              />
            </div>
            <div className="font-bold mb-1">Priya Sharma</div>
            <div className="text-sm text-gray-600 text-center mb-2">
              Excellent support and always on time. Thank you so much!
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full max-w-4xl py-12 px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <details className="bg-gray-100 rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">
              What types of academic work do you assist with?
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              We help with assignments, coursework, essays, reports,
              dissertations, and exam preparation across a wide range of
              academic subjects.
            </p>
          </details>
          <details className="bg-gray-100 rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">
              Is your service confidential?
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              Absolutely. We guarantee 100% confidentiality and never share your
              personal or academic information with third parties.
            </p>
          </details>
          <details className="bg-gray-100 rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">
              How quickly can I get my work done?
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              Turnaround time depends on the complexity and length of your
              request, but we always strive to meet your deadlines. Urgent
              requests are welcome!
            </p>
          </details>
          <details className="bg-gray-100 rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">How do I get started?</summary>
            <p className="mt-2 text-gray-700 text-sm">
              Simply click the &quot;Contact Us&quot; button, fill out the form
              with your requirements, and our team will get in touch with you as
              soon as possible.
            </p>
          </details>
          <details className="bg-gray-100 rounded-lg p-4 cursor-pointer">
            <summary className="font-semibold">
              Can I request revisions?
            </summary>
            <p className="mt-2 text-gray-700 text-sm">
              Yes! We offer free revisions to ensure you are completely
              satisfied with the final work.
            </p>
          </details>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between py-12 px-4 gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-2">Let&apos;s work together</h2>
          <p className="text-gray-700 mb-4">
            To bring your academic goals to reality
          </p>
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-800 text-white rounded-full font-semibold text-lg hover:bg-blue-900 transition"
          >
            Contact Us
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/lets_work_together_image.png"
            alt="Work together"
            width={300}
            height={200}
            className="rounded-xl object-cover"
          />
        </div>
      </section>
    </div>
  );
}
