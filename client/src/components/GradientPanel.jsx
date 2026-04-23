export default function GradientPanel() {
  return (
    <div className="h-full w-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-0 text-white relative">
      <div className="hidden sm:flex absolute top-6 sm:top-8 left-6 sm:left-10 items-center gap-2">
        <div className="w-6 h-6 border-2 border-white rounded-sm"></div>
        <span className="text-sm tracking-wide">SECURE PORTAL</span>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-purple-500 to-yellow-400 opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left mt-6 sm:mt-10 lg:mt-0">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
          Access your account with confidence
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl max-w-xl text-blue-50">
          Sign in or create an account to continue securely from any device.
        </p>
      </div>
    </div>
  );
}