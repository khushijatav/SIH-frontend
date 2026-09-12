const AuthCard = ({ children }) => {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/80 p-6 shadow-[0_20px_60px_rgba(48,73,130,0.12)] backdrop-blur-xl sm:rounded-3xl sm:p-10">
      {children}
    </div>
  );
};

export default AuthCard;