import Input from "@/components/Input";
import { useCallback, useState } from "react";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("sign in");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant == "sign in" ? "sign up" : "sign in"
    );
  }, []);
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-center bg-cover">
      <div className="h-full w-full bg-black bg-opacity-70 lg:bg-opacity-70">
        <nav className="px-8 py-3">
          <img src="/images/logo2.png" alt="Logo" className="h-20" />
        </nav>

        <div className="flex justify-center items-center px-4">
          <div className="bg-black bg-opacity-90 px-8 py-16 lg:px-16 lg:py-16 mt-2 lg:mt-0 lg:w-2/5 lg:max-w-md rounded-md w-full max-w-md">
            <h2 className="text-white text-3xl mb-8 font-bold">
              {variant == "sign in" ? "Sign In" : "Ready to watch?"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant == "sign up" && (
                <Input
                  label="Username"
                  onChange={(ev: any) => setUsername(ev.target.value)}
                  id="username"
                  type="username"
                  value={username}
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
            <button className="bg-blue-700 py-3 text-white rounded-md w-full mt-6 hover:bg-blue-800 transition">
              {variant == "sign in" ? "Sign In" : "Get Started"}
            </button>
            <p className="text-neutral-400 mt-8 font-semibold">
              {variant == "sign in" ? "New to Nextream?" : "Already a member?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant == "sign in" ? "Sign up now." : "Sign in now."}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
