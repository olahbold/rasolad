import React from 'react'
import data from '../data'
import Services from './Services'

export default function Servicehandler() {
    const [datas, setdatas] = useState('')
 const Serving =  data.map(datas=> 

<Services key = {datas.id} title={datas.title} content = {datas.content}  /> 
)

 const onclickhandler () => {}




return(

<div>

{Serving}

</div>

)
  
  
  
  
    
}
