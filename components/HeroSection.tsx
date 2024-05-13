"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import {HiArrowDown} from "react-icons/hi"
const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
                <div className="md:w-1/2 md:mt-2">
                    <Image className="rounded-full" src="/hacker-girl-git.png" alt="" width={300} height={300}/>
                </div>
                <div className="md:mt-2 md:w-3/5">
                    <h1 className="font-bold text-4xl mt-6 md:mt-0 md:text-7xl">Hello, I'm Camille Divisia</h1>
                    <p className="text-lg mt-4 mb-6 md:text-2xl">
                        I'm a{" "}
                        <span className="font-semibold text-teal-600">
                            Frontend Developer{" "}
                        </span>
                        based in Montreal, QC. My goal is to create and contribute to software that positively impacts the lives of millions
                        of people. I love to work with different kinds of users and solves real-world problems.
                    </p>
                    <Link
                        to="projects"
                        className="bg-teal-600 text-neutral-100 px-6 py-3 rounded-md mt-4 hover:bg-teal-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >Projects
                    </Link>
                </div>
                
            </div>
            <div className="flex flex-row justify-center">
                    <Link
                        to="about"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    ><HiArrowDown size={35} className="animate-bounce"/>
                    </Link>
            </div>
        </section>
    )
}

export default HeroSection