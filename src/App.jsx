import {Hero,Follow,Footer,Popularbikes,Services,Specialoffer} from "./sections"
import Nav from './components/Nav'

export default function App() {
  return (
    <main className="relative">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b ">
      <Hero className="bg-blue-50"/> 
    </section>
    <section className="padding bg-blue-50">
      <Popularbikes/>
    </section>
    <section className="padding bg-blue-50 ">
      <Services/>
    {/* </section>
    <section className="padding">
      <Specialoffer/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Follow/> */}
    </section>
    <section className="padding-x padding-t pb-8 bg-black text-blue-200">
      
      <Footer/> 
    </section>
    
    </main>
  )
}


