import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Logo from "../Components/Logo";
import IndustryBackground from "../Components/IndustryBackground";

import IndustryWelcome from "../Components/IndustryWelcome";
import AdminInput from "../Components/AdminInput";
import AdminPassword from "../Components/AdminPassword";
import InputField from "../Components/InputField";
import SecurityCodeInput from "../Components/SecurityCodeInput";
import IndustryLoginButton from "../Components/IndustryLoginButton";
import IndustryRegisterButton from "../Components/IndustryRegisterButton";

const IndustryLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isSubmitting,
    },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      companyCode: "",
    },
  });

  const onSubmit = async (data) => {
    console.log("Industry Login:", data);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      <IndustryBackground />

      <main className="relative z-10 min-h-screen px-4 py-6 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="mx-auto mb-6 max-w-7xl">
          <Logo />
        </div>

        {/* Main Container */}
        <div className="mx-auto flex max-w-6xl items-center">

          <div className="grid w-full overflow-hidden rounded-[34px] border border-white/80 bg-white/45 p-2 shadow-[0_30px_100px_rgba(38,64,130,0.2)] backdrop-blur-2xl lg:grid-cols-[1.05fr_0.95fr]">

            {/* LEFT SIDE */}
            <IndustryWelcome />

            {/* RIGHT SIDE */}
            <div className="flex min-h-[680px] flex-col justify-center px-5 py-8 sm:px-9 lg:px-11 xl:px-14">

              {/* Heading */}
              <div className="mb-7">

                <div className="mb-4 flex items-center gap-2">
                  <span className="h-1 w-9 rounded-full bg-linear-to-r from-blue-500 to-purple-500" />

                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
                    Welcome Back
                  </span>
                </div>

                <h1 className="text-3xl font-bold tracking-tight text-[#122d5c] sm:text-4xl">
                  Industry Login
                </h1>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
                  Sign in to connect with talented students,
                  explore opportunities and grow together.
                </p>

              </div>

              {/* FORM CARD */}
              <div className="rounded-[25px] border border-white/90 bg-white/75 p-5 shadow-[0_18px_50px_rgba(46,69,125,0.08)] backdrop-blur-xl sm:p-7">

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4"
                >

                  <AdminInput
                    register={register}
                    error={errors.email}
                    label="Email ID or Username"
                  />

                  <AdminPassword
                    register={register}
                    error={errors.password}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    label="Password"
                  />

                  <InputField
                    register={register}
                    error={errors.companyCode}
                    label="Company Code"
                  />

                  <SecurityCodeInput
                    register={register}
                    error={errors.securityCode}
                    label="Security Code"
                  />

                  {/* Forgot Password */}
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      className="text-sm font-semibold text-blue-600 transition hover:text-purple-600 hover:underline"
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Login */}
                  <IndustryLoginButton
                    loading={isSubmitting}
                  />

                </form>

              </div>

              {/* Register */}
              <div className="mt-5">
                <IndustryRegisterButton />
              </div>

              {/* Bottom text */}
              <div className="mt-5 text-center">
                <Link
                  to="/"
                  className="text-sm font-medium text-slate-500 transition-colors hover:text-blue-600"
                >
                  ← Back to Home
                </Link>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IndustryLogin;