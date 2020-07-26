import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './style.scss';
import PanelBlock from "./components/PanelBlock";
import { Categories } from './components/Categories';
import TaskMarquee from './components/TaskMarquee';


class Home extends React.Component{
    constructor(){
        super();
        this.state = {
            articleList: []
        }
    }

    render(){
        return(
            <div className="home">
                <PanelBlock />
                <Categories />
                <TaskMarquee />
            </div>
        )
    }
}


{/* const mapDispatch = (dispatch) => ({
    updateHomeData(){
        dispatch(actionCreators.updateHomeData())
    }

}) */}

export default connect(null, null)(Home);