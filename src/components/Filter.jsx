import React from 'react';

const Filter = ({handleChange}) => {
    const handleInputChange = (event) => {
        event.preventDefault();
        handleChange(event.target.value);
    };

    return (
        <div className="filter">
            <div className="container">
                <input
                    onChange={handleInputChange}
                    placeholder="filter by name"
                    data-testid="input-filter"
                />
            </div>
        </div>
    )
}

export default Filter;