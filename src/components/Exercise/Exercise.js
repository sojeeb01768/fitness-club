import React from 'react';

const Exercise = (props) => {
    const { exercise, handleClick } = props;
    const { id, name, age, img, time, description } = exercise;
    return (
        <div className="">
            <div className="card" style={{ width: "18rem" }}>
                <img src={img} className=" card-img-top p-2" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Description:   {description}</p>
                    <p className="card-text">For Age: {age}</p>
                    <p className="card-text">Time Required: {time} m</p>
                    <button onClick={() => handleClick(exercise)} className="btn btn-primary w-100">Add to list</button>

                </div>
            </div>

        </div>
    );
};

export default Exercise;