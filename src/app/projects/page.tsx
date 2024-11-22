import Image from 'next/image';

export default function Projects() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col justify-center items-center p-8">
      <main className="max-w-3xl w-full text-center font-sans leading-relaxed">
        <h1 className="text-[#2f4f4f] text-5xl font-bold mb-8">~Projects~</h1>

        <section className="mb-8">
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">Project 1</h3>
          <p className="text-[#333] text-lg leading-7">
            This project is about creating a simple and responsive webpage using HTML, CSS, and JavaScript. I&apos;m proud of
            how it turned out, as it showcases my ability to create a functional and clean layout.
          </p>
        </section>

        <section>
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">Project 2</h3>
          <p className="text-[#333] text-lg leading-7">
            I worked on this project to build a dynamic web application using Next.js and TypeScript. It involves interactive
            features that make it a highly engaging experience.
          </p>
        </section>

        {/* Example of using next/image */}
        <Image
          src="/path/to/your/project-image.jpg"
          alt="Project 1 Screenshot"
          width={500}
          height={300}
          layout="responsive"
        />
      </main>
    </div>
  );
}
