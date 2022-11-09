import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AllReview from '../../Review/AllReview/AllReview';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const details = useLoaderData();

    const handleAddReview = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const servicesId = form.servicesId.value;
        const image = form.image.value;
        const review = form.review.value;
        console.log(name, email, servicesId, image, review)

        const allReview = { 
            name, 
            email,
            servicesId,
            image,
            review
        }

        fetch("http://localhost:5000/reviews", {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(allReview)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            form.reset();
        })

    }

    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

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
       

      {/* Review Section  */}
        <div className='my-20'> 
        </div>
       <div  className='mt-30 shadow-2xl rounded-lg'>
       <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr> 
        <th>User</th>
        <th>Email</th>
        <th>Review</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        reviews.map(allReview => <AllReview
        key={allReview._id}
        allReview={allReview}
        ></AllReview>)
      }
    </tbody> 
  </table>
</div> 
       </div>
       <div className='mt-10'></div>
       
        </div>
        <section className="p-6 dark:bg-green-600 dark:text-gray-50 rounded-lg">
	<form onSubmit={handleAddReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
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
					<input id="name" type="text" placeholder="name" name='name' className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="text" placeholder="email" name='email' defaultValue={user?.email} className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="image" className="text-sm">Image</label>
					<input id="image" type="text" placeholder="image" name='image' className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="servicesId" className="text-sm">Services id</label>
					<input id="servicesId" type="text" placeholder="services Id" name='servicesId' defaultValue={details?._id} className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Review</label>
					<textarea id="bio" placeholder="" name='review' className="p-2 w-full h-32 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
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