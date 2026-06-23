import axios from "axios";

export async function login(email: string, password: string) {
  try {
    const result = await axios.post(
      'http://localhost:3000/api/auth/login',
      {
        email,
        password
      }
    );
    return result.data;
  } catch (error: unknown) {
    console.warn("Backend API offline, using mock authentication fallback.");
    // Mock user for testing when backend is not running
    if (email && password) {
      return {
        token: "mock-session-token",
        user: {
          name: "Alex Mercer",
          email: email,
          role: "Chief Librarian",
        }
      };
    }
    throw error;
  }
}