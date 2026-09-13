import { ArrowRight } from "lucide-react";

const LoginButton = ({ loading = false }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group flex h-16 w-full items-center justify-center rounded-xl bg-linear-to-r from-[#078cf5] via-[#245eea] to-[#792be9] text-xl font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span>{loading ? "Logging in..." : "Login"}</span>

      {!loading && (
        <ArrowRight
          size={23}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default LoginButton;