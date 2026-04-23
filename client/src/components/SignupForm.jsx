export default function SignupForm({
  email,
  password,
  confirmPassword,
  onEmailChange,
  onPasswordChange,
  onConfirmPasswordChange,
  onSubmit,
  isLoading,
  error,
}) {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">Sign Up</h2>
        <div className="mt-2 h-1 w-24 rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-cyan-400"></div>
      </div>

      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl border outline-none"
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl border outline-none"
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => onConfirmPasswordChange(e.target.value)}
          className="w-full mb-4 p-3 rounded-xl border outline-none"
          required
        />

        {error ? <p className="text-sm text-red-600 mb-4">{error}</p> : null}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 rounded-xl shadow-md disabled:opacity-60"
        >
          {isLoading ? "Creating account..." : "Sign up"}
        </button>
      </form>
    </>
  );
}