import { useState } from "react";
import axios from "axios";
import OAuth from "../Component/OAuth";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Added loading state
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    

    try {
      const res = await axios.post(
        "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      localStorage.setItem("token", res.data.token);

      toast.success("Login Success...")

      navigate("/"); // Redirect after login
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again!");
      toast.error(So)
    } finally {
      setLoading(false); // Ensure loading is set to false after request
    }
  };

  return (

    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <label className="block text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <br />
            <label className="block text-gray-700" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <br />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 my-6 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Loading..." : "Log In"}
            </button>

            <OAuth />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
