import simbaLogo from "@/assets/simba-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          <div>
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-6">
              <img src={simbaLogo} alt="Simba Cement" className="h-16" />
            </div>
            <h3 className="text-xl font-bold mb-4">NATIONAL CEMENT COMPANY LTD</h3>
            <p className="text-gray-300 leading-relaxed">
              We produce reliable cement and paving solutions and deliver them across the country,
              helping builders complete projects on time and to specification.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Group Companies</h4>
            <ul className="space-y-3 text-gray-300">
              <li>DEVKI STEEL MILLS LIMITED</li>
              <li>MAISHA MABATI MILLS LIMITED</li>
              <li>MAISHA PACKAGING COMPANY LIMITED</li>
              <li>NORTHWOOD AVIATION AGENCIES LIMITED</li>
              <li>MAVUNO FERTILIZERS & MINERALS</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-white transition-colors">HOME</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">PRODUCTS</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">ABOUT US</a></li>
              <li><a href="#news" className="hover:text-white transition-colors">NEWS</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">CONTACT US</a></li>
              <li><a href="#nccl" className="hover:text-white transition-colors">NCCL UGANDA</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Reach Us</h4>
            <div className="space-y-4 text-gray-300">
              <div>
                <p>sales@nccke.com</p>
              </div>
              <div>
                <p>
                  <a href="tel:+254750936321" className="hover:text-white transition-colors">+254 750 936 321</a>
                </p>
              </div>
              <div>
                <p>National Cement Company Limited, Off</p>
                <p>Mombasa Road, Opposite Lukenya RD</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;