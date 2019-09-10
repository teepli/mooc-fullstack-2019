import React from 'react'

export default function FilterForm({filter, handleFilter}) {
    return (
      <div>
        <div>
          Filter shown with: <input value={filter} onChange={handleFilter} />
        </div>
      </div>
    );
}
