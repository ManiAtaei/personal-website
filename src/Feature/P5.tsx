import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';

function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">Contact</h1>
            <div className="w-32 h-1 bg-teal-400 mx-auto mb-4"></div>
            <p className="text-gray-300">I'm currently available for freelance work</p>
          </div>

          {/* Send Message Box */}
          <div className="border border-teal-400 rounded-md p-5 inline-block mx-auto mb-10">
            <p className="text-teal-400 text-lg">Send Me A Message</p>
          </div>

          {/* Contact Form */}
          <form className="w-full">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="w-full md:w-1/2">
                <label htmlFor="name" className="block text-teal-400 text-sm mb-1">
                  Your name <span className="text-teal-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-gray-700 py-2 px-1 focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label htmlFor="email" className="block text-teal-400 text-sm mb-1">
                  Your email <span className="text-teal-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-700 py-2 px-1 focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>
            </div>

            <div className="w-full mb-8">
              <label htmlFor="message" className="block text-teal-400 text-sm mb-1">
                Your message <span className="text-teal-400">*</span>
              </label>
              <textarea
                id="message"
                placeholder="Enter your needs"
                rows={4}
                className="w-full bg-transparent border-b border-gray-700 py-2 px-1 focus:outline-none focus:border-teal-400 transition-colors"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-black font-medium py-2 px-6 rounded-full transition-colors duration-300"
              >
                Send Message
                <IoSend />
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 border-t border-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-500 mb-3 md:mb-0">
            © 2023 SinanTokmak. All rights reserved.
          </div>
          
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-sm text-gray-500 hover:text-teal-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-500 hover:text-teal-400">
              Terms & Conditions
            </Link>
          </div>
          
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
              <FaYoutube size={20} />
            </a>
          </div>
          
          <div className="text-sm text-gray-500 mt-3 md:mt-0">
            Design By <Link href="https://johanna.com" className="text-teal-400">johanna.com</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;