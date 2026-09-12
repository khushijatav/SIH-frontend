import { GraduationCap } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      {/* Logo Icon */}
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-linear-to-br from-cyan-400 via-blue-600 to-indigo-700 shadow-lg shadow-blue-500/25">
        <div className="absolute h-8 w-8 rounded-full border-4 border-white/80 border-r-transparent border-b-transparent rotate-[-35deg]" />

        <GraduationCap
          size={25}
          strokeWidth={2}
          className="relative z-10 text-white"
        />
      </div>

      {/* Logo Text */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#183866] sm:text-3xl">
          EduNexus
        </h1>

        <p className="mt-0.5 text-[8px] font-semibold tracking-[0.25em] text-slate-500">
          LEARN • CONNECT • GROW
        </p>
      </div>
    </div>
  );
};

export default Logo;