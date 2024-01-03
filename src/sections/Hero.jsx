import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { bike1 } from '../assets/images'
import { bikes, statistics } from '../constants'
import BikeCard from '../components/BikeCard'
// import Typed from 'react-typed';
import { useState } from 'react'


const Hero = () => {
  const[bigBikeImg,setbigBikeImg]=useState(bike1)
  return (
    <section id='home' className='w-full border flex xl:flex-row flex-col min-h-screen
     gap-5 max-container bg-sky-50' >
      <div className='relative xl:w-1/3 flex flex-col justify-center items-start w-full padding-x pt-28'>
        <p className='text-bold text-xl text-sky-800'>md aqeel </p>
        <h1 className='mt-8 font-palanque sm:text-8xl font-bold text-7xl'>New arrival
        {/* <Typed
                    strings={['New Arrival','Brand New']}
                    typeSpeed={100}
                    backSpeed={30}
                    loop
                /> */}
          
          <br/> 
          <spam className="text-sky-500">TWO </spam>wheelers 
        </h1>
        <p className='mt-5 text-xl font-montserrat'>Discover new bikes with Best Downpayments all around Hyderabad</p>
        <Button className="mt-5 " lable="Call Us Now" 
        iconURL={arrowRight}/>
      
      <div className='flex justify-starts items-start felx-wrap w-full mt-20 gap-16'>
        {statistics.map((start)=>
          <div key={start.label}>
            <p className='sm:text-4xl text-2xl font-palanquin font-semibold '>{start.value}</p>
            <p className='leading-7 font-semibold '>{start.label}</p>
          </div>          
        )}
      </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-blue-100 bg-hero bg-cover bg-center'>
        <img src={bigBikeImg} alt="shoe" width={510} height={402} className='object-contain relative z-10 ' />
      
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
        {bikes.map((bike)=>
          <div key={bike}>
            <BikeCard 
            imgURL={bike}
            changeBigBike={(bike)=>setbigBikeImg(bike)}
            bigBikeImg={bigBikeImg}/>
          </div>
        )}
      </div>
    </div> 
    </section>
  )
}

export default Hero
