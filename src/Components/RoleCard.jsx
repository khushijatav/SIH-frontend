import { ArrowRight } from "lucide-react";

const RoleCard = ({
  icon: Icon,
  title,
  description,
  gradient,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative min-h-[235px] w-full overflow-hidden rounded-2xl border border-white/90 bg-white/65 px-6 py-7 text-center shadow-[0_18px_45px_rgba(65,85,145,0.14)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/75 hover:shadow-[0_25px_55px_rgba(65,85,145,0.22)]"
    >
      {/* Hover Background */}
      <div className="absolute inset-0 bg-linear-to-br from-white/60 via-transparent to-blue-100/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-full flex-col items-center">

        {/* Icon */}
        <div
          className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br ${gradient} shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-1`}
        >
          <Icon
            size={48}
            strokeWidth={1.8}
            className="text-white"
          />
        </div>

        {/* Title */}
        <h2 className="mt-5 text-2xl font-bold tracking-wide text-[#193765]">
          {title}
        </h2>

        {/* Divider */}
        <div className="my-4 h-px w-full max-w-[450px] bg-slate-200/80" />

        {/* Description */}
        <p className="text-base font-medium text-[#263d62]">
          {description}
        </p>

        {/* Arrow */}
        <div className="mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          Explore
          <ArrowRight size={17} />
        </div>

      </div>
    </button>
  );
};

export default RoleCard;