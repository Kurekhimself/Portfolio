"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from "next/image";
import pbImg from '../public/1729072580016.jpg'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
        {/* Navbar */}
        <nav className={`${darkMode ? 'bg-gray-800' : 'bg-slate-100'} shadow-lg`}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/" className={`py-4 px-2 font-semibold ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-500'} transition duration-300`}>
                  Startseite
                </Link>
                <Link href="/about" className={`py-4 px-2 font-semibold ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-500'} transition duration-300`}>
                  Über mich
                </Link>
                <Link href="/projects" className={`py-4 px-2 font-semibold ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-500'} transition duration-300`}>
                  Projekte
                </Link>
                <Link href="/contact" className={`py-4 px-2 font-semibold ${darkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-500'} transition duration-300`}>
                  Kontakt
                </Link>
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full focus:outline-none"
                >
                  {darkMode ? '🌞' : '🌙'}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto py-20 px-4">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Side: Round Image */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg mb-8 md:mb-0 md:mr-12">
                <Image
                    src={pbImg} // Ersetze dies mit dem Pfad zu deinem Bild
                    alt="Laurenz Szepan"
                    className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Text and Buttons */}
              <div className="text-center md:text-left">
                <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  Hey, ich bin <br /> <span className="text-indigo-500">Laurenz</span>
                </h1>
                <p className={`mt-4 text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Verwaltungsinformatiker.
                </p>

                {/* Round Buttons for GitHub and LinkedIn */}
                <div className="mt-8 flex justify-center md:justify-start space-x-4">
                  <a
                      href="https://github.com/Kurekhimself"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400'}`}
                  >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png" // GitHub Icon
                        alt="GitHub"
                        className="w-6 h-6"
                    />
                  </a>
                  <a
                      href="https://www.linkedin.com/in/laurenz-szepan-787b05a6/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition duration-300 ${darkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-200 hover:bg-blue-300'}`}
                  >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/174/174857.png" // LinkedIn Icon
                        alt="LinkedIn"
                        className="w-6 h-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Projekte</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project Card 1 */}
              <Link href="/project-1">
                <div className={`p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'}`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                          src="favicon.ico" // Ersetze dies mit dem Pfad zu deinem Icon
                          alt="Project Icon"
                          className="w-6 h-6"
                      />
                    </div>
                    <h3 className={`ml-4 text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Kurswahloptimierer</h3>
                  </div>
                  <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automatisierte zuweisung von Wahlpflichtmodulen. Programmiert in Java. </p>
                </div>
              </Link>

              {/* Project Card 2 */}
              <Link href="/project-2">
                <div className={`p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'}`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                          src="favicon.ico" // Ersetze dies mit dem Pfad zu deinem Icon
                          alt="Project Icon"
                          className="w-6 h-6"
                      />
                    </div>
                    <h3 className={`ml-4 text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Gerätedatenbank</h3>
                  </div>
                  <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Eine Gerätedatenbank erstellt mit C#.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* App Section */}
        <div className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-4">
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Applikationen</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* App Card 1 */}
              <Link href="/app-1">
                <div className={`p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}>
                  <div className="flex items-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                          src="favicon.ico" // Ersetze dies mit dem Pfad zu deinem Icon
                          alt="App Icon"
                          className="w-6 h-6"
                      />
                    </div>
                    <h3 className={`ml-4 text-xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>App 1</h3>
                  </div>
                  <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Eine kurze Beschreibung deiner App.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`max-w-6xl mx-auto py-16 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>Kontakt</h2>
          <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Du kannst mich gerne über die folgenden Kanäle kontaktieren:
          </p>
          <div className="mt-8">
            <a href="https://www.linkedin.com/in/laurenz-szepan-787b05a6/" className="text-indigo-500 hover:text-indigo-600">LinkedIn</a>
            <a href="https://github.com/Kurekhimself" className="ml-4 text-indigo-500 hover:text-indigo-600">GitHub</a>
          </div>
        </div>
      </div>
  );
}