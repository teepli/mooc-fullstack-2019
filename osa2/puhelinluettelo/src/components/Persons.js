import React from "react";

export default function Persons({filter, persons}) {
  return (
    <div>
      <ul>
        {filter.length === 0
          ? persons.map(p => {
              return (
                <li key={p.name}>
                  {p.name} {p.number}
                </li>
              );
            })
          : persons
              .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
              .map(p => {
                return (
                  <li key={p.name}>
                    {p.name} {p.number}
                  </li>
                );
              })}
        
      </ul>
    </div>
  );
}
