import { ArrowRight } from "lucide-react";

const GradientButton = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group relative flex h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-lg font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
    >
      <span className="relative z-10">
        {loading ? "Logging in..." : "Login"}
      </span>

      {!loading && (
        <ArrowRight
          size={21}
          className="relative z-10 ml-2 transition-transform group-hover:translate-x-1"
        />
      )}
    </button>
  );
};

export default GradientButton;