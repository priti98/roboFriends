import React from 'react';
import './SearchBox.css';

const SaerchBox = ({searchField, searchChange}) => {
    return (
        <div className='center'>
        <input className='style' type='search' placeholder='search Robots'
        onChange={searchChange}
        />
        </div>
    );
}

export default SaerchBox;