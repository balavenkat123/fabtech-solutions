import { star } from "../assets/icons"

const ProductCard = ({imgURL,name,price}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
        <img src={imgURL} alt={name} className="w-[280px] h-[280px] bg-sky-200 hover:bg-sky-300 rounded-2xl border-1"/>
        <div className="mt-8 flex justify-start gap-4">
           5 <img src={star} alt="rating" width={24} height={24}/>
        </div>
        <h3 className="text-2xl mt-2 font-semibold font-palanquin">{name}</h3>
        <h3 className="text-xl text-red-500">{price}</h3>
    </div>

  )
}

export default ProductCard