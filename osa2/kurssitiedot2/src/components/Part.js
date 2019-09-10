import React from 'react'

export default function Part(props) {
    const { name, exercises } = props.course;
    return (
      <div>
            <li> {name} {" "} {exercises}</li>
      </div>
    );
}
