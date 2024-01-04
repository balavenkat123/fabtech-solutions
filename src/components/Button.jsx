const Button = ({lable,iconURL}) => {
  return (
    <div>
      <a href="https://wa.me/917993872479?text= hello fabtech....">
    <button className='btn border-2 border-pink-300 bg-indigo-100 rounded-full mt-5 
    flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-xl text-black font-bold hover:animate-bounce'>
        {lable}
        <img src={iconURL} alt="arrow bro" className='h-5 w-5 ml-2 rounded-full'/>
    </button>
    </a>
    </div>
  )
}

export default Button