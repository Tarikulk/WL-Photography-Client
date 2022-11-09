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
    }, [])

    return (
        <div>
            {
               myReview.map(reviews => <MyReviewTable
               key={reviews._id}
               reviews={reviews}
               ></MyReviewTable>)
            }
        </div>
    );
};

export default MyReview;