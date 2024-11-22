export default function ContactPage() {
    return (
      <div className="bg-[#f0f8ff] min-h-screen flex flex-col justify-center items-center p-8">
        <main className="max-w-3xl w-full text-center font-sans leading-relaxed">
          <h1 className="text-[#2f4f4f] text-5xl font-bold mb-8">~Contact Me~</h1>
          <p className="text-[#333] text-lg leading-7 mb-6">
            Feel free to reach out for collaboration or just to say hi!
          </p>
  
          <div className="text-left">
            <p className="text-lg text-[#2f4f4f] font-semibold mb-2">Address:</p>
            <p className="text-lg text-[#333]">500 Terry Francine Street</p>
            <p className="text-lg text-[#333]">San Francisco, CA 94158</p>
          </div>
  
          <div className="mt-6">
            <p className="text-lg text-[#2f4f4f] font-semibold mb-2">Email:</p>
            <p className="text-lg text-[#333]">example@email.com</p>
          </div>
        </main>
      </div>
    );
  }
  