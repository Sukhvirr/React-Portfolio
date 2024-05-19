import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.jpg'
import proj4 from '../assets/proj4.png'
import proj5 from '../assets/proj5.webp'
import proj6 from '../assets/proj6.jpg'

const Projects = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id="projects">
        <div className='pb-8'>
            <h2 className='text-4xl mb-3 font-bold primary-color'>Projects</h2>
            <p className='text-gray-400'>Check out some of my recent projects</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


            <div className='transform transition-transofrm duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj1} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>
                    <span className='text-2x1 font-bold text-white tracking-wider'>React JS Portfolio Website</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Sukhvirr/react-portfolio">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                                font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transofrm duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj2} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>
                    <span className='text-2x1 font-bold text-white tracking-wider'>Comunify Flutter Mobile App</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Sukhvirr/Comunify">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                                font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transofrm duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj3} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>
                    <span className='text-2x1 font-bold text-white tracking-wider'>Whac-A-Mole</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Sukhvirr/Whac-A-Mole">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                                font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transofrm duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj4} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>
                    <span className='text-2x1 font-bold text-white tracking-wider'>Automated Gate Opener</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Sukhvirr/Automated-Gate-Opener">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                                font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transofrm duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj5} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>
                    <span className='text-2x1 font-bold text-white tracking-wider'>Replication of Car Sensor</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Sukhvirr/Replication-of-Car-Sensor">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                                font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transofrm duration-300 hover:scale-105 overflow-hidden
                            shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                            h-[200px] bg-cover relative'>
                <img src={proj6} alt="" />
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                                justify-center items-center'>
                    <span className='text-2x1 font-bold text-white tracking-wider'>Automated Plant Watering System</span>
                    <div className='pt-8 text-center'>
                        <a href="https://github.com/Sukhvirr/Automated-Plant-Watering-System">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 
                                                font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects