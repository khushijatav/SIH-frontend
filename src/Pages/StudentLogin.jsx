import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import InputField from "../Components/InputField";
import PasswordField from "../Components/PasswordField";
import GradientButton from "../Components/GradientButton";
import AuthCard from "../Components/AuthCard";

const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      <Background />

      <Navbar />

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-5 py-10">

        <div className="w-full max-w-2xl">

          {/* Heading */}
          <div className="mb-8 text-center">

            <h1 className="text-3xl font-bold text-[#163b70] sm:text-4xl">
              Student Login
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Welcome back! Login to continue to EduNexus.
            </p>

          </div>

          {/* Card */}
          <AuthCard>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              <InputField
                register={register}
                error={errors.email}
              />

              <PasswordField
                register={register}
                error={errors.password}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />

              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-medium text-blue-600 hover:text-purple-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              <div className="h-px bg-slate-200" />

              <GradientButton />

            </form>

            <div className="mt-7 text-center text-sm text-slate-500">
              New Student?{" "}
              <Link
                to="/register"
                className="font-semibold text-blue-600 hover:text-purple-600 hover:underline"
              >
                Create Account
              </Link>
            </div>

          </AuthCard>

        </div>

      </main>

    </div>
  );
};

export default StudentLogin;