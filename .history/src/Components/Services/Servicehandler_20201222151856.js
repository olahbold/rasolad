import React from 'react'
import data from '../data'
import Services from './Services'

export default function Servicehandler() {
    data.map(datas=> <div> 

<Services ke title={datas.title} content = {datas.content}  /> 



    </div>)



  
  
  
  
    
}
