import { FaStar, FaStarHalf } from 'react-icons/fa';
import { ImQuotesLeft } from 'react-icons/im';

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
            <FaStarHalf className='text-yellow-500' />
          </div>
          <p className="text-sm mt-2 mb-4">Amazing website! Can order groceries very easily. One of the best websites out there!</p>
          <div className="review-profile flex items-center">
            <img src="img/c1.jpg" alt="" className="w-12 h-12 rounded-full object-cover object-center" />
            <h3 className="text-lg font-semibold ml-2">Optimus Prime</h3>
          </div>
        </div>
        {/* Review 2 */}
        <div className="box bg-white p-4 rounded-lg shadow-md border-b-4 border-red-500 transition duration-300 hover:shadow-xl hover:-translate-y-1">
          <ImQuotesLeft className='text-red-500 text-3xl block mb-4' />
          <div className="stars flex items-center">
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStar className='text-yellow-500' />
            <FaStarHalf className='text-yellow-500' />
          </div>
          <p className="text-sm mt-2 mb-4">Thought to give 5 stars but gave 3.5 because... why not!</p>
          <div className="review-profile flex items-center">
            <img src="img/c3.jpg" alt="" className="w-12 h-12 rounded-full object-cover object-center" />
            <h3 className="text-lg font-semibold ml-2">Bumbellbee</h3>
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
          <p className="text-sm mt-2 mb-4">What do you want? No time to rate this, use my name and rate your own thing!</p>
          <div className="review-profile flex items-center">
            <img src="img/c2.jpg" alt="" className="w-12 h-12 rounded-full object-cover object-center" />
            <h3 className="text-lg font-semibold ml-2">Prowler</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;