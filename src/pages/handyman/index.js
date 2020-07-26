import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './style.scss';
import PanelBlock from "./components/PanelBlock";
import { Advantages } from './components/Advantages';
import Introduction from './components/Introduction';


class HomeHandyman extends React.Component{
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
                <Advantages />
                <Introduction />
            </div>
        )
    }
}


{/* const mapDispatch = (dispatch) => ({
    updateHomeData(){
        dispatch(actionCreators.updateHomeData())
    }

}) */}

export default connect(null, null)(HomeHandyman);