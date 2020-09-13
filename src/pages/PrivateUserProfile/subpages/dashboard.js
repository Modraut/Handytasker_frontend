import React from 'react';
import './dashboard.scss';
import Categories from '../../home/components/Categories';
import instantBook from '../images/instant_book.png';
import { Link } from 'react-router-dom';
import icon_postTask from '../images/post_a_task.webp';

function Dashboard() {
    return (
        <div className="account_main_dashboard">
            <Link className="account_main_dashboard_instantBook">
                <img src={instantBook} alt="Instant Book" />
            </Link>
            <Categories>
                <div className="account_main_dashboard_categories_title">
                    <h3><img src={icon_postTask} alt="icon" /> Post a task & get offers</h3>
                    <h4>Receive & review offers from Taskers who can help</h4>
                </div>
            </Categories>
        </div>
    )
}
export default Dashboard;