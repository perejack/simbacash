import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h3 className="text-primary text-lg font-medium mb-4 uppercase tracking-wide">
              ABOUT US
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
              About National
              <br />
              Cement Ltd
            </h2>
            <div className="w-24 h-1 bg-primary mb-8 mx-auto lg:mx-0"></div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are a Kenyan manufacturing company focused on delivering dependable
              building materials at fair prices so more people can complete their
              projects with confidence. Since our first bags rolled off the line,
              we’ve grown steadily by investing in modern processes, strict quality
              controls, and reliable distribution. Today, our products are trusted
              by contractors and homeowners alike for consistent performance across
              the country.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Learn More
            </Button>
          </div>
          
          <div className="space-y-8">
            <div className="border border-gray-200 p-8 rounded-lg bg-white shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h4 className="text-xl font-bold text-foreground">Over a Decade of Reliable Supply</h4>
              </div>
            </div>
            
            <div className="border border-gray-200 p-8 rounded-lg bg-white shadow-sm">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                </div>
                <h4 className="text-xl font-bold text-foreground">Thousands of Jobs Supported</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;