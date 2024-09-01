// services/apiServices.ts
import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'http://localhost:7654';

interface UserData {
  gpnID: number;
  ergoUserName:string;
  ergoUserEmail: string;
  ergoUserPassword: string;
  ergoUserDesignation: string;
  isCustomized: boolean;
  ergoUserLocation: string;
}
interface UserDetails {
  gpnID: number;
  ergoUserName:string;
  ergoUserEmail: string;
  ergoUserPassword: string;
  ergoUserDesignation: string;
  isCustomized: boolean;
  ergoUserLocation: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
  user: { name: string; email: string };
}

export const createUser = async (userData: UserData): Promise<AxiosResponse<UserDetails>> => {
  try {
    // Make the API call to create a user
    return await axios.post(`${API_BASE_URL}/ergoBuddy/createUser`, userData);
  } catch (error: any) {
    // Handle and log the error
    console.error('Error creating user:', error.response?.data || error.message);
    throw error; // Re-throw the error for further handling
  }
};

export const loginUser = async (credentials: SignInCredentials): Promise<AxiosResponse<SignInResponse>> => {
  return await axios.post(`${API_BASE_URL}/signin`, credentials);
};

export const fetchUserDetails = async (token: string, path: string): Promise<AxiosResponse<UserDetails>> => {
  try {
    return await axios.get(`${API_BASE_URL}/ergoBuddy/users/${path}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    console.error('Error fetching user details:', error.response?.data || error.message);
    throw error; // Corrected: removed the extra semicolon
  }
};
