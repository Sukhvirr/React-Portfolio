import React from 'react'
import aboutImg from '../assets/about.jpeg'

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">

        <div className="md:grid md:grid-cols-2 sm:py-16">

            <div className="mt-4 md:mt-0 text-left flex">
                <div className="my-auto mx-6">
                    <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
                    <p className="text-base lg:text-lg">
                    I'm Sukhvir Gill, a third-year Computer Engineering student at York University. I have a strong passion for technology and I'm driven to learn and grow in the field. I'm currently seeking a co-op position to apply my skills in a professional setting. I have a strong foundation in programming languages including Java, Python, C#, and more. As a proactive team member who values communication, I enjoy working with others to deliver high-quality projects. I thrive in environments where I can learn and grow and I hope to explore new challenges and opportunities in the industry.
                    </p>
                </div>
            </div>

            <img className="mx-auto rounded-3x1 py-8 md:py-0" src={aboutImg} width={300} height={300} />

        </div>

    </div>
  )
}

export default About