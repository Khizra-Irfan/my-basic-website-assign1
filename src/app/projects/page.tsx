"use client"; // Make this a client component

import Image from 'next/image'; // Import the Image component from Next.js

export default function ProjectPage() {
    // Sample project data
    const projects = [
        {
            id: 1,
            name: "Countdown Timer",
            description: "A countdown timer built with Next.js and HTML/CSS.",
            imageUrl: "/images/countdowntimer.jpg", // Ensure this path is correct
            link: "https://countdown-timer-byusing-next-js.vercel.app/",
        },
    ];

    return (
        <div className="bg-[#f0f8ff] min-h-screen p-10">
            <main className="max-w-3xl mx-auto font-sans leading-relaxed">
                <h1 className="text-[#2f4f4f] text-4xl text-center mb-8">
                    ~My Projects~
                </h1>
                <p className="text-[#333] text-xl text-center mb-10">
                    Check out my projects below:
                </p>

                {/* Map through the projects */}
                {projects.map(project => (
                    <div key={project.id} className="mb-16 text-center">
                        <Image
                            src={project.imageUrl} // Path to your image
                            alt={project.name}
                            width={400} // Set a specific width
                            height={300} // Set a specific height
                            className="rounded-lg mx-auto mb-4" // Centered image with rounded corners
                        />
                        <h3 className="text-[#4682b4] text-2xl">{project.name}</h3>
                        <p className="text-[#555] text-base">{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                            <button className="bg-[#4682b4] text-white py-3 px-6 rounded-lg text-lg font-medium transition duration-300 hover:bg-[#2c4f78]">
                                View Project
                            </button>
                        </a>
                    </div>
                ))}
            </main>
        </div>
    );
}
