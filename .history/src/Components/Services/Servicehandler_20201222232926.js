import React from 'react'
import data from '../data'
import Services from './Services'




export default function Servicehandler() {
    
  const datas =  data.map((item)  => {
     <   <Services item ={item}/>
    })
    return (
        <div>
            {console.log(datas)}
        </div>
    )
}























