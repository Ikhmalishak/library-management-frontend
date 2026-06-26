import api from "./api";

export async function login(email: string, password: string) {
  try {
    const result = await api.post(
      '/auth/login',
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