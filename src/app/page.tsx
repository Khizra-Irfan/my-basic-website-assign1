export default function Home() {
  return (
    <div className="bg-[#f0f8ff] min-h-screen flex flex-col justify-center items-center p-8">
      <main className="text-center font-sans leading-relaxed max-w-lg w-full">
        {/* Main Heading */}
        <h1 className="text-[#2f4f4f] text-5xl font-bold mb-8">
          ~Welcome to My Website~
        </h1>

        {/* Centered Flipped Image */}
        <div className="group perspective-[1000px] w-96 h-96 mb-12 mx-auto">
          <div className="relative w-full h-full transform transition-transform duration-1500 rotate-[180deg] group-hover:rotate-[0deg] shadow-xl shadow-blue-900">
            {/* Front side of the image */}
            <div className="absolute w-full h-full backface-hidden">
              <img
                src="/images/profile-picture.jpg" // Replace with your image path
                alt="Profile"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>

            {/* Back side of the image (text) */}
            <div className="absolute w-full h-full bg-blue-700 text-white flex items-center justify-center rounded-lg shadow-xl p-8 rotate-[180deg] backface-hidden">
              <p className="text-2xl font-semibold">
                Hi, I'm a passionate web developer focused on creating impactful web experiences!
              </p>
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <button className="bg-[#4682b4] text-white py-3 px-6 rounded-lg transition duration-300 hover:bg-[#2c4f78] text-lg font-medium mt-2 mb-3">
          Learn More
        </button>
      </main>
    </div>
  );
}
