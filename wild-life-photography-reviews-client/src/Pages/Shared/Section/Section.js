import React from 'react';
import critters1 from "../../../Assets/critters1.webp"
import deer1 from "../../../Assets/deer1.webp"
import elephant1 from "../../../Assets/elephant1.jpeg"
import panda1 from "../../../Assets/panda1.png"
import photographer1 from "../../../Assets/photographer1.jpg"
import snake1 from "../../../Assets/snake1.webp"
import tiger1 from "../../../Assets/tiger1.jpg"
import tiger2 from "../../../Assets/tiger2.jpeg"
import animal1 from "../../../Assets/animal1.webp"
import bear1 from "../../../Assets/bear1.jpg"
import { Link } from 'react-router-dom';
 

const Section = () => {
    return (
        <div>

<div className='mt-10'>
        <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900 rounded-lg">
 <div className="container mx-auto">
     <div className="flex flex-col lg:flex-row items-center justify-between">
         <h2 className="text-center text-6xl tracking-tighter font-bold">WL-<br className="sm:hidden text-pink-500" />Photography
         </h2>
         <div className="space-x-2 text-center py-2 lg:py-0 font-bold">
          See Our Recent Photography Below 
         </div>
         <Link to="services" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Reviews</Link>
     </div>
 </div>
</div>
     </div>

            <div className='mt-10'>
            <section className="py-6 dark:bg-violet-400 dark:dark:text-gray-50 rounded-lg">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src={critters1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src= {deer1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src={elephant1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src={panda1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src={photographer1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src={snake1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src={tiger1} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src={tiger2} />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:dark:bg-gray-500 aspect-square" src={animal1} />
		<img src={bear1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:dark:bg-gray-500 aspect-square" />
	</div>
</section>
        </div>
        </div>
    );
};

export default Section;