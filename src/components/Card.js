import React from "react";


const Card = (props) => {
    const {name, email, id} = props;
    return (
     <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img alt="robots" src={`https://robohash.org/${id}?200X200`} />
        <div>
          <h2>{name}</h2>
          <h1>{email}</h1>
        </div>
    </div>
    );
}

export default Card;