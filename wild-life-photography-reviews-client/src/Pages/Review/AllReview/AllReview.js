import React from 'react';

const AllReview = ({allReview}) => {
    const {email, image, name, servicesId, review} = allReview;
    return (
            <tr> 
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
        </td>
        <td>{review}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Edit</button>
        </th>
      </tr> 
    );
};

export default AllReview;