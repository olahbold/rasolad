import React from 'react'
import Services from './Services'
import data from './data'


export default function reference() {

  const helper =     ()  => {data.map (datas => {
        <Services  title = { console.log(datas.title)}  content = {console.log(datas.content)} />
      })



    return (
        
        helper
        
    )
}
