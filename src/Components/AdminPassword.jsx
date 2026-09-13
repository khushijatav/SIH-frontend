import { Eye, EyeOff, LockKeyhole } from "lucide-react";

const AdminPassword = ({
  register,
  error,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div>
      <div
        className={`flex h-16 items-center rounded-xl border bg-white/75 shadow-sm backdrop-blur-sm transition-all duration-200 ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-slate-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
        }`}
      >
        <LockKeyhole
          size={27}
          strokeWidth={1.8}
          className="ml-5 shrink-0 text-[#607798]"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          autoComplete="current-password"
          className="h-full w-full bg-transparent px-4 text-lg text-slate-700 outline-none placeholder:text-[#607798]"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="mr-5 text-[#607798] transition-colors hover:text-blue-600"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff size={27} strokeWidth={1.8} />
          ) : (
            <Eye size={27} strokeWidth={1.8} />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-1.5 ml-1 text-sm font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default AdminPassword;