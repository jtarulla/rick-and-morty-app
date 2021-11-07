import React from 'react';

const Filter = ({handleChange}) => {
    const handleInputChange = (event) => {
        const newEvent = event.target.value;
        handleChange(newEvent);
    };

    return (
        <div className="filter">
            <div className="container">
                <input
                    onChange={handleInputChange}
                    placeholder="filter by name"
                />
            </div>
        </div>
    )
}

export default Filter;