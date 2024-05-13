import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {BsGithub, BsArrowUpRightSquare} from 'react-icons/bs'
import SlideUp from './SlideUp'

const projects = [
    {
        name: "Projet 1",
        description: "Lorem ipsum dolor sit amet, do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: "https://loremflickr.com/320/240?lock=2",
        github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

    },
    {
        name: "Discord Bot",
        description: "A Basic Discord Bot",
        image: "https://loremflickr.com/320/240?lock=3",
        github: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

    },
]

const ProjectsSection = () => {
  return (
    <section id='projects'>
        <div className='mb-10'>
            <h1 className='text-center font-bold text-4xl'>
                    Projects
                    <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
            </h1>
        </div>
        
        <div className='flex flex-col space-y-28'>
            {projects.map((project, index) => {
                return (
                    <div key={index}>
                        <SlideUp offset='-300px 0px -300px 0px'>
                        <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:p-10 md:flex-row md:space-x-12'>
                            <div className='md:w-1/2'>
                                <Link href={project.link} target='_blank'>
                                    <Image
                                        src={project.image}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                        className='rounded-xl shadow-xl hover:opacity-70'
                                    />
                                </Link>
                                
                            </div>
                            <div className='md:w-1/2'>
                                <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                                <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.description}</p>
                                <div className='flex flex-row align-bottom space-x-4'>
                                    <Link href={project.github} target='_blank'>
                                        <BsGithub size={30} className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                    </Link>
                                    <Link href={project.link} target='_blank'>
                                        <BsArrowUpRightSquare size={30} className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                    </Link>

                                </div>
                            </div>
                        </div>
                        </SlideUp>
                    </div>
                )
            })}
        </div>

    </section>
  )
}

export default ProjectsSection