import { faFile } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import resumeBanner from '../assets/images/resume_banner.png';
import React from 'react'

const LandingPage = () => {
  return (
    <div className='w-screen min-h-screen bg-white flex flex-col items-center justify-start '>
        <div className='w-full h-16 flex items-center pl-10 mt-4'>
            <h1 className='font-monts font-extrabold text-3xl text-gray-800'>
                <FontAwesomeIcon icon={faFile} className='mr-2 text-blue-600' /> CraftCV
            </h1>
        </div>

        <div className='w-full h-150 flex flex-col md:flex-row items-center justify-evenly px-4 mt-6 md:gap-10'>
            <img 
                src={resumeBanner} 
                alt="Resume Banner"
                className='w-100 h-100 rounded-xl object-cover '
            />
            <div className='flex flex-col items-center md:items-start gap-6 max-w-xl text-center md:text-left mb-12 md:mb-0'>
                <h1 className='text-4xl md:text-5xl font-extrabold font-roboto text-gray-900'>
                    Your Resume, Smarter
                </h1>

                <p className='text-base md:text-lg text-gray-700 font-roboto leading-relaxed'>
                    Build a job-winning resume in minutes with our <span className="font-semibold text-gray-900">AI-Powered Resume Builder</span>.
                    Whether you're a fresher or a professional, our tool offers smart suggestions, modern templates, and instant downloads — 
                    <span className="font-semibold"> no design skills or login required.</span>
                </p>

                <button className='w-40 h-12 bg-black text-white font-monts text-sm rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300'>
                    Get Started
                </button>
            </div>

        </div>      
    </div>
  )
}

export default LandingPage
