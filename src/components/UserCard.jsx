import React from "react";

function UserCard({user}) {
  const {firstName, lastName, photoURL} = user;
  // console.log(user);
  
  return (
    <div className="card bg-base-100 w-full max-w-sm shadow-md">
      <figure className="w-full h-60 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={photoURL}
          alt="image"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName} {lastName}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="flex items-center justify-between px-5">
          <div className="card-actions justify-end">
            <button className="btn bg-red-500">Ignore</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-green-500">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
