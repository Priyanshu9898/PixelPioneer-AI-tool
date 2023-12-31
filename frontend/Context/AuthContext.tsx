"use client";

import { LoginData, RegisterData, User } from "@/types/Auth";
import { toastStyle } from "@/utils/ToastStyle";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, {
  useContext,
  useState,
  createContext,
  ReactNode,
  useEffect,
} from "react";
import { toast } from "react-hot-toast";

type AuthContextData = {
  user: User | null;
  login: (data: LoginData, setIsLoading: (arg: boolean) => void) => void;
  register: (data: RegisterData, setIsLoading: (arg: boolean) => void) => void;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextData | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = sessionStorage.getItem("user");
      // If there is stored user data, update our state with it
      if (storedUser !== null) {
        setUser(JSON.parse(storedUser));
      }
    };

    fetchUser();
  }, []);

  const login = async (
    data: LoginData,
    setIsLoading: (arg0: boolean) => void
  ) => {
    const { email, password } = data;

    if (!email || !password) {
      toast.error(`Please enter all the fields`, {
        style: toastStyle,
      });
    }

    try {
      setIsLoading(true);
      const response = await axios.post("/api/login", data);

      setUser(response.data.user);

      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      sessionStorage.setItem("token", JSON.stringify(response.data.token));

      toast.success(`${response.data?.message}`, {
        style: toastStyle,
      });

      setIsLoading(false);

      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error("Invalid Credentials!", {
        style: toastStyle,
      });
      setUser(null);
      setIsLoading(false);
    }
  };

  const register = async (
    data: RegisterData,
    setIsLoading: (arg0: boolean) => void
  ) => {
    const { name, email, password, confirmPassword } = data;

    if (!name || !email || !password || !confirmPassword) {
      toast.error(`Please enter all the fields`, {
        style: toastStyle,
      });
    }

    if (password !== confirmPassword) {
      toast.error(`Password does not match`, {
        style: toastStyle,
      });
    }

    try {
      setIsLoading(true);
      const response = await axios.post("/api/register", data);

      toast.success(`${response.data?.message}`, {
        style: toastStyle,
      });

      setUser(response.data.user);

      sessionStorage.setItem("user", JSON.stringify(response.data.user));
      sessionStorage.setItem("token", JSON.stringify(response.data.token));

      setIsLoading(false);

      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error(`${err}`, {
        style: toastStyle,
      });
      setUser(null);
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      const response = await axios.get("/api/logout");
    //   console.log(response.data);
      setUser(null);
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token");
      toast.success("Logged Out Successfully!", { style: toastStyle });
      router.push("/login");
      router.refresh();
    } catch (err) {
      toast.error("Uh oh! Something went wrong.", { style: toastStyle });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
