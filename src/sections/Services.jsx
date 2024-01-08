import { company1, company2, company3,company4,company5,company6,company7,company8,company9,company10,company11,company12 } from "../assets/images";
import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";

const Services = () => {
  return (
    <div>
      <h1 className="sm:text-6xl text-4xl font-bold">
        <span className="text-red-700">Our</span> Services
      </h1>
      <section className="max-container flex justify-center flex-wrap gap-9 ">
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </section>
      
    </div>
  );
};
// import React from 'react';

// import Slider from 'react-infinite-logo-slider'

// const Services = () => {
//   return (
//     <section className="bg-white py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="font-palanque sm:text-4xl font-bold text-4xl text-center mb-8 ">
//           Our <span className='text-red-700'>Clients </span>
//         </h2>
//       </div>
//       <div className="flex justify-center">
//         <Slider
//           width="250px"
//           duration={40}
//           pauseOnHover={true}
//           blurBorders={false}
//           blurBorderColor={'#fff'}
//         >
//           <Slider.Slide>
//             <img src={company1} alt="company-1" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company2} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company3} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company4} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company5} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company6} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company7} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company8} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company9} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company10} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company11} alt="company-2" className="w-36" />
//           </Slider.Slide>
//           <Slider.Slide>
//             <img src={company12} alt="company-2" className="w-36" />
//           </Slider.Slide>

          
//          </Slider>
//        </div>
//      </section>
//    );
// };
                     
// const Services = () => {
//   return (
//     <section className="bg-white py-8">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="font-palanque sm:text-4xl font-bold text-4xl text-center mb-8 ">Our <span className='text-red-700 '>Clients </span></h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
//           <img src={company1} alt="Company 1" className="h-12" />
//           <img src={company2} alt="Company 2" className="h-12" />
//           <img src={company3} alt="Company 3" className="h-12" />
//           <img src={company4} alt="Company 4" className="h-12" />
//           <img src={company5} alt="Company 5" className="h-12" />
//           <img src={company6} alt="Company 6" className="h-12" />
//           <img src={company7} alt="Company 7" className="h-12" />
//           <img src={company8} alt="Company 8" className="h-12" />
//           <img src={company9} alt="Company 9" className="h-12" />
//           <img src={company10} alt="Company 10" className="h-12" />
//           <img src={company11} alt="Company 11" className="h-12" />
//           <img src={company12} alt="Company 12" className="h-12" />
//           <img src={company12} alt="Company 13" className="h-12" />
//           <img src={company12} alt="Company 14" className="h-12" />
//           <img src={company12} alt="Company 15" className="h-12" />
//         </div>
//       </div>
//     </section>
//   );
// };
export default Services;
