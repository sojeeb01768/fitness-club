import React, { useEffect, useState } from 'react';
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

            <div className="exercise-card-container">

                {

                    exercises.map(exercise => <Exercise
                        key={exercise.id}
                        exercise={exercise}
                        handleClick={handleClick}
                    ></Exercise>)


                }

            </div>
            <div className="profile-container  text-center p-4 rounded">
                <Cart profile={profile}></Cart>
            </div>
            <div className=' mx-auto my-5 ms-5 border border-dark rounded border-2 p-3'>
                <h1>Questions</h1>
                <h4>1. how does react works ?</h4>
                <p>Answer: React is a declarative, efficient, and flexible JavaScript library for building user interfaces. 'V' denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.</p>
                <h4>2. Difference between props and state.</h4>
                <p>Answer: <br />
                    PROPS:- <br />
                    -The Data is passed from one component to another. <br />
                    -It is Immutable (cannot be modified). <br />
                    -Props can be used with state and functional components. <br />
                    -Props are read-only. <br />
                    STATE:- <br />
                    -The Data is passed within the component only. <br />
                    -	It is Mutable ( can be modified). <br />
                    -State can be used only with the state components/class component (Before 16.0). <br />
                    -	State is both read and write.
                </p>
                <h4>3. What is the use of use effect ?</h4>
                <p>
                    Answer: <br />
                    The useEffect Hook allows you to perform side effects in your components.
                    Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                    useEffect accepts two arguments. The second argument is optional.
                    </p>
                    </div>
            </div>
            )
};

            export default Body;

