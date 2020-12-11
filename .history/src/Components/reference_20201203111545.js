import React from 'react'
import Services from './Services'
import data from './data'




  const helper =  ()  => {data.map (datas => {
        <Services  title = { console.log(datas.title)}  content = {console.log(datas.content)} />
      })}
