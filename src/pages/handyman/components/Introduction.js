import React from 'react';
// import ReactPlayer from "react-player";
// import Modal from "react-responsive-modal";

import './Introduction.scss';
import pic_1 from "../pic/introduction-1.png";
import pic_2 from "../pic/introduction-2.png";
import pic_3 from "../pic/introduction-3.png";


class Introduction extends React.Component {
    constructor(){
        super();
        this.state={
            videoOpen: false
        }
        this.onOpenModal = this.onOpenModal.bind(this);
    }
    onOpenModal = () => {
        this.setState(prevState => ({
            videoOpen: !prevState.videoOpen
            }));
        };
    render(){
        const arr = [
            {
                pic: pic_1,
                topic: "Post your task",
                content: "Tell us what you need, it's FREE to post."
            },
            {
                pic: pic_2,
                topic: "Review offers",
                content: "Get offers from trusted Taskers and view profiles."
            },
            {
                pic: pic_3,
                topic: "Get it done",
                content: "Choose the right person for your task and get it done."
            }
        ]
        return(
            <div className="introduction">
                <div className="introduction_container">
                    <h4>What is Airtasker?</h4>
                    <button className="introduction_container_video" onClick={this.onOpenModal}>Watch Video</button>
                    <ul className="introduction_container_steps">
                        {
                            arr.map((item)=>(
                                <li>
                                    <img src={item.pic} alt="missing"/>
                                    <h3>{item.topic}</h3>
                                    <p>{item.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Introduction;