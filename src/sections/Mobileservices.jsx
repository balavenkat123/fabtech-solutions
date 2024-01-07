import React from "react";
import Nav1 from "../components/Nav1";
const Mobileservices = () => {
  const services = [
    { id: 1, name: "we break it" },
    { id: 2, name: "we" },
    { id: 3, name: "kan " },
    { id: 4, name: "masth" },
    { id: 5, name: "Service " },
    { id: 6, name: "untadhi" },
    { id: 7, name: "chaala" },
    { id: 8, name: "services" },
    { id: 9, name: "unnaii" },
    { id: 10, name: "masthh affordable" },
  ];
  return (
    <div>
      <Nav1 />
      <br />
      <div className="w-full max-w-3xl mx-auto">
        <table className="w-full table-auto bg-red-100">
          <thead>
            <tr className="bg-red-200">
              <th className="border px-1 py-2">S.No.</th>
              <th className="border px-4 py-2">Mobile Services Provided</th>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mobileservices;
