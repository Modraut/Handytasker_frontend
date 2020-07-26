import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import './PanelBlock.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';




class PanelBlock extends React.Component{
    constructor(){
        super();
        this.state={
        }
    }
    productReview = ()=>(
        <svg width="170" height="30" viewBox="0 0 420 72" fill="white">
            <path
                d="M179.1 24.6v21h-5.8v-21h-8v-5.4h21.9v5.4h-8.1zM151.8 46c-7.8 0-13.5-6-13.5-13.5v-.1c0-7.5 5.6-13.6 13.7-13.6 5 0 7.9 1.6 10.4 4l-3.7 4.3c-2-1.9-4.1-3-6.7-3-4.5 0-7.7 3.7-7.7 8.2v.1c0 4.5 3.2 8.3 7.7 8.3 3 0 4.8-1.2 6.9-3.1l3.7 3.7c-2.7 2.9-5.7 4.7-10.8 4.7zm-29.3 0c-7 0-11.4-4-11.4-11.7V19.2h5.8v14.9c0 4.3 2.2 6.5 5.7 6.5s5.7-2.1 5.7-6.3V19.2h5.8v14.9c0 8-4.5 11.9-11.6 11.9zm-29.6-.4H82.7V19.2h10.2c8.3 0 14 5.7 14 13.1v.1c0 7.4-5.7 13.2-14 13.2zm8-13.2c0-4.7-3.2-7.9-8-7.9h-4.4v15.8h4.4c4.8 0 8-3.2 8-7.8v-.1zM64.3 46c-8.1 0-14-6-14-13.5v-.1c0-7.5 6-13.6 14.1-13.6s13.9 6 13.9 13.5v.1c0 7.5-5.9 13.6-14 13.6zm8-13.6c0-4.5-3.3-8.3-8-8.3s-7.9 3.7-7.9 8.2v.1c0 4.5 3.3 8.3 8 8.3 4.6 0 7.9-3.7 7.9-8.2v-.1zM40.8 45.6l-5.6-8.5h-4.5v8.5h-5.8V19.2h12c6.2 0 9.9 3.3 9.9 8.7v.1c0 4.2-2.3 6.9-5.6 8.2l6.4 9.4h-6.8zm.2-17.4c0-2.5-1.8-3.7-4.6-3.7h-5.7V32h5.8c2.8 0 4.5-1.5 4.5-3.7v-.1zm-30.8 9.5H5.8v7.9H0V19.2h10.8c6.2 0 10 3.8 10 9.1v.1c0 6.1-4.7 9.3-10.6 9.3zm4.8-9.3c0-2.5-1.8-3.9-4.7-3.9H5.8v8h4.6c2.9 0 4.6-1.7 4.6-4v-.1zm225-9.2l-13.5 7.7-15.4-3.2s2.1-1.8 6.4-4.3c4.5-2.6 7.3-3.1 7.3-3.1s3.1-.1 7.9.9c5 .9 7.3 2 7.3 2zm4.1 10.7c.8 6 .7 9.6.7 9.6s-1 1.2-5.8 4.8c-4.2 3.1-7.9 4.9-7.9 4.9l-3.2-20.5 13.9-7.8s1.4 2.8 2.3 9zm-18.5-.8l3.1 20.5s-4.1-.7-8.6-2.5c-5.3-2.1-7.8-3.5-7.8-3.5s-1.1-2.8-1.9-8.5c-.8-5.1-.5-9.3-.5-9.3l15.7 3.3z">
            </path>
            <path
                d="M259.7 32.5c0 7.4-2.5 14.3-6.7 19.8l5 19.7-18.2-9.6c-3.8 1.7-8.1 2.6-12.6 2.6-17.9 0-32.5-14.6-32.5-32.5 0-18 14.6-32.5 32.5-32.5s32.5 14.5 32.5 32.5zM240 55.8l9 4.8-2.5-9.8.2-.2c4.4-4.7 7.1-11.1 7.1-18.1 0-14.7-11.9-26.6-26.6-26.6-14.7 0-26.6 11.9-26.6 26.6 0 14.7 11.9 26.6 26.6 26.6 4.6 0 9-1.2 12.7-3.2l.1-.1zm170.6-10h-5.1l-5.9-17.2-6 17.2h-5l-9-26.5h6.2l5.5 17.8 5.9-17.9h5l5.9 17.9 5.4-17.8h6.1l-9 26.5zM364.8 35v5.5h14.3v5.1h-20V19.3h15.4l1.7 5.2h-11.4v5.3h12.4V35h-12.4zm-17.9 10.6V19.3h5.8v26.3h-5.8zm-14.7.2h-5.1l-10.6-26.5h6.3l6.9 18.6 6.9-18.6h6.3l-10.7 26.5zM301.9 35v5.5h14.3v5.1h-20V19.3h15.4l1.7 5.2h-11.4v5.3h12.4V35h-12.4zm-17 10.6l-5.6-8.4h-4.6v8.4h-5.8V19.3H281c6.2 0 9.9 3.3 9.9 8.7v.1c0 4.2-2.3 6.9-5.6 8.1l6.4 9.4h-6.8zm.2-17.3c0-2.5-1.8-3.8-4.6-3.8h-5.8v7.6h5.9c2.8 0 4.5-1.5 4.5-3.7v-.1zm47.8 36.8c-3.2 0-5.1-1.8-5.1-5.2v-6.7h2.6v6.6c0 1.9.9 2.9 2.5 2.9s2.5-.9 2.5-2.8v-6.7h2.6v6.6c0 3.6-2 5.3-5.1 5.3zm-9-.2l-1.1-2.6h-5l-1 2.6h-2.7l5.1-11.8h2.4l5 11.8h-2.7zm-3.6-8.7l-1.5 3.8h3.1l-1.6-3.8zM310 64.9v-2.7h2.7v2.7H310zm-5 0v-7.6l-3.3 5h-.1l-3.3-5v7.6h-2.5V53.2h2.8l3.1 5 3-5h2.8v11.7H305zm-17.8.2c-3.6 0-6.2-2.7-6.2-6 0-3.4 2.6-6.1 6.3-6.1 3.6 0 6.2 2.7 6.2 6v.1c0 3.3-2.6 6-6.3 6zm3.6-6c0-2.1-1.5-3.7-3.6-3.7-2 0-3.5 1.6-3.5 3.6v.1c0 2 1.5 3.6 3.6 3.6 2 0 3.5-1.6 3.5-3.6zm-15.8 6c-3.5 0-6-2.6-6-6s2.5-6.1 6.1-6.1c2.2 0 3.5.7 4.6 1.8l-1.6 1.9c-.9-.8-1.8-1.3-3-1.3-2 0-3.4 1.6-3.4 3.6v.1c0 2 1.4 3.6 3.4 3.6 1.3 0 2.1-.5 3.1-1.3l1.6 1.6c-1.2 1.3-2.5 2.1-4.8 2.1zm-10-.2v-2.7h2.7v2.7H265z">
            </path>
        </svg>
    )
    star = ()=>(
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#e9a52c">
            <path
                d="M16.2 8.16l4.74.73a1.23 1.23 0 0 1 .67 2.11l-3.46 3.28a1.23 1.23 0 0 0-.37 1.1l.77 4.68a1.24 1.24 0 0 1-1.82 1.29L12.5 19.1a1.28 1.28 0 0 0-1.16 0l-4.27 2.17A1.25 1.25 0 0 1 5.27 20l.85-4.68a1.19 1.19 0 0 0-.34-1.09l-3.41-3.4a1.23 1.23 0 0 1 .71-2.1l4.75-.64a1.26 1.26 0 0 0 .95-.67l2.16-4.24a1.25 1.25 0 0 1 2.24 0l2.09 4.28a1.22 1.22 0 0 0 .93.7z">
            </path>
        </svg>
    )
    starHalf = ()=>(
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#e9a52c">
            <path d="M21.61 11a1.23 1.23 0 0 0-.67-2.11l-4.74-.73a1.22 1.22 0 0 1-.93-.68L13.18 3.2a1.22 1.22 0 0 0-1.12-.7 1.21 1.21 0 0 0-.66.19h-.06a1.56 1.56 0 0 0-.2.16 1.64 1.64 0 0 0-.2.29L8.78 7.42a1.3 1.3 0 0 1-.39.45 1.32 1.32 0 0 1-.56.22l-4.75.64a1.32 1.32 0 0 0-.65.27 1.14 1.14 0 0 0-.29.4 1.34 1.34 0 0 0-.14.48 1.23 1.23 0 0 0 .37.95l3.41 3.35a1.19 1.19 0 0 1 .34 1.09L5.27 20a1.22 1.22 0 0 0 0 .33.36.36 0 0 0 0 .1 1.6 1.6 0 0 0 0 .21.69.69 0 0 1 0 .1 2 2 0 0 0 .12.19V21a.88.88 0 0 0 .22.21 1.12 1.12 0 0 0 .39.09.32.32 0 0 0 .09 0 1.66 1.66 0 0 0 .21.06h.43a1.73 1.73 0 0 0 .32-.11l4.27-2.18a1.19 1.19 0 0 1 .32-.1A1.69 1.69 0 0 1 12 19a1.28 1.28 0 0 1 .5.13l4.23 2.25a1.26 1.26 0 0 0 .59.15 1.24 1.24 0 0 0 1.23-1.44l-.77-4.68a1.23 1.23 0 0 1 .37-1.1zm-4.49 2.2a2.71 2.71 0 0 0-.82 2.42l.7 4.17-3.78-2a2.64 2.64 0 0 0-1.2-.31V4.41l.05-.11 1.87 3.83A2.72 2.72 0 0 0 16 9.64l4.22.65z"></path>
        </svg>
    )

