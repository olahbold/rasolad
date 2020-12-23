import React from 'react'
import data from '../data'
import Services from './Services'
export default function Servicehandler() {
    
  con  data.map((item)  => {
        <Services  key = {item.id} title = {item.title}   content = {item.content}/>
    })
    return (
        <div>
            {console.log(datas)}
        </div>
    )
}























