import GradientPanel from "./GradientPanel";

export default function AuthLayout({ type, children, onSwitch }) {
  const isLogin = type === "login";

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden bg-slate-100">
      <div
        className={`w-full lg:w-1/2 min-h-56 sm:min-h-64 md:min-h-72 lg:min-h-screen transition-all duration-700 ease-in-out order-2 ${
          isLogin ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <GradientPanel />
      </div>

      <div
        className={`w-full lg:w-1/2 min-h-[45vh] lg:min-h-screen flex items-center justify-center bg-gray-100 transition-all duration-700 px-4 py-8 sm:px-6 md:px-8 order-1 ${
          isLogin ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="w-full max-w-lg rounded-2xl lg:rounded-none bg-white/80 lg:bg-transparent p-5 sm:p-7 lg:p-0 shadow-sm lg:shadow-none">
          {children}

          <p className="text-center mt-5 text-gray-600 text-sm sm:text-base">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={onSwitch}
              className="text-blue-600 ml-2 font-medium"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}