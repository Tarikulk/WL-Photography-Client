import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../Contexts/AuthProvider';
import useTitle from '../../Shared/Hooks/useTitle';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {

    useTitle("My Review")

    const {user, userLogout} = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    useEffect(() =>{
        fetch(`https://wild-life-photography-reviews-server.vercel.app/reviews?email=${user?.email}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem("wl-photography")}`
            }
        })
        .then(res => { 
           if(res.status === 401 || res.status === 403){
            return userLogout();
           }    
           return res.json()
        })
        .then(data => {
             setMyReview(data)
        })
        .catch(error => console.error(error))

    }, [user?.email, userLogout])

  
    const handleDeleteReview = (id) =>{
        const proceed = window.confirm("Are you sure, you want to delete this item ?")
        if(proceed){
            fetch(`https://wild-life-photography-reviews-server.vercel.app/reviews/${id}`, {
               method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    toast.success("deleted successfully", {autoClose: 2000})
                    const remaining = myReview.filter( review => review._id !== id);
                    setMyReview(remaining);
                }
            })
        }
    }

    return ( 
           <div>
            {  myReview.length > 0 ?
              <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 '>
                {
                     myReview?.map(reviews => <MyReviewTable
                        key={reviews._id}
                        reviews={reviews}
                        handleDeleteReview={handleDeleteReview}
                        ></MyReviewTable>)
                }
              </div>
               :
                <h1 className='text-3xl w-full h-96 flex items-center justify-center'>No reviews were added</h1>
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyReview;