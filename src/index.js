import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="custom-size" src={props.img} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.wordpress.com/wp-content/uploads/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Rakib"
      img="https://avatars.githubusercontent.com/u/134124152?v=4"
      tel="+123 876 543"
      email="rakib@google.com"
    />
  </div>,
  document.getElementById("root")
);
