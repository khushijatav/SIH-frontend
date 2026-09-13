import { Building2, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const IndustryRegisterButton = () => {
  return (
    <Link
      to="/industry-register"
      className="group flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white/70 text-sm font-semibold text-blue-600 transition-all duration-300 hover:border-blue-400 hover:bg-blue-50 hover:shadow-md"
    >
      <Building2
        size={18}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      Register Your Company

      <ArrowUpRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
};

export default IndustryRegisterButton;