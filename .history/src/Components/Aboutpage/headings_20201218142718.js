import React from 'react'
import ''

export default function headings(props) {
    return (
        <div>
            <div  className = 'position-relative'>
    <img
    src = "Pictures/backgroundsPic.jpg"
    alt = "Profile Pics"
    className = 'Topheading_css position-relative'
    />
    <h1 className = '  title_text  position-absolute'>{props.title} </h1>
    </div>
        </div>
    )
}
