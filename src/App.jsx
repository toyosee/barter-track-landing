import React from 'react';
import {
  FaUserCog,
  FaChartLine,
  FaShieldAlt,
  FaClock,
  FaFileAlt,
  FaMobileAlt,
  FaBrain,
  FaCheckCircle,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook
} from 'react-icons/fa';

import { useEffect } from 'react';
import { Toaster} from 'react-hot-toast';
import ContactForm from './components/ContactForm';
import CTAPopup from './components/CTAPopUp';

export default function App() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 min-h-screen font-sans text-gray-800">
      <Toaster
          position="top-left"
          reverseOrder={false}
          toastOptions={{
            duration: 4000,
            style: {
              background: '#152d56',
              color: '#ffffff',
              fontWeight: '500',
              borderRadius: '8px',
              padding: '12px 16px',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: '#152d56',
            },
          }}
        />
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0">
        <div className="flex items-center space-x-3">
          {/* <img src="/bartertrack.png" alt="BarterTrack Logo" className="h-10 w-auto" /> */}
          <h1 className="text-2xl font-bold text-[#152d56]"><a href="/">BarterTrack</a></h1>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-yellow-500 transition">Home</a>
          <a href="#about" className="hover:text-yellow-500 transition">About</a>
          <a href="#features" className="hover:text-yellow-500 transition">Features</a>
          <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
        </div>
        <a href="#contact" className="bg-[#152d56] text-white px-4 py-2 rounded-md hover:bg-yellow-400 hover:text-[#152d56] transition">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 md:px-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#eef2ff" fillOpacity="1" d="M0,160L1440,320L1440,0L0,0Z"></path>
          </svg>
        </div>
        <div className="md:w-1/2 space-y-6 z-10">
          <h2 className="text-[#152d56] text-4xl md:text-5xl font-bold leading-tight">
            Smart Attendance Meets Predictive Intelligence
          </h2>
          <p className="text-lg text-gray-700">
            BarterTrack is an AI-powered attendance platform that not only automates tracking but also predicts student performance and determines exam eligibility in real time — all deployed securely on-premise.
          </p>
          <a href="#contact" className="bg-[#152d56] text-white px-6 py-3 rounded-md shadow hover:bg-yellow-400 hover:text-[#152d56] transition">
            Request a Demo
          </a>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 z-10">
          <img src="/barter-sample-images.png" alt="Smart Attendance" className="w-full rounded-xl shadow-lg" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-20 md:px-20 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Image on the left */}
          <div className="md:w-1/2">
            <img
              src="/bartertrack.png"
              alt="About BarterTrack"
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Text on the right */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-[#152d56]">About BarterTrack</h3>
            <p className="text-gray-600">
              BarterTrack is a smart, school-first attendance platform designed to replace manual tracking with a secure, digital solution. 
              With complete administrative control and privacy-focused on-premise deployment, schools can manage attendance with confidence and efficiency.
            </p>
            <p className="text-gray-600">
              Powered by AI, BarterTrack analyzes attendance trends to forecast student performance, 
              predict absentee patterns, and support early intervention. Empowering educators to make data-driven decisions.
            </p>
          </div>
      </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-8 py-20 md:px-20 bg-indigo-50">
        <h3 className="text-3xl font-bold text-center text-[#152d56] mb-12">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Full Admin Management",
              icon: <FaUserCog className="text-[#152d56] text-4xl mb-4 mx-auto" />,
              desc: "Control user roles, permissions, and attendance policies from a centralized dashboard."
            },
            {
              title: "Paperless Attendance",
              icon: <FaFileAlt className="text-[#152d56] text-4xl mb-4 mx-auto" />,
              desc: "Eliminate manual registers with secure, digital tracking."
            },
            {
              title: "Historical Analytics",
              icon: <FaChartLine className="text-[#152d56] text-4xl mb-4 mx-auto" />,
              desc: "Analyze attendance trends to support planning and interventions."
            },
            {
              title: "Real-Time Tracking",
              icon: <FaClock className="text-[#152d56] text-4xl mb-4 mx-auto" />,
              desc: "Monitor live attendance percentages and respond instantly."
            },
            {
              title: "Predictive Performance",
              icon: <FaBrain className="text-[#152d56] text-4xl mb-4 mx-auto" />,
              desc: "Use AI to forecast student outcomes based on attendance patterns."
            },
            {
              title: "Exam Eligibility Automation",
              icon: <FaCheckCircle className="text-[#152d56] text-4xl mb-4 mx-auto" />,
              desc: "Automatically determine if students meet attendance criteria to sit for exams."
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition">
              {feature.icon}
              <h4 className="text-xl font-semibold mb-2 text-[#152d56]">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-4 py-20 md:px-20 bg-white">
        <h3 className="text-3xl font-bold text-center text-[#152d56] mb-8">Get in Touch</h3>
        <p className="text-center text-gray-600 mb-12">
          <span className="font-semibold text-[#152d56]">Ready to modernize your school's attendance system?</span><br />
          Be among the <span className="font-bold text-yellow-500">first 10 schools</span> to onboard and enjoy <span className="font-bold text-yellow-500">free deployment of BarterTrack</span>.<br />
          Fill out the form below to claim your spot — we’ll reach out with next steps.
        </p>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Form on the left */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>

          {/* Image with badge on the right */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <img
              src="/onboarding-icon.png"
              alt="Onboarding Illustration"
              className="w-4/5 max-w-xs md:max-w-md rounded-xl object-contain"
            />
            <div className="absolute top-4 left-50 bg-yellow-400 text-[#152d56] font-bold text-xs md:text-sm px-3 py-1 rounded-full shadow-md uppercase tracking-wide animate-pulse">
              Free for First 10 Schools
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#152d56] text-white py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Branding */}
          <div>
            <h4 className="text-xl font-bold mb-2">BarterTrack</h4>
            <p className="text-sm">© {new Date().getFullYear()} BarterTrack. By Barterverse.</p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="font-semibold mb-2">Explore</h5>
            <ul className="space-y-1 text-sm">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h5 className="font-semibold mb-2">Connect</h5>
            <div className="flex justify-center md:justify-start gap-4 text-xl">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="hover:text-yellow-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/elijahabolaji/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-yellow-400 transition" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-yellow-400 transition" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="hover:text-yellow-400 transition" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <CTAPopup/>
    </main>
  );
}