// import React from 'react';
// import axios from 'axios';
// import {connect} from 'react-redux';

// import './Writers.scss';

// class Writers extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             writerList:[]
//         }
//     }
//     componentDidMount(){
//         axios.get('/fakeUsers').then(
//             res => {
//                 const writerList = res.data.users;
//                 console.log(res.data.users);
//                 this.setState({
//                     writerList: writerList
//                 })
//             }
//         )
//     }
//     render(){
//         return(
//             <div className="home_writers">
//                 <div>
//                     <div>Show more</div>
//                     <div>Popular writers</div>
//                 </div>
//                 {
//                     this.state.writerList.map(item=>{
//                         return(
//                             <section>
//                                 <a><img src={item.avatar} alt="pending" /></a>
//                                 <div>
//                                     <div>+ follow</div>
//                                     <h4>{item.name}</h4>
//                                     <div>{item.follower} followers</div>
//                                 </div>
//                             </section>
//                         )
//                     })
//                 }

//             </div>
//         )
//     }
// }


// // const mapDispatch = (dispatch) => ({
// //     updateHomeData(){
// //         dispatch(actionCreators.updateHomeData())
// //     }

// // })

// export default connect(null, null)(Writers);