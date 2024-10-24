import SubscribeSection from "./subscribe";
import Image from "next/image";

const HomeSection: React.FC = () => {
  return (
    <>
      {/* First Section: Text on Left, Image on Right */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-6 sm:py-8 md:py-16 px-4">
        <div className="w-full md:w-1/2 md:mr-4 mb-6 md:mb-0">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Welcome to Our Education Platform
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsa
            sequi soluta ullam reiciendis mollitia itaque minu voluptate in
            quisquam dolorum sapiente molestias Corrupti modi fugit et error
            assumenda illum
          </p>
          <div className="text-center md:text-left">
            <button className="bg-amber-800 text-white px-4 md:px-6 py-2 rounded hover:bg-amber-700 transition mt-2">
              Start Learning
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/img5.jpg"
            alt="Education"
            className="w-full h-auto  shadow-lg object-cover"
            height={500}
            width={500}
          />
        </div>
      </section>

      {/* Second Section: Text on Right, Image on Left */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-6 sm:py-8 md:py-16 px-4">
        <div className="w-full md:w-1/2 flex justify-center md:mr-4 mt-6 md:mt-0">
          <Image
            src="/img 2.jpg"
            alt="Learning"
            className="shadow-lg object-cover"
            height={300}
            width={300}
          />
        </div>
        <div className="w-full md:w-1/2 md:ml-8">
          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 text-center md:text-left">
            Welcome to our online center
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-4 text-sm sm:text-base md:text-xl text-center md:text-left">
            <li>Start learning from your experience</li>
            <li>Enhance your skills with us now</li>
            <li>Do your favorite course</li>
          </ul>
        </div>
      </section>

      {/* Third Section: Text on Left, Image on Right */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-6 sm:py-8 md:py-16 px-4">
        <div className="w-full md:w-1/2 md:mr-7 mb-6 md:mb-0">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center md:text-left">
            Start learning by creating a free account and get registered
          </h2>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/img3.jpg"
            alt="Community"
            className="w-full h-auto shadow-lg object-cover"
            height={500}
            width={500}
          />
        </div>
      </section>

      <SubscribeSection name="Name" email="Email" buttonText="Subscribe" />

      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-6 sm:py-8 md:py-16 px-4 relative">
        <div className="w-full text-center md:text-left mt-6">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-serif mb-4">
            Start growing with our community
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button className="bg-amber-800 text-white px-4 md:px-6 py-2 rounded hover:bg-amber-700 transition">
            Start Learning
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center relative mt-6 md:mt-0">
          <Image
            src="/img4.png"
            alt="Community"
            className="w-full h-auto object-cover rounded-lg"
            height={500}
            width={500}
          />
        </div>
      </section>
    </>
  );
};

export default HomeSection;
