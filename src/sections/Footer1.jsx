import { copyrightSign } from "../assets/icons";
import { Fablogo, fabtechlogo,youtube } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer1 = () => {
  return (
    <footer id="contact-us" className="max-container">
    <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col padding-x padding-t pb-8">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={Fablogo}
              alt="logo"
              width={100}
              height={50}
              className="m-0"
            />
          </a>
          <p className="text-base leading-7 font-montserrat sm:max-w-sm text-white">
            Unlock your potential in mobile repair with our advanced coaching
            classes covering both Android and iOS. Plus, trust us for expert
            mobile repair services!
          </p>
          <div className="flex items-center gap-5 mt-6">
            {socialMedia.map((icon) => (
              <div
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white hover:text-slate-gray"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="object-scale-down h-32 w-32 flex items-start mx-14 ">
        <a href="https://www.youtube.com/@fabtechmobilesolutionshyde2050" target="_blank">
          <img src={youtube} alt="" />
        </a>
      </div>
      <br />
      <br />
      <div className="flex justify-end ">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.530518584069!2d78.47990837368923!3d17.38630980283911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99389849e3b5%3A0xccc7981ec4f1e678!2sFABTECH%20MOBILES%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1704383358991!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="px-6"
        ></iframe>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p className="text-white px-10">Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer text-white px-10">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer1;
