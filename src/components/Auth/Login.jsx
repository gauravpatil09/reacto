import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Login to continue to Distinguish
        </p>

        <form className="space-y-5">

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 font-semibold"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;