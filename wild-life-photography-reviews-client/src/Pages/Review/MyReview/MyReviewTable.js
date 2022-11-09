import React from 'react';

const MyReviewTable = ({reviews}) => {
    const {name, email, review} = reviews;
    return (
        <div>
            <div className="card w-96 bg-green-400   text-black">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{review}</p>
    <div className="card-actions flex justify-between items-center w-full">
      <button className="btn btn-primary">Edit</button>
      <button className="btn btn-ghost">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyReviewTable;