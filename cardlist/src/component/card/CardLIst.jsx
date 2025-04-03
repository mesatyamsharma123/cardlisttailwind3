import React from 'react'
import pic from '../../../public/pics.avif'
function CardLIst() {
  return (
    <div className='flex flex-col md:flex-row md:m-0 md:p-6 m-3 space-y-6 md:space-y-0 md:space-x-10 p-3 rounded-2xl shadow-2xl dark:shadow-white dark:text-white' >
     <div className='flex flex-col md:flex-row items-center justify-center'>
        <img className='object-fit  dark:border-4 md:w-60 rounded-2xl hover:scale-105 duration-800'  src={pic}></img>
     </div>
     <div className='flex flex-col space-y-3  '>
   
        <div className='flex flex-col mb-2 space-y-3 text-center md:text-left'>
        <div>
            <div className='inline-block  rounded-full text-white bg-black px-3 py-1  dark:bg-slate-500 '>Free shipping</div>
        </div>
        </div>
        {/* // Product name */}
        <div className='flex text-center  mt-3  md:text-left flex-col text-3xl md:text-3xl'>
        Full Stack Software Developer Course <span className='text-lg ' > (Published by Satyam Sharma)</span>

        </div>
        {/* Price value */}

        <div className='flex text-center flex-col text-sm'>
        <div className='line-through'>$799</div>
        <div className=''>
            <p className='text-2xl md:text-4xl'>$399</p>
            <p className='text-sm text-red-500'>The order is valid until April 3 as long as stock lasts!</p>
        </div>

        </div>
        {/* butoon Add toc art */}
        <div className='mt-2 hover:scale-80 duration-700 bg-blue-700 rounded-xl p-3 text-white  text-center dark:bg-green-600'>
<p> Add to cart</p>
        </div>
        <div className='mt-2 flex space-x-2 '>
<div className='rounded-4xl h-6 w-6 bg-yellow-200 duration-500 hover:bg-green-500 '></div>
<div className='font-bold'> 50+ pcs in stock</div>
        </div>
        <div className='flex justify-between   text-center  md:justify-between md:flex-row '>
            <p className=' p-2 border-3 border-zinc-400 rounded-2xl hover:scale-80 duration-500'> Add to favorite</p>
            <p className='p-2 border-3 border-zinc-400 rounded-2xl hover:scale-90 duration-500'> Add to wishlist</p>
        </div>
     </div>
    </div>
  )
}

export default CardLIst
