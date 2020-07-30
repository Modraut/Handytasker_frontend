import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './style.scss';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { getReturnPath } from "../../common.js"
import userAPI from '../../../services/userAPI';


class PostTask extends Component{
    constructor(){
        super();
        this.state = {
            page: 0,
            inPerson: true,
            suburb: "", 
            total: true,

        }
        this.nextStep = this.nextStep.bind(this);
        this.lastStep = this.lastStep.bind(this);
    }

    header = (title,step) => (
        <div className="postTask_content_header">
            <h2>
                {title}
                <span onClick={()=>this.props.history.push(getReturnPath())}>&times;</span>
            </h2>
            {step!=="intro" && <div className="postTask_content_header_bar"><div className={`${step}`}></div></div>}
        </div>
    )
    lastStep(){
        this.setState({
            page: this.state.page-1
        },()=>{})
    }
    nextStep(){
        this.setState({
            page: this.state.page+1
        },()=>{})
    }
    setInPerson(state){
        this.setState({
            inPerson: state
        })
    }
    setTotal(state){
        this.setState({
            total: state
        })
    }
    
    render(){
        const page= this.state.page;
        return(
            <div className="postTask">
                {page===0 &&
                    <form className="postTask_content intro">
                        {this.header("","intro")}
                        <div className="postTask_content_main_intro">
                            <img src="https://www.airtasker.com/images/taylor/on-boarding.png" />
                            <h3>Start getting offers in no time</h3>
                            <h4>We're just going to ask a few questions to help you find the right Tasker - it'll only take a few minutes!</h4>
                        </div>
                        <div className="postTask_content_footer-oneButton">
                            <button onClick={this.nextStep}>Next</button>
                        </div>
                    </form>
                }
                {page===1 &&
                    <form className="postTask_content">
                        {this.header("Tell us what you need done?","step1")}
                        <div className="postTask_content_main_step1">
                        <section>
                            <h3>What do you need done?</h3>
                            <p>This'll be the title of your task - e.g. Help move my sofa</p>
                            <input type="text"></input>
                        </section>
                        <section>
                            <h3>What are the details?</h3>
                            <p>Be as specific as you can about what needs doing</p>
                            <textarea></textarea>
                        </section>
                        </div>
                        <div className="postTask_content_footer-oneButton">
                            <button onClick={this.nextStep}>Next</button>
                        </div>
                    </form>
                }
                {page===2 &&
                    <form className="postTask_content">
                        {this.header("Say where & when","step2")}
                        <div className="postTask_content_main_step2">
                            <section>
                                <h3>Where do you need it done?</h3>
                                <div>
                                    <div onClick={()=>this.setInPerson(true)}>
                                        <div>
                                            <input type="radio" id="inPerson" name="inPerson" value="in_person" checked={this.state.inPerson?true:false} />
                                            <label>In person</label>

                                        </div>
                                        <p>Select this if you need the Tasker physically there.</p>
                                    </div>
                                    <div onClick={()=>this.setInPerson(false)} >
                                        <div>
                                            <input type="radio" id="online" name="online" value="online" checked={!this.state.inPerson?true:false} />
                                            <label>Online</label>
                                        </div>
                                        <p>Select this if the Tasker can do it from home</p>
                                    </div>
                                </div>
                                <input placeholder="Enter a suburb" />
                            </section>
                            <section>
                                <h3>When do you need it done?</h3>
                                <input type="date" />
                            </section>
                        </div>
                        <div className="postTask_content_footer-twoButtons">
                            <button onClick={this.lastStep}>Back</button>
                            <button onClick={this.nextStep}>Next</button>
                        </div>
                    </form>
                }
                {page===3 &&
                    <form className="postTask_content">
                        {this.header("Suggest how much","step3")}
                        <div className="postTask_content_main_step3">
                            <div className="postTask_content_main_step3_help">
                                Want help?
                                <span><span>!</span></span>
                            </div>
                            <h3>What is your budget?</h3>
                            <p>Please enter the price you're comfortable to pay to get your task done. Taskers will use this as a guide for how much to offer.</p>
                            <div className="postTask_content_main_step3_total">
                                <div onClick={()=>this.setTotal(true)}>
                                    <input type="radio" checked={this.state.total?true:false} />
                                    <label>Total</label>
                                </div>
                                <div onClick={()=>this.setTotal(false)}>
                                    <input type="radio" checked={this.state.total?false:true} />
                                    <label>Hourly rate</label>
                                </div>
                            </div>
                            <input type="text" className="postTask_content_main_step3_amount"/>
                            <div className="postTask_content_main_step3_budget">
                                <div className="postTask_content_main_step3_budget_container">
                                    <span>45</span>
                                    <h4>estimated budget</h4>
                                    <p>Final payment will be agreed later</p>
                                </div>
                            </div>
                        </div>
                        <div className="postTask_content_footer-twoButtons">
                            <button onClick={this.lastStep}>Back</button>
                            <button onClick={this.nextStep}>Get quotes</button>
                        </div>
                    </form>
                }

                    {/* <div className="postTask_content_step1_header">
                        <span>&times;</span>
                        <h2>Tell us what you need done</h2>
                    </div>
                    <div className="postTask_content_step1_main">
                        <section>
                            <h3>What do you need done?</h3>
                            <p>This'll be the title of your task - e.g. Help move my sofa</p>
                            <input type="text"></input>
                        </section>
                        <section>
                            <h3>What are the details?</h3>
                            <p>Be as specific as you can about what needs doing</p>
                            <input type="textarea"></input>
                        </section>
                    </div>
                    <div className="postTask_content_step1_footer">
                        <button>Next</button>
                    </div> */}
            </div>
        )
    }
}


export default withRouter(PostTask);