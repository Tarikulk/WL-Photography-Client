import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData();
    return (
       <div>
         <div className='mt-10'>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
  <figure><img src={details.img} className='w-full' style={{height:"300px"}} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex justify-between items-center'>
   <h2 className="card-title">Name: {details.name}</h2>
    <h2 className="card-title">Ratings: ${details.ratings}</h2>
    <h2 className="card-title">Price: ${details.price}</h2>
   </div>
    <p>{details.description}</p>
 
  </div>
</div>
        </div>
        <section className="p-6 dark:bg-green-600 dark:text-gray-50 rounded-lg">
	<form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="p-6 rounded-md shadow-sm dark:bg-green-700">
        <div className="space-y-2 w-full flex items-center justify-center">
				<div>
                <p className="font-medium text-center">Reviews</p>
				<p className="text-xs text-center">Reviews Of This Work. Put Your Review</p>
                </div>
			</div> 
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-green-700">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">ALL REVIEWS</p>
				<p className="text-xs">Help Us By Giving Your Valuable Review.</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">    
				<div className="col-span-full sm:col-span-3">
					<label for="name" className="text-sm">Username</label>
					<input id="name" type="text" placeholder="name" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="text" placeholder="email" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="image" className="text-sm">Image</label>
					<input id="image" type="text" placeholder="image" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="servicesId" className="text-sm">Services id</label>
					<input id="servicesId" type="text" placeholder="services Id" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Bio</label>
					<textarea id="bio" placeholder="" className="p-2 w-full h-32 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<div className="flex items-center justify-center">
						<button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Add Review</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>
       </div>
    );
};

export default ServiceDetails;