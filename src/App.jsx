import {
  Hero,
  Follow,
  Footer,
  Popularbikes,
  Services,
  Specialoffer,
  Institute,
} from "./sections";
import Nav from "./components/Nav";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CustomerReviews from "./sections/Custreviwe";
import Mobileservices from "./sections/Mobileservices";
import Aboutservices from "./sections/about";
import FAQ from "./sections/FAQ";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <main className="relative bg-white">
              <Nav />
              <section className="xl:padding-1 wide:padding-r padding-b ">
                <Hero className="bg-white" />
              </section>

              <section className="padding bg-white">
                <Popularbikes />
              </section>
              <section className="padding bg-white ">
                <Services />
                {/* </section>
  <section className="padding">
    <Specialoffer/>
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
    <Follow/> */}
              </section>
              
              <section>
                <CustomerReviews />
              </section>
              <br></br>
              <br></br>
              <section className="padding-x padding-t pb-8 bg-black text-blue-200">
                <Footer />
              </section>
            </main>
          }
        />

        <Route path="institute" element={<Institute />} />
        <Route path="mobileservices" element={<Mobileservices />} />
        <Route path="faq" element={<Mobileservices />} />
      </Routes>
    </BrowserRouter>
  );
}
