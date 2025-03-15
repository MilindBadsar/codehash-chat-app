import Link from "next/link";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">
      <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">CodeHash</h1>
        <nav className="hidden md:flex space-x-6">
          <Link href="/features" className="hover:text-gray-300">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
        <Link
          href="/signup"
          className="hidden md:block bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600"
        >
          Get Started
        </Link>
      </header>

      <main className="flex flex-col items-center text-center mt-20">
        <h2 className="text-5xl font-extrabold leading-tight max-w-3xl">
          Connect, Chat, and Collaborate in Real-Time with{" "}
          <span className="text-blue-500">CodeHash</span>
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-xl">
          The ultimate chat app for developers and teams. Secure, fast, and
          feature-packed to enhance communication.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link
            href="/signup"
            className="bg-blue-500 px-6 py-3 rounded-lg text-white font-semibold text-lg hover:bg-blue-600"
          >
            Sign Up
          </Link>
          <Link
            href="/learn-more"
            className="bg-gray-800 px-6 py-3 rounded-lg text-white font-semibold text-lg hover:bg-gray-700"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;

export const metadata = {
  title: "Home - CodeHash",
  description: "CodeHash help you connect with amazing coding enthusiasts",
};
