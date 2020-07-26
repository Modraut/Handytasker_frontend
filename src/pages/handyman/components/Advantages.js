import React from 'react';

import './Advantages.scss';
import pic_1 from "../pic/advantages-1.png";
import pic_2 from "../pic/advantages-2.png";
import pic_3 from "../pic/advantages-3.png";
import pic_4 from "../pic/advantages-4.png";
import pic_5 from "../pic/advantages-5.png";

export const Advantages = () => {
    const arr = [
        {
            pic: pic_1,
            content: "Up to 50% cheaper than franchise dealers"
        },
        {
            pic: pic_2,
            content: "No job too big or too small"
        },
        {
            pic: pic_3,
            content: "Free insurance coverage"
        },
        {
            pic: pic_4,
            content: "Secure cashless payments"
        },
        {
            pic: pic_5,
            content: "Same day / next day service available"
        },
    ]
    return(
        <div className="advantages">
            <ul className="advantages_container">
                {
                    arr.map((item)=>(
                        <li>
                            <img src={item.pic} alt="missing"/>
                            <p>{item.content}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}