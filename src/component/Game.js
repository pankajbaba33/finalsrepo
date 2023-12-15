import React, { useEffect, useState } from "react";
import { gameOne } from "../Images";
import { gameTwo } from "../Images";
export default function Game()
{
    const [cardOne,setCardOne]=useState([])
    const [cardTwo,setCardTwo]=useState([])
   useEffect(()=>{
        setCardOne(gameOne)
        setCardTwo(cardTwo);
   },[])
    return(
        <>
          <div class="grid-container">
            <div className="container">
                {
                    cardOne.map((items,index)=>{
                        return(
                            <>
                            <div className="card" key={index}>
                                {items}
                            </div>
                            </>
                        )
                    })
                }
  </div>
</div>
        </>
    )
}