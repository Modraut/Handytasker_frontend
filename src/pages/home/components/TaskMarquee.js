import React from 'react';
// import ReactPlayer from "react-player";
// import Modal from "react-responsive-modal";
import { Link } from 'react-router-dom';

import './TaskMarquee.scss';

class TaskMarquee extends React.Component {
    constructor(){
        super();
        this.state={
            type_selected: "Moving home",

        }
        this.handleTypeSelected = this.handleTypeSelected.bind(this)
    }
    star = ()=> (
        <svg height="16" width="16" class="life_moments_task__TaskStar-sc-153tdrc-7 duHJxS" viewBox="0 0 24 24"><path fill="#E9A582" d="M16.2 8.16l4.74.73a1.23 1.23 0 0 1 .67 2.11l-3.46 3.28a1.23 1.23 0 0 0-.37 1.1l.77 4.68a1.24 1.24 0 0 1-1.82 1.29L12.5 19.1a1.28 1.28 0 0 0-1.16 0l-4.27 2.17A1.25 1.25 0 0 1 5.27 20l.85-4.68a1.19 1.19 0 0 0-.34-1.09l-3.41-3.4a1.23 1.23 0 0 1 .71-2.1l4.75-.64a1.26 1.26 0 0 0 .95-.67l2.16-4.24a1.25 1.25 0 0 1 2.24 0l2.09 4.28a1.22 1.22 0 0 0 .93.7z"></path></svg>
    )
    handleTypeSelected(e){
        const list = document.querySelector(".marquee_header_types");
        list.querySelector(".selected").classList.remove("selected");
        e.currentTarget.classList.add("selected");
        this.setState({
            type_selected: e.target.innerText
        })
    }
    render(){
        const taskList = [
            {
                type: "delievery", avatar: "https://eu7cmie.cloudimg.io/s/crop/64x64/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/1973093/21192390_10155629195209120_3930992969904199411_n-a225529a26e1a7d2db1bc1a6686038a1.jpg", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            },
            {
                type: "delievery", avatar: "", title: "Deliever boxes to storage", price: 246, rating: 5
            }
        ]
        const Star = this.star;
        this.currentPath = window.location.pathname;
        return(
            <div className="marquee">
                <div className="marquee_header">
                    <h2>See what others are getting done</h2>
                    <ul className="marquee_header_types"> 
                        {["Moving home", "Starting a business","Fixing stuff","Hosting a party","Something different"].map((item,index)=>{
                            if(index===0){
                                return <li onClick={this.handleTypeSelected} className="selected"><span>{item}</span></li>
                            }else{
                                return <li onClick={this.handleTypeSelected}><span>{item}</span></li>
                            }
                        })}
                    </ul>
                    <p>Do you have a hole in the wall that needs plugging? Perhaps a TV that needs mounting?
                        Or maybe you have that perfect shade of green, but no time to paint? Get a Tasker to help.
                    </p>
                </div>
                <div className="marquee_tasks">
                    {/* this should an independent component with task list as props
                        Think about how to do the css effects
                    */}
                    <ul class="marquee_tasks_row first_row">
                        {
                            taskList.map(item=>(
                                <li class="marquee_tasks_row_card">
                                    <div class="marquee_tasks_row_card_container">
                                        <h3>{item.type}</h3>
                                        <div>
                                            <img src={item.avatar} />
                                            <span>{item.price}</span>
                                            <h4>{item.title}</h4>
                                        </div>
                                        <div>
                                            <Star />
                                            <span>{item.rating} Stars</span>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <ul class="marquee_tasks_row second_row">
                        {
                                taskList.map(item=>(
                                    <li class="marquee_tasks_row_card">
                                        <div class="marquee_tasks_row_card_container">
                                            <h3>{item.type}</h3>
                                            <div>
                                                <img src={item.avatar} />
                                                <span>{item.price}</span>
                                                <h4>{item.title}</h4>
                                            </div>
                                            <div>
                                                <Star />
                                                <span>{item.rating} Stars</span>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                    </ul>
                </div>
                <div className="marquee_button">
                    <Link to={this.currectPath==="/"?"/post-task": this.currentPath+"post-task"}>
                        <button>Get started now</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default TaskMarquee;