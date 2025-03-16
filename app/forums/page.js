import Image from "next/image";
import Link from "next/link";
import React from "react";

const topics = [
  {
    text: "Python",
    img: "/logos/py.png",
    desc: "Let's discuss everything related to Python",
    slug: "Python",
  },
  {
    text: "JavaScript",
    img: "/logos/js.png",
    desc: "All things JavaScript, from frontend to backend",
    slug: "JavaScript",
  },
  {
    text: "React",
    img: "/logos/react.png",
    desc: "Build modern UI with React & its ecosystem",
    slug: "React",
  },
  {
    text: "Next JS",
    img: "/logos/nextjs.png",
    desc: "Server-side development with Next JS",
    slug: "Next-JS",
  },
  {
    text: "AI & Machine Learning",
    img: "/logos/ai.png",
    desc: "Discussions on AI, ML, and deep learning",
    slug: "AI-ML",
  },
  {
    text: "Cybersecurity",
    img: "/logos/cybersec.png",
    desc: "Discussions on cybersecurity trends",
    slug: "Cybersecurity",
  },
];

const Forums = () => {
  return (
    <div className="container bg-black text-white mx-auto my-2 p-6">
      <h1 className="text-4xl font-bold text-center mb-10">Forums</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <div
            key={topic.img}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={topic.img}
              width={75}
              height={75}
              alt={topic.text}
              className="mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{topic.text}</h2>
            <p className="text-gray-400">{topic.desc}</p>
            <br />
            <Link href={`/forum/${topic.slug}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 cursor-pointer">
                Join Discussion
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forums;
