import { FaStar, FaStarHalf } from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';
import { bala, karthick, nithin } from '../assets/images';

const CustomerReviews = () => {
  return (
    <section className="customers max-w-6xl mx-auto py-[-4] px-6 ">
      <h2 className="font-palanque sm:text-4xl font-bold text-4xl text-center mb-8 "> <span>Why</span> <span className='text-red-700 underline'>Customers </span><span className='text-black'>Love Us</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Review 1 */}
        <div className="box bg-white p-4 rounded-lg shadow-md border-b-4 border-red-500 transition duration-300 hover:shadow-xl hover:-translate-y-1">
          <ImQuotesLeft className='text-red-500 text-3xl block mb-4' /> {/* Red color for quotes */}
          <div className="stars flex items-center">
            <FaStar className='text-yellow-500' /> {/* Gold/Yellow color for stars */}
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
          </div>
          <p className="text-sm mt-2 mb-4"><i>"Exceptional service! My phone had multiple issues, and they fixed them all flawlessly. Quick, efficient, and friendly. Definitely my go-to for any mobile problem!"</i></p>
          <div className="review-profile flex items-center">
            <img src={nithin} alt="" className="w-12 h-12 rounded-full object-cover object-center" />
            <h3 className="text-lg font-semibold ml-2">Nithin</h3>
          </div>
        </div>
        {/* Review 2 */}
        <div className="box bg-white p-4 rounded-lg shadow-md border-b-4 border-red-500 transition duration-300 hover:shadow-xl hover:-translate-y-1">
          <ImQuotesLeft className='text-red-500 text-3xl block mb-4' />
          <div className="stars flex items-center">
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
          </div>
          <p className="text-sm mt-2 mb-4"><i>"Impressive! The team's expertise in mobile repairs is top-notch. They solved my phone's software issue swiftly. The best part? They explained everything in a way that was easy for me to understand. Five stars all the way!"</i></p>
          <div className="review-profile flex items-center">
            <img src={bala} alt="" className="w-12 h-12 rounded-full object-cover object-center" />
            <h3 className="text-lg font-semibold ml-2">Bala Venkat</h3>
          </div>
        </div>
        {/* Review 3 */}
        <div className="box bg-white p-4 rounded-lg shadow-md border-b-4 border-red-500 transition duration-300 hover:shadow-xl hover:-translate-y-1">
          <ImQuotesLeft className='text-red-500 text-3xl block mb-4' />
          <div className="stars flex items-center">
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
          </div>
          <p className="text-sm mt-2 mb-4"><i>"Brilliant learning environment! The institute's setup for learning mobile repair is excellent. The hands-on experience and individual attention from the instructors made learning easy and enjoyable. Definitely recommend their courses!"</i></p>
          <div className="review-profile flex items-center">
            <img src={karthick} alt="" className="w-12 h-12 rounded-full object-cover object-center" />
            <h3 className="text-lg font-semibold ml-2">Karthik</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;