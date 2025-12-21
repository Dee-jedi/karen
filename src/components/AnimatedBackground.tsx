const AnimatedBackground = () => {
  return (
    <>
      {/* Very Subtle Static Background Gradients */}
      <div className="pointer-events-none fixed inset-0">
        {/* Top Left - Very subtle Pink/Red Glow */}
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-linear-to-br from-red-500/5 via-pink-500/4 to-transparent blur-3xl opacity-40" />

        {/* Bottom Right - Very subtle Rose Glow */}
        <div className="absolute -bottom-20 -right-32 h-80 w-80 rounded-full bg-linear-to-tl from-rose-500/6 via-pink-500/4 to-transparent blur-3xl opacity-40" />
      </div>

      {/* Minimal Static Glowing Bubbles */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-30">
        {/* Single subtle bubble - Blue */}
        <div
          className="absolute left-[20%] top-[40%] h-40 w-40 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)',
            filter: 'blur(45px)',
          }}
        />

        {/* Single subtle bubble - Pink */}
        <div
          className="absolute right-[25%] top-[30%] h-32 w-32 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0.03) 50%, transparent 100%)',
            filter: 'blur(35px)',
          }}
        />
      </div>
    </>
  );
};

export default AnimatedBackground;
