import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-36 px-4 md:px-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-400 mb-3">Blogs</h1>
        <p className="text-center text-gray-300 mb-12">
          My thoughts on technology and business, welcome to subscribe
        </p>

        <div className="border-t border-gray-700 mb-12 w-full"></div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="w-full md:w-1/3">
            <div className="relative h-48 md:h-40 lg:h-48 w-full rounded-md overflow-hidden">
              <Image 
                src="/icon/Image-blog.png" 
                alt="Web development"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-2xl text-teal-400 font-semibold mb-2">
              What does it take to become a web developer?
            </h2>
            <p className="text-gray-300 text-sm mb-3">
              Web development, also known as website development, encompasses a variety of tasks and
              processes involved in creating websites for the internet...
            </p>
            
            <Link href="/blog/web-developer" className="text-teal-400 text-sm inline-block mb-4">
              Read More &gt;&gt;
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <span className="bg-gray-800 px-3 py-1 rounded-full">Web Developer</span>
              <span>Text: Sinan</span>
              <span>Date: 10.04.2023</span>
              <span>Read: 1 Min</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-12 w-full"></div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-black font-medium py-2 px-6 rounded-full transition-colors duration-300">
            View More
          </button>
          <button className="border border-teal-500 text-teal-500 hover:bg-teal-900 font-medium py-2 px-6 rounded-full transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogPage;