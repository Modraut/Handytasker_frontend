import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import './PanelBlock.scss';

class PanelBlock extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }
    render(){
        const ProductReview = this.productReview;
        const Star = this.star;
        const StarHalf = this.starHalf;
        return(
        <div className="home_panel" >
            <div className="home_panel_container">
                <div className="home_panel_container_content">
                    <h1>Connect with experts to get the job done on Airtasker</h1>
                    <h2>It’s amazing what you can’t do yourself</h2>
                    <button>Get started now</button>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null, null)(PanelBlock);