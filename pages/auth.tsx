import axios from "axios";
import Input from "@/components/Input";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import { FcGoogle } from "react-icons/fc";

const Auth = () => {
  const router = useRouter();
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant == "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-cover">
      <div className="h-full w-full bg-black bg-opacity-70 lg:bg-opacity-70">
        <nav className="px-8 py-3">
          <img src="/images/logo2.png" alt="Logo" className="h-20" />
        </nav>

        <div className="flex justify-center items-center px-4">
          <div className="bg-black bg-opacity-90 px-8 py-16 lg:px-16 lg:py-16 mt-2 lg:mt-0 lg:w-2/5 lg:max-w-md rounded-md w-full max-w-md">
            <h2 className="text-white text-3xl mb-8 font-bold">
              {variant == "login" ? "Sign In" : "Ready to watch?"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant == "register" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setUsername(ev.target.value)}
                  id="name"
                  type="name"
                  value={name}
                />
              )}
              <Input
                label="Email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                id="email"
                type="email"
                value={email}
              />
              <Input
                label="Password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                id="password"
                type="password"
                value={password}
              />
            </div>
            <button
              onClick={variant == "login" ? login : register}
              className="bg-blue-700 py-3 text-white rounded-md w-full mt-6 hover:bg-blue-800 transition"
            >
              {variant == "login" ? "Sign In" : "Get Started"}
            </button>
            <div className="flex flex-row items-center gap-4 mt-8 justify-center">
              
              <div
                onClick={()=>signIn('google',{callbackUrl:'/'})}
                className="
              w-10
              h-10
              bg-white
              rounded-full
              flex
              items-center
              justify-center
              cursor-pointer
              hover:opacity-80
              transition
              ">
                <FcGoogle/>
              </div>

            </div>
            <p className="text-neutral-400 mt-4 font-semibold">
              {variant == "login" ? "New to Nextream?" : "Already a member?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant == "login" ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
