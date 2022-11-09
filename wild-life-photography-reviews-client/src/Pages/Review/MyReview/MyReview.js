import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {
    const {user} = useContext(AuthContext);
    const [myReview, setMyReview] = useState([]);
    useEffect(() =>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
             setMyReview(data)
        })
    }, [user?.email])

    const handleUpdateReview = (id) =>{
        fetch(`http://localhost:5000/reviews/${id}`, {
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }

    const handleDeleteReview = (id) =>{
        const proceed = window.confirm("Are you sure, you want to delete this item ?")
        if(proceed){
            fetch(`http://localhost:5000/reviews/${id}`, {
               method:"DELETE"
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    alert("deleted successfully")
                    const remaining = myReview.filter( review => review._id !== id);
                    setMyReview(remaining);
                }
            })
        }
    }

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               myReview.map(reviews => <MyReviewTable
               key={reviews._id}
               reviews={reviews}
               handleDeleteReview={handleDeleteReview}
               handleUpdateReview={handleUpdateReview}
               ></MyReviewTable>)
            }
        </div>
    );
};

export default MyReview;