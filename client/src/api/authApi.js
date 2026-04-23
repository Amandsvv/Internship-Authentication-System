const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/v1/auth";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data?.success === false) {
    throw new Error(data?.message || "Request failed");
  }

  return data;
}

export function signup(payload) {
  return request("/signup", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function login(payload) {
  return request("/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function me() {
  return request("/me", { method: "GET" });
}

export function refreshToken() {
  return request("/refresh-token", { method: "POST" });
}

export function logout() {
  return request("/logout", { method: "POST" });
}
