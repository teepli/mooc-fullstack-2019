import React from 'react'
import Part from './Part'

export default function Content(props) {
    console.log(props)
    return (
        <div>
            <ul>
                {props.course.parts.map(c => {
                    return <Part key={c.id} course={c}/>
                })}
            </ul>
        </div>
    )
}
