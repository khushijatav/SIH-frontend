import { Mail } from "lucide-react";

const InputField = ({ register, error }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Email ID or Username
      </label>

      <div
        className={`group flex h-14 items-center rounded-xl border bg-white transition-all ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-slate-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
        }`}
      >
        <Mail
          size={21}
          className="ml-4 shrink-0 text-slate-500 group-focus-within:text-blue-600"
        />

        <input
          type="text"
          placeholder="Email ID or Username"
          className="h-full w-full bg-transparent px-4 text-base text-slate-700 outline-none placeholder:text-slate-400"
          {...register("email", {
            required: "Email or username is required",
          })}
        />
      </div>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default InputField;