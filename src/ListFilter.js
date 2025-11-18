import React, { useState } from 'react';

function ListFilter({ data, render }) {
    const [filter, setFilter] = useState('');

    const filteredData = data.filter(item =>
        item.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Filtrer..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            {render(filteredData)}
        </div>
    );
}

export default ListFilter;