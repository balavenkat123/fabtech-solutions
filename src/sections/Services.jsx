import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div>
      <h1 className="sm:text-6xl text-4xl font-bold">
        <span className="text-red-700">Our</span> Services
      </h1>
      <section className="max-container flex justify-center flex-wrap gap-4 ">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
      
    </div>
  );
};

export default Services;
