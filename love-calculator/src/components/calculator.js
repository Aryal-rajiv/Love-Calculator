import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";



function Calculator()
{

    const [fname, setfname] = useState("")
    const [sname, setsname] = useState("")
    // For first input


    return( 
           
        {
            /* Custom Title */

       <h1 className="pt-2 mx-auto text-center  max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
          Calculate{' '}
          <span className="relative whitespace-nowrap text-pink-600">
           <svg
               aria-hidden="true"
               viewBox="0 0 418 42"
               className="absolute top-2/3 left-0 h-[0.58em] w-full fill-pink-300/70"
               preserveAspectRatio="none"
           >
               <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
           </svg>
           <span className="relative">Love</span>
           </span>{' '}
           compatibility
       </h1>
   }
   {/* First Input field */
   

   <div className="flex flex-col">
   <label htmlFor="fname" className="text-gray-700  text-xl font-bold leading-tight tracking-normal mb-2">
       Your Name
   </label>
   <input id="fname" className="text-gray-600  focus:outline-none focus:border focus:border-pink-500 font-normal w-64 bg-white  h-10 flex items-center pl-3 text-sm border-gray-300  rounded border shadow" placeholder="Enter your name" />
</div>
{
<div className='w-full flex flex-col items-center justify-center mx-auto mt-5'>
<FaHeart className="text-[#E90606] custom-css-pound w-10 h-10" />
</div>
}
{/* Second Input Field */
<div className="flex flex-col">
   <label htmlFor="lname" className="text-gray-600  text-xl font-bold leading-tight tracking-normal mb-2">
       Partner's Name
   </label>
   <input id="lname" className="text-gray-700  focus:outline-none focus:border focus:border-pink-500 font-normal w-64 bg-white  h-10 flex items-center pl-3 text-sm border-gray-300  rounded border shadow" placeholder="Enter your beloved one's name" />
</div>
  {/* Button */
  <div className='flex  justify-center items-center pt-6'>
  <button onClick={calculate} type="button" className="text-white flex items-center bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
      <svg fill='white' className='text-white' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" /></svg>
      <span className='ml-2 font-semibold'>Calculate %</span>
  </button>

</div>


}}
    )
}

    // Utility function to capitalize first character of Name

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


export default Calculator