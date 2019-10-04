import React from 'react'

export default function FilterForm({handleFilter, filter}) {
    return (
      <div>
        <div>
          Find countries: <input value={filter} onChange={handleFilter} />
        </div>
      </div>
    );
}
