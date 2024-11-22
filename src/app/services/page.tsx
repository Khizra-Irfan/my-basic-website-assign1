import Image from 'next/image';

export default function Services() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col justify-center items-center p-8">
      <main className="max-w-3xl w-full text-center font-sans leading-relaxed">
        <h1 className="text-[#2f4f4f] text-5xl font-bold mb-8">~Services~</h1>

        <section className="mb-8">
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-[#333] text-lg leading-7">
            I provide web development services that include building responsive and interactive websites. I&apos;m proficient in
            technologies such as HTML, CSS, JavaScript, and React, and I&apos;m currently learning Next.js and TypeScript to offer
            even more advanced solutions.
          </p>
        </section>

        <section>
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">UI/UX Design</h3>
          <p className="text-[#333] text-lg leading-7">
            I also provide UI/UX design services, helping businesses create user-friendly and visually appealing interfaces
            for their websites and applications. My goal is to make every user interaction smooth and intuitive.
          </p>
        </section>

        {/* Example of using next/image */}
        <Image
          src="/path/to/your/service-image.jpg"
          alt="Service Illustration"
          width={500}
          height={300}
          layout="responsive"
        />
      </main>
    </div>
  );
}
