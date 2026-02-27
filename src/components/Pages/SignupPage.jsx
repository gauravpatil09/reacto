import { Link } from "react-router-dom";
import { useState } from "react";

function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", form);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-4 py-2 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-green-600"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 transition py-2 rounded-lg font-semibold"
          >
            Sign Up
          </button>
        </form>

        <p className="text-gray-400 text-sm text-center mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default SignupPage;