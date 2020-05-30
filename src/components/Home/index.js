import React from 'react';

import Card from '../Card'
import { data } from '../Data'


const Home = () =>{


  return(
    <div className="home-container">
      {
        data.map(item=>{
        return  <Card key={item.id} info={item} />
        })
      }
    </div>
  )
}

export default Home
