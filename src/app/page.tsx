import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col justify-center items-center p-8">
      <main className="max-w-3xl w-full text-center font-sans leading-relaxed">
        <h1 className="text-[#2f4f4f] text-5xl font-bold mb-8">~Welcome to My Website~</h1>

        <section className="mb-8">
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">What I Do</h3>
          <p className="text-[#333] text-lg leading-7">
            I&apos;m a web developer passionate about building creative and functional websites. I specialize in creating
            responsive designs and interactive web applications using modern technologies like HTML, CSS, JavaScript, and Next.js.
          </p>
        </section>

        <section>
          <h3 className="text-[#4682b4] text-2xl font-semibold mb-4">Contact Me</h3>
          <p className="text-[#333] text-lg leading-7">
            Feel free to reach out if you have any questions or if you&apos;re interested in working together. I&apos;d love
            to hear from you!
          </p>
        </section>

        {/* Example of using next/image */}
        <Image
          src="/path/to/your/home-image.jpg"
          alt="Home Page Illustration"
          width={500}
          height={300}
          layout="responsive"
        />
      </main>
    </div>
  );
}
