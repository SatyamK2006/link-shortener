import { useState } from "react";
import "@fontsource/poppins"; // Import professional font

export default function App() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const generateShortUrl = () => {
    if (!longUrl) return;
    const random = Math.random().toString(36).substring(2, 8);
    setShortUrl(`https://short.ly/${random}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    alert("Copied!");
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 p-4">
      <div className="w-full h-full max-w-screen-xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-16 flex flex-col gap-6 font-sans">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700">
          🔗 Link Shortener
        </h1>

        <p className="text-gray-600 text-center text-lg md:text-xl">
          Paste your long URL and get a short link instantly.
        </p>

        <input
          type="text"
          className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 text-lg md:text-xl"
          placeholder="Enter your long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />

        <button
          onClick={generateShortUrl}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl font-semibold text-lg md:text-xl transition-all shadow-md"
        >
          Shorten
        </button>

        {shortUrl && (
          <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-indigo-50 p-4 rounded-xl mt-2">
            <p className="text-indigo-700 font-medium break-all text-lg md:text-xl">{shortUrl}</p>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold mt-2 sm:mt-0"
            >
              Copy
            </button>
          </div>
        )}

        <p className="text-gray-500 text-center text-sm md:text-base mt-4">
          Built with ❤️ using React & Tailwind CSS
        </p>
      </div>
    </div>
  );
}
