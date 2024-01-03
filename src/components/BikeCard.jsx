const BikeCard = ({imgURL,changeBigBike,bigBikeImg}) => {
    const handleClick=()=>{
        if(bigBikeImg!==imgURL){
          changeBigBike(imgURL.bigBikeImg)
        }
    }
  return (
    // <div className={`border-red rounded-xl 
    //     ${bigBikeImg===imgURL.bigBikeImg
    //        ? 'border-coral-red'
    //        : 'border-transparent' 
    //     } cursor-pointer max-sm:flex-1
    // `} onClick={handleClick}>
        <div className="flex justify-center items-center bg-card bg-center bg-cover bg-pink-200 sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-coral-red">
          <img src={imgURL.thumbnail} alt="bikes" className="object-contain"/>
        </div>
    // </div>
  )
}

export default BikeCard