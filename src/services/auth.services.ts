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
  } catch (error: any) {
    throw error;
  }
}