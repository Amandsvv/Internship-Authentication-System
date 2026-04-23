import AuthLayout from "../components/AuthLayout";
import SignupForm from "../components/SignupForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/authApi";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Password and confirm password must match.");
      return;
    }

    setIsLoading(true);
    try {
      await signup({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Unable to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout type="signup" onSwitch={() => navigate("/")}>
      <SignupForm
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onConfirmPasswordChange={setConfirmPassword}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </AuthLayout>
  );
}