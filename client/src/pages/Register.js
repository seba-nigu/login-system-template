import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    email: "",
    username: "",
    password: "",
  });
  const setInput = (e) => {
    const { name, value } = e.target;
    setRegister((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const postRegister = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(
        "http://localhost:5000/api/register",
        {
          email: register.email,
          username: register.username,
          password: register.password,
        }
      );
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-page h-screen flex justify-center items-center">
      <div className="w-1/3">
        <form
          className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={postRegister}
        >
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
              type="email"
              name="email"
              placeholder="Email"
              onChange={setInput}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
              type="text"
              name="username"
              placeholder="Username"
              onChange={setInput}
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
              type="password"
              name="password"
              placeholder="Password"
              onChange={setInput}
            />
          </div>
          <div className="mb-8">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Retype Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
              type="password"
              name="confirm-password"
              placeholder="Password"
              onChange={setInput}
            />
          </div>
          <div className="flex justify-between flex-col">
            <button
              type="submit"
              className="text-center cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <Link
              to="/login"
              className="mt-4 cursor-pointer font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
