const HeroSection = () => {
  const heroImageUrl = "/hero-image.png";
  
  return (
    <section id="home" className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/20"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Building With Confidence
            <br />
            For Every Project
          </h1>
          <div className="w-32 h-1 bg-white mb-8 mx-auto md:mx-0"></div>
          <p className="text-lg md:text-2xl font-light opacity-90">
            Durable materials. Reliable deliveries. Trusted performance nationwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;