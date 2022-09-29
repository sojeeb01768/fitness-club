import React, { useState } from 'react';
import logo from '../../image/logo.png'
import './Cart.css';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const notify = () => {
    toast.info("Exercise Completed Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

    })
}
const Cart = (props) => {
    const { profile } = props;
    // console.log(profile);
    let totalBreakTime = 0;
    for (const exercise of profile) {
        totalBreakTime = totalBreakTime + exercise.time;
    }

    const [breaks, setBreak] = useState(0);
    const breakTime = (breaks) => {
        setBreak(breaks);
        // addToLocalStorage(breaks); 
    }


    return (
        <div className='cart pt-5'>
            <p>Selected Items: {profile.length}</p>
            <div className='d-inline-flex gap-2'>
                <img className='logo' src={logo} alt="" />
                <h4 className='pt-3'>Md. Sojeeb Islam</h4>
            </div>
            <p className='ps-5'>Dhaka, Bangladesh</p>
            <div className='d-flex bg-light rounded-3 py-2 ps-2 '>
                <div className='px-3 border border-white  '>
                    <h5>75kg <br /><small className='text'>Weight</small></h5>
                </div>
                <div className='px-3 border border-white '>
                    <h5>5.9 <br /><small className='text'>Height</small></h5>
                </div>
                <div className='px-3 border border-white '>
                    <h5>25 <span className='text'>Years</span><br /><small className='text'>Age</small></h5>
                </div>
            </div>

            <h4 className='my-4'>Add a Break</h4>
            <div className='minutes  d-flex border border-white rounded-3  bg-light'>
                <button onClick={() => breakTime(2)} className='m-1 px-2 py-1 border-0 rounded-5'>2m</button>
                <button onClick={() => breakTime(3)} className='m-1 px-2 py-1 border-0 rounded-5'>3m</button>
                <button onClick={() => breakTime(4)} className='m-1 px-2 py-1 border-0 rounded-5'>4m</button>
                <button onClick={() => breakTime(5)} className='m-1 px-2 py-1 border-0 rounded-5'>5m</button>
                <button onClick={() => breakTime(6)} className='m-1 px-2 py-1 border-0 rounded-5'>6m</button>
            </div>
            <div className='my-5 '>
                <h4 >Exercise Details</h4>
                <p className='my-4 py-4 border border-white bg-light rounded-4'>Exercise Time: {totalBreakTime} m</p>
                <p className='my-4 py-4 border border-white bg-light rounded-4'>Break Time: {breaks} m</p>
            </div>
            <div>
                <button onClick={notify} className='py-2 mb-4 w-100 border-0 rounded-2 bg-primary text-white fs-4'>Activity Completed</button>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;