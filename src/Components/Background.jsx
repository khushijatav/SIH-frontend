const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#eef2ff] via-white to-[#edf5ff]" />

      {/* Top Blue Glow */}
      <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl" />

      {/* Top Purple Glow */}
      <div className="absolute -right-40 -top-10 h-96 w-96 rounded-full bg-purple-300/25 blur-3xl" />

      {/* Bottom Blue Glow */}
      <div className="absolute -bottom-40 -left-20 h-96 w-[600px] rounded-full bg-blue-200/30 blur-3xl" />

      {/* Bottom Purple Glow */}
      <div className="absolute -bottom-40 -right-20 h-96 w-[600px] rounded-full bg-purple-200/25 blur-3xl" />

      {/* Large Curves */}
      <div className="absolute -right-44 -top-60 h-[550px] w-[800px] rounded-full border border-white/80" />

      <div className="absolute -right-52 -top-48 h-[550px] w-[800px] rounded-full border border-blue-200/50" />

      <div className="absolute -bottom-80 -left-60 h-[600px] w-[900px] rounded-full border border-white/70" />

      <div className="absolute -bottom-72 -left-52 h-[600px] w-[900px] rounded-full border border-purple-200/40" />

    </div>
  );
};

export default Background;