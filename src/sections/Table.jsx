const TableM = () => {
    // const services = [
    //     { id: 1, name: "Software & Unlocking", type: "Software" },
    //     { id: 2, name: "Specialist in IPHONES", type: "Hardware & Software" },
    //     {
    //       id: 3,
    //       name: "IPHONE , IPAD , Macbook Repair",
    //       type: "Hardware & Software",
    //     },
    //     { id: 4, name: "IPHONE Back Glass Change", type: "Hardware" },
    //     { id: 5, name: "IPHONE Back Glass Removal LASER ", type: "Hardware" },
    //     { id: 6, name: "Broken Glass Replacement", type: "Hardware" },
    //     { id: 7, name: "Edge Glass Replacement", type: "Hardware" },
    //     { id: 8, name: "LCD Flux Change Only", type: "Hardware" },
    //     { id: 9, name: "Water Damage Repair ", type: "Hardware" },
    //     {
    //       id: 10,
    //       name: "Android Chip Level Service With Programming",
    //       type: "Hardware & Software",
    //     },
    //     {
    //       id: 11,
    //       name: "Face ID & Finger Print Repair ",
    //       type: "Hardware & Software",
    //     },
    //     { id: 12, name: "Hard Disk Upgrading ", type: "Hardware" },
    //     { id: 13, name: " DEAD Mobile Data Recovery completely", type: "Hardware" },
    //     { id: 14, name: " Mobile Lamination and Water Proofing", type: "Hardware" },
    //     { id: 15, name: " Double Decker CPU Repair", type: "Hardware" },
    //   ];
    return (
        
      <div className="bg-white flex justify-center items-center h-screen">
        <table className="shadow-2xl font-[Poppins] border-2 border-red-200 w-6/12 overflow-hidden">
          <thead className="text-white">
            <tr>
              <th className="py-3 bg-red-800">Id</th>
              <th className="py-3 bg-red-800">NAME</th>
              <th className="py-3 bg-red-800">TYPE</th>
            </tr>
          </thead>
          <tbody className="text-black text-center">
            <tr className="bg-red-200 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">1</td>
              <td className="py-3 px-6">Software & Unlocking</td>
              <td className="py-3 px-6">Software</td>
              
            </tr>
            <tr className="bg-red-300 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">2</td>
              <td className="py-3 px-6">Specialist in IPHONES</td>
              <td className="py-3 px-6">Hardware & Software</td>
              
            </tr>
            <tr className="bg-red-400  hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">3</td>
              <td className="py-3 px-6">IPHONE , IPAD , Macbook Repair</td>
              <td className="py-3 px-6">Hardware & Software</td>
              
            </tr>
            <tr className="bg-red-200 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">4</td>
              <td className="py-3 px-6">IPHONE Back Glass Change</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-300 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">5</td>
              <td className="py-3 px-6">IPHONE Back Glass Removal LASER</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-400 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">6</td>
              <td className="py-3 px-6">Broken Glass Replacement</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-200 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">7</td>
              <td className="py-3 px-6">Edge Glass Replacement</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-300 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">8</td>
              <td className="py-3 px-6">LCD Flux Change Only</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-400 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">9</td>
              <td className="py-3 px-6">Water Damage Repair</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-200 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">10</td>
              <td className="py-3 px-6">Android Chip Level Service With Programming</td>
              <td className="py-3 px-6">Hardware & Software</td>
              
            </tr>
            <tr className="bg-red-300 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">11</td>
              <td className="py-3 px-6">Face ID & Finger Print Repair</td>
              <td className="py-3 px-6">Hardware & Software</td>
              
            </tr>
            <tr className="bg-red-400 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">12</td>
              <td className="py-3 px-6">Hard Disk Upgrading</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-200 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">13</td>
              <td className="py-3 px-6">DEAD Mobile Data Recovery completely</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-300 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">14</td>
              <td className="py-3 px-6"> Mobile Lamination and Water Proofing</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
            <tr className="bg-red-400 hover:bg-red-100 hover:scale-105 cursor-pointer duration-300">
              <td className="py-3 px-6">15</td>
              <td className="py-3 px-6">Double Decker CPU Repair</td>
              <td className="py-3 px-6">Hardware</td>
              
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  
  export default TableM;

  //this is extra table which is basic
  {/* <div className="w-full max-w-3xl mx-auto">
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
      </div> */}