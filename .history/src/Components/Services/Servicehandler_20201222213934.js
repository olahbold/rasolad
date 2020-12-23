import React from 'react'
import data from '../data'
import Services from './Services'
export default function Servicehandler() {
    const datas = data.map((item)  => {
        <Services  title = {item.title}   content = {item.}/>
    })
    return (
        <div>
            {datas}
        </div>
    )
}























