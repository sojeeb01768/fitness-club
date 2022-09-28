import React from 'react';
import './Cart.css';

const Cart = ({ profile }) => {
    return (
        <div className='cart pt-5'>
            <h4>My Profile</h4>
            <p>Selected Items: {profile.length}</p>
            <h4 className='my-5'>Add a Breakpoint</h4>
            <div className='d-flex border border-white rounded-3  bg-light'>
                <button className='m-1 px-2 py-1 border-0 rounded-5'>20s</button>
                <button className='m-1 px-2 py-1 border-0 rounded-5'>30s</button>
                <button className='m-1 px-2 py-1 border-0 rounded-5'>40s</button>
                <button className='m-1 px-2 py-1 border-0 rounded-5'>50s</button>
                <button className='m-1 px-2 py-1 border-0 rounded-5'>60s</button>
            </div>
            <div className='my-5 '>
                <h4 >Exercise Details</h4>
                <p className='my-4 py-4 border border-white bg-light rounded-4'>Exercise Time: </p>
                <p className='my-4 py-4 border border-white bg-light rounded-4'>Break Time: </p>
            </div>
            <div>
                <button className=' py-3 w-100 border-0 rounded-2 bg-primary text-white fs-4'>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;