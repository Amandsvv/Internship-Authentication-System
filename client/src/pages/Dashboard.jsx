import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout, me, refreshToken } from "../api/authApi";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const loadCurrentUser = async () => {
    try {
      const res = await me();
      setUser(res?.data || null);
      setError("");
    } catch (err) {
      setError(err.message || "Session expired. Please login again.");
      navigate("/");
    }
  };

  useEffect(() => {
    loadCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRefreshToken = async () => {
    setMessage("");
    setError("");
    try {
      await refreshToken();
      setMessage("Access token refreshed successfully.");
      await loadCurrentUser();
    } catch (err) {
      setError(err.message || "Failed to refresh token.");
    }
  };

  const handleLogout = async () => {
    setMessage("");
    setError("");
    try {
      await logout();
      navigate("/");
    } catch (err) {
      setError(err.message || "Failed to logout.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 sm:p-10">
      <div className="max-w-2xl mx-auto rounded-2xl border border-slate-700 p-6 bg-slate-900">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        {error ? <p className="text-red-400 mb-4">{error}</p> : null}
        {message ? <p className="text-emerald-400 mb-4">{message}</p> : null}

        <div className="space-y-2 mb-8">
          <p className="text-slate-300">Logged in user:</p>
          <p>Email: {user?.email || "-"}</p>
          <p>Role: {user?.role || "-"}</p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button
            onClick={loadCurrentUser}
            className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500"
          >
            Reload /me
          </button>
          <button
            onClick={handleRefreshToken}
            className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500"
          >
            Call /refresh-token
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
