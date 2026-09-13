import { ShieldCheck } from "lucide-react";

const SecurityCodeInput = ({ register, error }) => {
  return (
    <div>
      <div
        className={`flex h-16 items-center rounded-xl border bg-white/75 shadow-sm backdrop-blur-sm transition-all duration-200 ${
          error
            ? "border-red-400 ring-2 ring-red-100"
            : "border-slate-200 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
        }`}
      >
        <ShieldCheck
          size={27}
          strokeWidth={1.8}
          className="ml-5 shrink-0 text-[#607798]"
        />

        <input
          type="text"
          placeholder="Security Code"
          maxLength={20}
          className="h-full w-full bg-transparent px-4 text-lg text-slate-700 outline-none placeholder:text-[#607798]"
          {...register("securityCode", {
            required: "Security Code is required",
          })}
        />
      </div>

      {error && (
        <p className="mt-1.5 ml-1 text-sm font-medium text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default SecurityCodeInput;