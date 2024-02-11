import React from 'react';
import Card from './Card';
//import {robots} from './Robot'; --this too would work like passing robots as prop 
const CardList = ({ robots }) => {
    const CardArray = robots.map(
        (friend, i) => {
            return (<Card
                key={robots[i].id}
                id={robots[i].id}
                name={robots[i].name}
                username={robots[i].username}
                email={robots[i].email}
            />)
        });

        // if(true) {
        //     throw new Error('Noooooo!');
        // }
    return (
        <div>
            {CardArray}
        </div>
    );
}

export default CardList;