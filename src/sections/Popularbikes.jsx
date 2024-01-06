import ProductCard from "../components/ProductCard"
import { products } from "../constants"

const Popularbikes = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="sm:text-6xl text-4xl font-bold"><span className="text-sky-500">Popular</span>  Courses</h1>
        <p className="lg:max-w-lg mt-2 font-montserrat">here are some Tech courses which can be provided</p>
      </div>
      <div className=" mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 sm:gap-4 gap-14 sm:items-center justify-center">
        {products.map((product)=>(
          <ProductCard key={product.name} {...product}/>
        ))}
      </div>
      <br className="font-bold block bg-black "/>
    </section>
  )
}

export default Popularbikes