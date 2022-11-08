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
<section className="my-8">
	<div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
		<h1 className="text-4xl font-semibold leading-none text-center">What our reviewers are saying about us</h1>
	</div>
	<div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
		<div className="flex flex-col items-center mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-3 text-lg italic"><Link to="/" className='text-pink-700'>WL-Photography</Link> an amazing site for wildlife photographers. They can share their work and get enough publicity and reviews from here.We highly appreciate all of your works. Best wishes for all of you guys</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p>OBayedullah Khan</p>
		</div>
		<div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
			<div className="relative text-center">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
					<path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
				</svg>
				<p className="px-6 py-3 text-lg italic">From here i found that the nature of beauty is amazing and these all of beauty is captured by those wildlife photographerEspecially the wildlife photography that they have risked their lives for has been amazingly beautiful.</p>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
					<path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
					<path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
				</svg>
			</div>
			<span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
			<p>Sumaya Patwary</p>
		</div>
	</div>
</section>
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