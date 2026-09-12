import { Eye, EyeOff, LockKeyhole } from "lucide-react";

const PasswordField = ({
  register,
  error,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Password
      </label>

      <div
        className={`group flex h-14 items-center rounded-xl border bg-white transition-all ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-slate-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
        }`}
      >
        <LockKeyhole
          size={21}
          className="ml-4 shrink-0 text-slate-500 group-focus-within:text-blue-600"
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="h-full w-full bg-transparent px-4 text-base text-slate-700 outline-none placeholder:text-slate-400"
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
          onClick={() => setShowPassword(!showPassword)}
          className="mr-4 text-slate-500 hover:text-blue-600"
        >
          {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
        </button>
      </div>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default PasswordField;