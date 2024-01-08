import React from "react";
import Nav1 from "../components/Nav1";
import ProductCard from "../components/ProductCard";
import { products, repairs } from "../constants";
import Footer1 from "./Footer1";
import Ourclients from "./Ourclients";


const Mobileservices = () => {
  const services = [
    { id: 1, name: "Software & Unlocking", type: "Software" },
    { id: 2, name: "Specialist in IPHONES", type: "Hardware & Software" },
    {
      id: 3,
      name: "IPHONE , IPAD , Macbook Repair",
      type: "Hardware & Software",
    },
    { id: 4, name: "IPHONE Back Glass Change", type: "Hardware" },
    { id: 5, name: "IPHONE Back Glass Removal LASER ", type: "Hardware" },
    { id: 6, name: "Broken Glass Replacement", type: "Hardware" },
    { id: 7, name: "Edge Glass Replacement", type: "Hardware" },
    { id: 8, name: "LCD Flux Change Only", type: "Hardware" },
    { id: 9, name: "Water Damage Repair ", type: "Hardware" },
    {
      id: 10,
      name: "Android Chip Level Service With Programming",
      type: "Hardware & Software",
    },
    {
      id: 11,
      name: "Face ID & Finger Print Repair ",
      type: "Hardware & Software",
    },
    { id: 12, name: "Hard Disk Upgrading ", type: "Hardware" },
    { id: 13, name: " DEAD Mobile Data Recovery completely", type: "Hardware" },
    { id: 14, name: " Mobile Lamination and Water Proofing", type: "Hardware" },
    { id: 15, name: " Double Decker CPU Repair", type: "Hardware" },
  ];
  return (
    <div>
      <Nav1 />
      <br />
      <h2 className="sm:text-6xl text-4xl font-bold mx-5">
        <span className="text-red-700">Mobile</span> services
      </h2>
      <br />
      <br />
      <div className="w-full max-w-3xl mx-auto">
        <table className="w-full table-auto bg-red-100">
          <thead>
            <tr className="bg-red-200">
              <th className="border px-1 py-2">S.No.</th>
              <th className="border px-4 py-2">Mobile Services Provided</th>
              <th className="border px-4 py-2">Type</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={service.id}
                className={index % 2 === 0 ? "bg-red-50 " : ""}
              >
                <td className="border px-1 py-2 flex justify-center">
                  {index + 1}
                </td>
                <td className="border px-4 py-2">{service.name}</td>
                <td className="border px-4 py-2">{service.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <br />
      <br />
      <div>
        <div
          id="products"
          className="max-container max-sm:mt-12 flex flex-col justify-start gap-5 mx-5"
        >
          <h1 className="sm:text-6xl text-4xl font-bold">
            <span className="text-red-700">Our</span>Repairs
          </h1>
          <p className="lg:max-w-lg mt-2 font-montserrat">
            here are some Tech courses which can be provided
          </p>
        </div>
        <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14 sm:items-center justify-center">
          {repairs.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
        <br className="font-bold block bg-black " />
      </div>
      <br />
      <br />
      <h2 className="flex justify-center sm:text-6xl text-4xl font-bold">
        <span className="text-red-700">Brands </span>&nbsp; We Support
      </h2>
      <br />
      <br />
      <div className="bg-red-600 mx-auto box-border  p-4 flex justify-center">
        hello
      </div>
      <Ourclients/>
      <div className="bg-black text-white">
        <Footer1 />
      </div>
    </div>
  );
};

export default Mobileservices;
