import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../Shared/Hooks/useTitle';

const AddServices = () => {

	useTitle("Add Services")

    const handleAddServices = (event) =>{
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const price = form.price.value;
       const ratings = form.ratings.value;
       const image = form.image.value;
       const description = form.description.value;


       const addServices = {
        name, price, ratings, image, description
       };

       fetch("http://localhost:5000/allServices", {
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(addServices)
       })
      .then(res => res.json())
      .then(data => {
         if(data.acknowledged){
            toast("services added successfully", {autoClose: 2000})
            form.reset();
         }
      })
      .catch(error => console.error(error))
    }

    return (
        <div>
              <section className="p-6 dark:bg-gray-800 dark:text-gray-50 rounded-lg mt-20">
	<form onSubmit={handleAddServices} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
 
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-green-600">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Add Services</p>
				<p className="text-xs">Add Your Personal Work !</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label for="name" className="text-sm">Name</label>
					<input id="name" type="text" placeholder="name" className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="price" className="text-sm">Price</label>
					<input id="price" type="text" placeholder="price" name='price' className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div> 
				<div className="col-span-full sm:col-span-3">
					<label for="ratings" className="text-sm">Ratings</label>
					<input id="ratings" type="text" placeholder="ratings" name='ratings' className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label for="image" className="text-sm">Image</label> 
                    <input type="text" placeholder="Upload Image" name='image' className="p-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" /> 
				</div>
				<div className="col-span-full">
					<label for="bio" className="text-sm">Description</label>
					<textarea id="bio"  name='description' className="w-full h-40 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"></textarea>
				</div>
				<div className="col-span-full">
					<div className="flex items-center justify-center space-x-2"> 
						<button type="submit" className="px-4 py-2 border rounded-md dark:border-gray-100">Add Services</button>
					</div>
				</div>
			</div>
		</fieldset>
	</form>
</section>
<ToastContainer></ToastContainer>
        </div>
    );
};

export default AddServices;