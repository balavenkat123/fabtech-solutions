import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { List, ListItem, Card } from "@material-tailwind/react";
import Nav1 from "../components/Nav1";
import Footer1 from "./Footer1";
import ServiceCard from "../components/ServiceCard";
import { courses } from "../constants";

function Institute() {
  const slides = [
    {
      url: "https://i.ytimg.com/vi/gbxvLezdGr0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE8gZShjMA8=&rs=AOn4CLC4E0ek7tQyOq7w9evZabHTR_AcWA",
    },
    {
      url: "https://i.ytimg.com/vi/L3RJP2uEkw0/maxresdefault.jpg",
    },
    {
      url: "https://yt3.googleusercontent.com/Wx4s3RHCcRBHEV35AVbc6XSF4b5Zs9Ak1l9uM-Vi3VoxZ_Vv4hRRSU6Qb-TLn9vkCOsXNJcacQ=s900-c-k-c0x00ffffff-no-rj",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    
    <section className="w-full">
      <Nav1 />
      <div
        id="institute"
        className="max-w-[1400px] h-[780px] py-0 relative group mx-auto"
      >
        {/* <h1 className="font-bold "> Page 2</h1> */}
        
        <br />
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full  bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div><br></br>
        <div className="mx-5">
          <h1 className="font-bold text-4xl text-red-800">
            ABOUT FABTECH MOBILE SOLUTIONS{" "}
          </h1>
          <br />
          <p className="">
            <span className="font-bold text-blue-500">
              Welcome to the Fab Tech Mobile Solutions
            </span><span className="text-black">
            , where innovation meets education, and excellence is our standard.
            As a leading institution in the field of mobile technology hardware,
            we take pride in offering a comprehensive range of high-quality
            services that cater to the ever-evolving needs of the industry. Our
            commitment to excellence begins with our team of seasoned
            professionals, experts in the intricacies of mobile hardware. These
            dedicated individuals bring a wealth of experience and knowledge,
            ensuring that our students receive top-notch education and training.
            <br /> Whether you're a novice looking to start a career in mobile
            technology or a professional seeking to upgrade your skills, our
            institute provides a learning environment that fosters growth and
            mastery. <br /></span>
            <span className="font-bold text-red-700">State-of-the-art facilities</span> are
            the backbone of our institute. We understand the importance of
            hands-on experience in mastering mobile hardware, and our
            well-equipped labs are designed to provide just that. From the
            basics of circuitry to the latest advancements in mobile technology,
            our students have access to cutting-edge resources that prepare them
            for the challenges of the industry. At Mobile Tech Hardware
            Institute, we believe in personalized guidance. Our instructors take
            the time to understand the unique learning needs of each student,
            ensuring that they receive the attention and support necessary to
            excel.
          </p>
        </div>
        <br />

        <br />
        
        <div>
          <h1 className="sm:text-6xl text-4xl font-bold">
          <span className="text-red-700 px-5">Courses</span>We Provide
          </h1>
          <section className="max-container flex justify-center flex-wrap gap-0 ">
            {courses.map((service) => (
              <ServiceCard key={service.label} {...service} />
           ))}
          </section>
      
        </div>
        <div className="flex justify-center items-center"><h1>To Download List Of Courses</h1></div>
        <div className="flex justify-center items-center"><h1 className="text-red-700">Click The Button Below</h1></div><br />
            <div className="flex justify-center items-center"><br />
          <a target="_blank" href="./courses.pdf" download={true}>
          <button className='bg-red-700 text-white font-bold rounded-md px-3 py-2 hover:bg-red-400'>Courses</button>
          </a>
          </div>
        
        <br/>
        <div className="bg-black mx-auto py-20"><Footer1/></div>
        
      </div>

      
    </section>
    
  );
}

export default Institute;
