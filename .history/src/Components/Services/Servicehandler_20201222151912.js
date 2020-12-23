import React from 'react'
import data from '../data'
import Services from './Services'

export default function Servicehandler() {
    data.map(datas=> <div> 

<Services key = {datas.id} title={datas.title} content = {datas.content}  /> 



    </div>)



  
  
  
  
    
}
