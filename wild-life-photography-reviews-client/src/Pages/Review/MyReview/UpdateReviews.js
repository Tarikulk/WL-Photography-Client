import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../Shared/Hooks/useTitle';

const UpdateReviews = ({handleDeleteReview}) => {

    useTitle("Edit")
  
    const StoredReviews = useLoaderData()
    const navigate = useNavigate();
      
    const handleUpdateReview = (event) =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const review = form.review.value;

        const allReview = { 
            name, 
            review,
        }  

        fetch(`https://wild-life-photography-reviews-server.vercel.app/updateReviews/${StoredReviews._id}`, {
            method: "PUT",
            headers:{
                "content-type" : "application/json"
            },
            body: JSON.stringify(allReview)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast("user review updated successfully", {autoClose: 1000})
                form.reset();
                navigate("/myReviews")
            }
        })
        
        console.log(allReview)

    }
 
    return (
        <div> 
<form onSubmit={handleUpdateReview} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="p-6 rounded-md shadow-sm dark:bg-green-700 mt-10">
        <div className="space-y-2 w-full flex items-center justify-center">
				<div>
                <p className="font-medium text-center">Reviews</p>
				<p className="text-xs text-center">Reviews Of This Work. Put Your Review</p>
                </div>
			</div> 
		</fieldset>
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-green-700"> 
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-6">    
				<div className="col-span-full sm:col-span-6">
					<label for="name" className="text-sm">Username</label>
					<input defaultValue={StoredReviews.name}  id="name" type="text" placeholder="name" name='name' className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div> 
				<div className="col-span-full">
					<label for="bio" className="text-sm">Review</label>
					<textarea defaultValue={StoredReviews.review} id="bio" placeholder="" name='review' className="p-2 w-full h-32 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<div className="flex items-center justify-center">
						<button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Add Review</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
           <ToastContainer position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        ></ToastContainer>
        </div>
    );
};

export default UpdateReviews;