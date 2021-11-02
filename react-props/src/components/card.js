import React from "react";
//Props--Properties--> Used to pass data
//props are like buleprint or blanks to insert data

function Card(props) {
  //console.log(props);
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{"Phone:- " + props.phone}</p>
      <p>{"Email:- " + props.email}</p>
    </div>
  );
}

export default Card;
