"use client";

import PortfolioForm from "@/components/form/PortfolioFrom";
import PortfolioInput from "@/components/form/PortfolioInput";
import Link from "next/link";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

const demoCredentials = [
  {
    role: "user",
    email: "jane.smith@example.com",
    password: "user123",
  },
];

const LoginPage = () => {
  const [defaultValues, setDefaultValues] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (values: FieldValues) => {
    console.log(values);
  };

  const setDemoCredentials = (email: string, password: string) => {
    setDefaultValues({ email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome Back !</h2>
        <p className="text-sm text-center mb-6">
          Sign in to access your account
        </p>
        <PortfolioForm onSubmit={handleLogin} defaultValues={defaultValues}>
          <PortfolioInput label="Username or Email" type="text" name="email" />
          <PortfolioInput label="Password" type="password" name="password" />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
          <p className="text-sm mt-2 text-center">
                Forgot your password?
              </p>
        </PortfolioForm>

        {/* Demo Credentials */}
        {demoCredentials.map(({ role, email, password }) => (
          <div className="flex justify-between items-center mt-4" key={role}>
            <div>
              <h3 className="text-md text-gray-100">{role}:</h3>
              <p className="text-sm">Email - {email}</p>
              <p className="text-sm">Pass - {password}</p>
            </div>
            <div>
              <button
                type="button"
                className="text-white bg-indigo-600 rounded px-2 py-1"
                onClick={() => setDemoCredentials(email, password)}
              >
                Login
              </button>
            </div>
          </div>
        ))}

        <p className="text-sm mt-8 text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-indigo-600 font-medium" href="/register">
            Sign Up here
          </Link>
        </p>
        <p className="text-sm mt-2 text-center">
          © {new Date().getFullYear()} Landing Portfolio. Crafted with ❤️ by Landing Portfolio Team
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
