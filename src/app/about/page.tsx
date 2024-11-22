import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col justify-center items-center p-8">
      <main className="max-w-3xl w-full text-center font-sans leading-relaxed">
        <h1 className="text-[#2f4f4f] text-5xl font-bold mb-8">~About Me~</h1>

        <section className="mb-8">
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">Who I Am</h3>
          <p className="text-[#333] text-lg leading-7">
            I&apos;m a passionate beginner web developer currently learning how to build websites and web applications.
            I&apos;m excited about the world of coding and the endless possibilities it brings. This website is my personal
            project to showcase my progress and the skills I&apos;m developing.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-[#333] text-lg leading-7">
            I started learning web development because I love creating things that others can interact with on the web.
            Right now, I&apos;m focusing on mastering technologies like HTML, CSS, JavaScript, TypeScript, and frameworks
            like Next.js. It&apos;s a rewarding process, and I&apos;m always looking forward to learning something new every day.
          </p>
        </section>

        <section>
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">My Goals</h3>
          <p className="text-[#333] text-lg leading-7">
            My main goal is to continue improving my skills and to work on real-world projects. I&apos;m excited to collaborate
            with others, contribute to open-source projects, and eventually work in the tech industry as a professional
            web developer.
          </p>
        </section>

        {/* Replace img with next/image */}
        <Image
          src="/path/to/your/image.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
          layout="responsive"
        />
      </main>
    </div>
  );
}
