import {
  GraduationCap,
  School,
  Factory,
  Settings,
} from "lucide-react";

import Navbar from "../Components/Navbar";
import Background from "../Components/Background";
import RoleCard from "../Components/RoleCard";

const Home = () => {
  const handleRoleClick = (role) => {
    console.log(`${role} selected`);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">

      <Background />

      <Navbar />

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 lg:px-10">

        {/* Heading */}
        <section className="mb-12 text-center sm:mb-14">

          <h1 className="text-3xl font-bold tracking-tight text-[#183866] sm:text-4xl lg:text-[42px]">
            Connecting Students, Colleges & Industry
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            One platform connecting students, educational institutions,
            industries and opportunities.
          </p>

        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 gap-7 md:grid-cols-2">

          {/* Student */}
          <RoleCard
            icon={GraduationCap}
            title="STUDENT"
            description="Access Opportunities & Projects"
            gradient="from-blue-500 to-indigo-700"
            onClick={() => handleRoleClick("Student")}
          />

          {/* College */}
          <RoleCard
            icon={School}
            title="COLLEGE"
            description="Manage Campus Collaborations"
            gradient="from-blue-500 to-cyan-600"
            onClick={() => handleRoleClick("College")}
          />

          {/* Industry */}
          <RoleCard
            icon={Factory}
            title="INDUSTRY"
            description="Connect with Emerging Talent"
            gradient="from-blue-500 to-indigo-600"
            onClick={() => handleRoleClick("Industry")}
          />

          {/* Admin */}
          <RoleCard
            icon={Settings}
            title="ADMIN"
            description="Oversee & Configure Platform"
            gradient="from-indigo-600 to-blue-700"
            onClick={() => handleRoleClick("Admin")}
          />

        </section>

      </main>

    </div>
  );
};

export default Home;