import React from "react";

function UserCard({user}) {
  if(!user) return null;
  const {firstName, lastName, photoURL, about} = user;

  // console.log(about);
  
  
  return (
    <div className="card bg-base-300 w-full max-w-sm shadow-md">
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
          {about}
        </p>
        <div className="flex items-center justify-between px-5">
          <div className="card-actions justify-end">
            <button className="btn bg-indigo-600">Ignore</button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn bg-pink-500">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
