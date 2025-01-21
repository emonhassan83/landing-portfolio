"use client";

import PortfolioForm from "@/components/form/PortfolioFrom";
import PortfolioInput from "@/components/form/PortfolioInput";
import Link from "next/link";
import { FieldValues } from "react-hook-form";

const RegisterPage = () => {
  const handleRegister = async (values: FieldValues) => {
    console.log(values);
  };

  return (
    <div className="md:flex justify-center items-center md:h-[100vh]">
      <div className="mt-6 w-[480px] h-[600px] rounded-md p-10 mx-auto shadow-md border-slate-950">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Register Please
        </h2>
        <p className="text-sm text-gray-100 text-center mb-8">
          Sign up to access your account
        </p>
        <PortfolioForm onSubmit={handleRegister}>
          <PortfolioInput
            type="text"
            name="name"
            label="Username"
            placeholder="Enter Your Name ..."
          />
          <PortfolioInput
            type="email"
            name="email"
            label="Username Or Email"
            placeholder="Enter Your Email ..."
          />
          <PortfolioInput
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Your Password ..."
          />
          <div className="flex items-center justify-center gap-4">
            <PortfolioInput
              type="text"
              name="contactNumber"
              label="Contact Number"
              placeholder="Your Contact Number ..."
            />
            <PortfolioInput
              type="text"
              name="address"
              label="Address"
              placeholder="Enter Your Address ..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors mt-2"
          >
            Register
          </button>
        </PortfolioForm>
        <p className="text-center mt-2">
          <small>
            Already have an account Please{" "}
            <Link href="/login" className="text-indigo-600 font-medium">
              Sign In
            </Link>
          </small>
        </p>

        <p className="text-sm mt-2 text-center">
          © {new Date().getFullYear()} Landing Portfolio. Crafted with ❤️ by
          Landing Portfolio Team{" "}
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
