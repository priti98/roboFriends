import React, { Component } from 'react';
import './Card.css';
//import { robots } from './Robot';
class Card extends Component {
    render()  {
        const {id, name, email} =this.props;
        return (
            <div className='basic'>
                <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

// function Card() {
//     return (
//         <div>
//             <p>Q. What is React?</p>
//             <p>A. A JavaScript library for building user interfaces</p>
//             <p>Q. How do I render sibling elements?</p>
//             <p>A. Use Fragments</p>
//         </div>
//     );
// }
export default Card;

/*

const Card = () => {
    return {
        <>
        <div>
            <img src="" alt="" />
            <div>
                <h2>Jane Doe</h2>
                <p>jane.doe@gmail.com</p>
            </div>
        </div>
        </>
    };
}

import React, { Component } from 'react'; */