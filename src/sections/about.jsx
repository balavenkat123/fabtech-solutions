import { ceo } from "../assets/images";
const Aboutservices = () => {
    // Your existing code for MobileServices component
    
    return (
      <section className="max-container">
        {/* Existing content */}
        {/* ... */}
        
        {/* New section */}
        <section className="mt-16 text-center">
          <h2 className="text-4xl font-bold">We <span>Provide</span> Quality</h2>
          <p className="max-w-3xl mx-auto mt-4 mb-6 px-4">
            At our company, we take pride in offering the best mobile repair services in the market. Our commitment lies in providing quick, quality, and professional services that prioritize customer satisfaction above all. We are the most trustworthy name you can rely on for your mobile needs.
          </p>
          <div className="mx-auto">
            <img src={ceo} alt="CEO Image" className="w-40 h-40 rounded-full object-cover mx-auto" />
            <p className="text-lg font-bold mt-2">Md Abdul Aqeel</p>
            <p className="text-sm">Founder of FABTECH MOBILE SOLUTIONS</p>
          </div>
        </section>
      </section>
    );
  };
  
  export default Aboutservices;