    render(){
        const ProductReview = this.productReview;
        const Star = this.star;
        const StarHalf = this.starHalf;
        return(
        <div className="home_panel" >
            <div className="home_panel_container">
                <div className="home_panel_container_brief">
                    <h1>Hire an affordable handyman for any job in Sydney</h1>
                    <h2>Fill a short form and get free quotes from handymen near you</h2>
                    <div className="home_panel_container_brief_rating">
                        <ProductReview />
                        <span>4.5</span>
                        <Star />
                        <Star />
                        <Star />
                        <Star />
                        <StarHalf />
                    </div>
                    <p>Excellent rating - 4.5/5 (9200+ reviews)</p>
                </div>
                <div className="home_panel_container_whiteboard">
                    <h2>Handymen for all your needs</h2>
                    <ul>
                        <li>
                            <FontAwesomeIcon className='searchIcon'  size='sm' icon={faCheck} color="#81b549"/>
                            <span>Home maintenance</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className='searchIcon'  size='sm' icon={faCheck} color="#81b549"/>
                            <span>Installations & assembly</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className='searchIcon'  size='sm' icon={faCheck} color="#81b549"/>
                            <span>Repairs</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className='searchIcon'  size='sm' icon={faCheck} color="#81b549"/>
                            <span>Art/mirror hanging</span>
                        </li>
                        <li>
                            <FontAwesomeIcon className='searchIcon'  size='sm' icon={faCheck} color="#81b549"/>
                            <span>General labour</span>
                        </li>
                        <li className="home_panel_container_whiteboard_last"><span>… or a jack of all trades</span></li>
                    </ul>
                    <button>Find A Handyman</button>
                    <p>It only takes 2 minutes. And it’s free.</p>
                </div>
            </div>
        </div>
        )
    }
}

export default connect(null, null)(PanelBlock);