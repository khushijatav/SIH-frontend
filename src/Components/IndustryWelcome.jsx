import {
  Users,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

const IndustryWelcome = () => {
  return (
    <div
      className="relative hidden min-h-[700px] overflow-hidden rounded-[30px] lg:block"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(3,24,75,0.82) 0%, rgba(5,31,88,0.68) 45%, rgba(7,30,75,0.25) 100%), url('/industry-left.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark blue overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-[#031d5b]/80 via-[#082b72]/45 to-transparent" />

      {/* Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-32 left-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 flex min-h-[700px] flex-col justify-between p-10 xl:p-12">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-cyan-400 to-blue-600 shadow-xl shadow-cyan-500/30">
              <span className="text-3xl">🎓</span>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">
                EduNexus
              </h2>

              <p className="mt-1 text-xs tracking-[0.28em] text-blue-200">
                BRIDGE • BUILD • GROW
              </p>
            </div>

          </div>

          {/* MAIN CONTENT */}
          <div className="mt-16 max-w-[500px]">

            <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Industry Portal
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-[1.08] text-white xl:text-[52px]">

              Empowering

              <br />

              <span className="bg-linear-to-r from-cyan-300 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                Industry-Talent
              </span>

              <br />

              Connections

            </h1>

            <p className="mt-7 max-w-[430px] text-base leading-7 text-blue-50">
              Discover skilled students, collaborate on real-world
              projects and build the future workforce with EduNexus.
            </p>

          </div>
        </div>

        {/* BOTTOM CONTENT */}
        <div>

          {/* FEATURES */}
          <div className="grid grid-cols-3 gap-5">

            {/* Talent */}
            <div className="group">

              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/40 bg-blue-700/60 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <Users
                  size={30}
                  strokeWidth={2}
                  className="text-white"
                />
              </div>

              <h3 className="text-base font-bold text-white">
                Find Talent
              </h3>

              <p className="mt-2 text-sm leading-5 text-blue-100">
                Connect with skilled & motivated students.
              </p>

            </div>

            {/* Projects */}
            <div className="group">

              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-300/40 bg-blue-700/60 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <BriefcaseBusiness
                  size={30}
                  strokeWidth={2}
                  className="text-white"
                />
              </div>

              <h3 className="text-base font-bold text-white">
                Work on Projects
              </h3>

              <p className="mt-2 text-sm leading-5 text-blue-100">
                Bring your ideas to life with fresh perspectives.
              </p>

            </div>

            {/* Growth */}
            <div className="group">

              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-300/40 bg-blue-700/60 shadow-lg backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <TrendingUp
                  size={30}
                  strokeWidth={2}
                  className="text-white"
                />
              </div>

              <h3 className="text-base font-bold text-white">
                Build Future
              </h3>

              <p className="mt-2 text-sm leading-5 text-blue-100">
                Create opportunities, make an impact.
              </p>

            </div>

          </div>

          {/* STATS */}
          <div className="mt-8 rounded-2xl border border-blue-300/30 bg-blue-950/35 px-7 py-5 backdrop-blur-md">

            <div className="grid grid-cols-3 divide-x divide-blue-300/30 text-center">

              <div>
                <p className="text-3xl font-extrabold text-cyan-300">
                  500+
                </p>
                <p className="mt-1 text-sm text-white">
                  Companies
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold text-cyan-300">
                  10K+
                </p>
                <p className="mt-1 text-sm text-white">
                  Students
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold text-purple-300">
                  1000+
                </p>
                <p className="mt-1 text-sm text-white">
                  Projects
                </p>
              </div>

            </div>

          </div>

          <p className="mt-7 text-xl italic text-white/90">
            Together for a stronger tomorrow
          </p>

        </div>

      </div>
    </div>
  );
};

export default IndustryWelcome;