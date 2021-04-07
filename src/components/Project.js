
import React from "react";
import {Image} from "semantic-ui-react"

export default function Project ({title,imgSrc}){
    return(
        <div>
            <div>{title}</div>
            <Image src={imgSrc}/>
        </div>
    )

}
  