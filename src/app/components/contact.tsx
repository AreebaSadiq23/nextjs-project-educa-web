import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen p-6 bg-gray-100 max-w-screen-2xl mx-auto"
    >
      {/* Left Content */}
      <div className="w-full lg:w-1/2 p-4 text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Have any questions or concerns? Feel free to reach out to us. We are
          here to assist you with any queries you may have regarding our
          education programs.
        </p>
        <Image
          src="/img1.jpg"
          alt="Education"
          width={500}
          height={300}
          className="rounded-lg shadow-lg mx-auto lg:mx-0 w-full h-auto"
        />
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Now!</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
