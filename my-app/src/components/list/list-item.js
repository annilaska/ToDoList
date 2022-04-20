import React from 'react';
import {useState} from 'react'



export default function ListItem(props) {
    const {completed, content} = props
    const [isCompleted, setIsCompleted] = useState(completed)


    function onChange() {
        setIsCompleted(isCompleted => {
                return !isCompleted
            })
    }

    return (
        <li>
            <input type="checkbox" checked={isCompleted} onChange={onChange}></input>
            {isCompleted ? (
                <del>{content}</del>
            ) : (
                <span>{content}</span>
            )
            }
        </li>
    )
}