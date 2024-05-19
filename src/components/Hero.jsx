import React from 'react'
import heroimage from '../assets/profilepic7.png'
import resume from '../assets/resume.pdf'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] -mt-20'>
            <img src={heroimage} alt="hero image"/>
        </div>

        <div className='col-span-2 px-5 my-auto'>

            <h1 className="text-white text-4xl sm:text-5x1 lg:text-8x1 font-extrabold">
                <span className='primary-color'>
                I'm a
                </span> <br/>
                <TypeAnimation
                    sequence={[
                        "Frontend Dev",
                        1000,
                        "Webdesigner",
                        1000,
                        "Aspiring Engineer",
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
            </h1>

            <p className= "text-white sm:text-lg my-6 lg:text-x1">
                Hey, welcome to my website! I'm Sukhvir, a passionate Computer Engineering student at York University. Explore my projects, learn about my skills, and feel free to reach out. Let's create something amazing together!
            </p>

            <div className= 'my-8'>
                <a href={resume} download="Sukvhir_Gill_Resume.pdf" className="px-6 py-3 w-full rounded-x1 mr-4
                        bg-gradient-to-br from-orange-500 to-pink-500 text-white">
                    Download CV
                </a>
                <a href="#contact" className="px-6 py-3 w-full rounded-x1 mr-4
                        border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500
                         text-white hover:border-none">
                    Contact
                </a>
            </div>
        </div>

    </div>
  )
}

export default Hero