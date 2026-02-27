import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white">

      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-6">
        <h1 className="text-3xl font-extrabold tracking-wide">
          Distinguish
        </h1>

        <div className="space-x-4">
          <Link to="/login">
            <button className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button className="px-5 py-2 rounded-lg bg-white text-black hover:bg-gray-200 transition font-semibold">
              Sign Up
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 mt-24">
        <h2 className="text-5xl font-extrabold leading-tight max-w-4xl">
          Redefining the Future of
          <span className="text-blue-500"> Private Conversations</span>
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          A next-generation chat platform built for speed, privacy, and
          distraction-free communication. Minimal. Secure. Powerful.
        </p>

        <div className="mt-10 space-x-4">
          <Link to="/signup">
            <button className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition font-semibold text-lg">
              Get Started
            </button>
          </Link>

          <Link to="/login">
            <button className="px-8 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition font-semibold text-lg">
              Already have an account?
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-32 px-10 pb-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3 text-blue-500">
              🔒 Privacy First
            </h3>
            <p className="text-gray-400">
              Your conversations stay yours. Built with security at the core.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3 text-blue-500">
              ⚡ Blazing Fast
            </h3>
            <p className="text-gray-400">
              Real-time messaging with ultra-low latency performance.
            </p>
          </div>

          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold mb-3 text-blue-500">
              🎯 Minimal Design
            </h3>
            <p className="text-gray-400">
              Distraction-free interface inspired by modern AI chat platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Distinguish</h2>
            <p className="text-gray-400 text-sm">
              Secure. Fast. Minimal.  
              A private chat platform built for modern communication.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white transition">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="hover:text-white transition">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <p className="text-gray-400 text-sm">
              Email: support@distinguish.com
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Built with ❤️ using React & Tailwind
            </p>
          </div>

        </div>

        <div className="text-center text-gray-500 text-xs py-4 border-t border-gray-800">
          © {new Date().getFullYear()} Distinguish. All rights reserved.
        </div>
      </footer>

    </div>
  );
}

export default Home;