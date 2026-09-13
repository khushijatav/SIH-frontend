import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Logo from "../Components/Logo";
import Background from "../Components/Background";
import AdminInput from "../Components/AdminInput";
import AdminPassword from "../Components/AdminPassword";
import SecurityCodeInput from "../Components/SecurityCodeInput";
import LoginButton from "../Components/LoginButton";

const CollegeAdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      securityCode: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("College Admin Login:", data);

    // Backend API yaha connect kar sakte ho
    // Example:
    //
    // const response = await fetch(
    //   `${import.meta.env.VITE_PUBLIC_API_URL}/api/admin/login`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   }
    // );
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      <Background />

      {/* Main Container */}
      <main className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center px-4 py-10 sm:px-6 sm:py-12">

        {/* Logo */}
        <div className="mb-12">
          <Logo />
        </div>

        {/* Login Section */}
        <div className="w-full max-w-[760px]">

          {/* Heading */}
          <div className="mb-10 text-center">

            <h2 className="text-3xl font-bold tracking-tight text-[#183866] sm:text-4xl md:text-[42px]">
              College Admin Login
            </h2>

          </div>

          {/* Card */}
          <div className="rounded-2xl border border-white/90 bg-white/65 p-6 shadow-[0_20px_60px_rgba(55,75,135,0.16)] backdrop-blur-xl sm:rounded-3xl sm:p-10 md:p-12">

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >

              {/* Email */}
              <AdminInput
                register={register}
                error={errors.email}
              />

              {/* Password */}
              <AdminPassword
                register={register}
                error={errors.password}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />

              {/* Security Code */}
              <SecurityCodeInput
                register={register}
                error={errors.securityCode}
              />

              {/* Forgot Password */}
              <div className="flex justify-end pt-1">

                <button
                  type="button"
                  className="text-lg font-medium text-blue-600 transition-colors hover:text-purple-600 hover:underline"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Divider */}
              <div className="h-px bg-slate-200/80" />

              {/* Login Button */}
              <LoginButton loading={isSubmitting} />

            </form>

          </div>

          {/* Back to Home */}
          <div className="mt-7 text-center">
            <Link
              to="/"
              className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
            >
              ← Back to Home
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
};

export default CollegeAdminLogin;