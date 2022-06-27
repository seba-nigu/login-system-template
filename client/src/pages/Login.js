function Login() {
  return (
    <div className="login-page h-screen flex justify-center items-center">
      <div className="w-1/3">
        <form
          className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4"
          method="post"
          action="http://localhost:5000/login"
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
            />
          </div>
          <div className="mb-8">
            <label className="text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-700"
              type="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between flex-col">
            <button
              type="submit"
              className="text-center cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <div className="flex flex-col mt-4 h-12 justify-between w-40">
              <a
                className="cursor-pointer font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/register"
              >
                New here? SIGN UP
              </a>
              <a
                className="cursor-pointer font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/forgot"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
