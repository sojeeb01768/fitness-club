import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import Exercise from '../Exercise/Exercise';
import './Body.css';

const Body = () => {
    const [exercises, setExercises] = useState([]);
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('fakeDB.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleClick = (exercise) => {
        console.log(exercise);

        const newProfile = [...profile, exercise];
        setProfile(newProfile);
    }

    return (
        <div className="body-container">

            <div className="exercise-card-container ">

                {

                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handleClick={handleClick}
                    ></Exercise>)


                }

            </div>
            <div className="profile-container text-center p-4 rounded">
                <Cart profile={profile}></Cart>
            </div>
            <Blog></Blog>
        </div>
    )
};

export default Body;

