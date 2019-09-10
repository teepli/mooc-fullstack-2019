import React from 'react'
import Course from './Course'
export default function Courses({courses}) {
    return (
        <div>
            {courses.map(cs => {
                return <Course course={cs} name={cs.name} key={cs.name} />;
            })}
        </div>
    )
}
