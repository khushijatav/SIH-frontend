import { ArrowRight, LoaderCircle } from "lucide-react";

const IndustryLoginButton = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#1597f3] via-[#2563eb] to-[#7138e8] text-base font-bold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <>
          <LoaderCircle
            size={21}
            className="animate-spin"
          />
          Logging in...
        </>
      ) : (
        <>
          Login
          <ArrowRight
            size={21}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </>
      )}
    </button>
  );
};

export default IndustryLoginButton;