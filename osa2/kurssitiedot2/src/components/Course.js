import React from 'react'
import Header from './Header'
import Content from './Content'

export default function Course(props) {
    const total = props.course.parts.reduce((s, p) => {
        return {exercises: s.exercises + p.exercises}
    })
    console.log(total)

    return (
        <div>
            <Header header={props.course.name}/>
            <Content {...props} />
            <p>Total of {total.exercises} exercises</p>
        </div>
    )
}
