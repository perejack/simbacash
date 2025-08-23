import clinkerImage from "@/assets/clinker-image.jpeg";

const ManufacturingSection = () => {
  return (
    <section className="py-12 md:py-20 bg-section-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-primary text-lg font-medium mb-4 uppercase tracking-wide">
              MANUFACTURING
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              CLINKER MANUFACTURING
              <br />
              PLANT
            </h2>
            <div className="w-24 h-1 bg-primary mb-8 mx-auto lg:mx-0"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our clinker facility is designed for consistent output and efficient energy use,
              enabling us to produce materials that meet strict performance standards. We pair
              modern equipment with rigorous process control to reduce waste and minimize
              environmental impact. The result is reliable quality at a fair cost, available to
              builders and suppliers across the country.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src={clinkerImage} 
              alt="Clinker Manufacturing Plant" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;