const IndustryBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

      {/* Main Background */}
      <div className="absolute inset-0 bg-linear-to-br from-[#eef4ff] via-[#f8faff] to-[#eef0ff]" />

      {/* Top Left Glow */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-3xl" />

      {/* Top Right Glow */}
      <div className="absolute -right-40 -top-20 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-3xl" />

      {/* Bottom Left Glow */}
      <div className="absolute -bottom-48 -left-32 h-[550px] w-[550px] rounded-full bg-cyan-300/15 blur-3xl" />

      {/* Bottom Right Glow */}
      <div className="absolute -bottom-48 -right-32 h-[550px] w-[550px] rounded-full bg-indigo-300/15 blur-3xl" />

      {/* Decorative Ring 1 */}
      <div className="absolute -right-56 -top-48 h-[650px] w-[900px] rounded-full border border-blue-200/40" />

      {/* Decorative Ring 2 */}
      <div className="absolute -right-64 -top-36 h-[650px] w-[900px] rounded-full border border-purple-200/30" />

      {/* Decorative Ring 3 */}
      <div className="absolute -bottom-96 -left-72 h-[700px] w-[1000px] rounded-full border border-blue-200/30" />

      {/* Small Floating Glow */}
      <div className="absolute left-[15%] top-[25%] h-20 w-20 rounded-full bg-cyan-300/10 blur-2xl" />

      <div className="absolute right-[18%] bottom-[20%] h-24 w-24 rounded-full bg-purple-300/10 blur-2xl" />

    </div>
  );
};

export default IndustryBackground;