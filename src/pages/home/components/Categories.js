import React from 'react';

import './Categories.scss';

class Categories extends React.Component  {
    render(){
        const arr = [
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.18 10.9l-.38-.47a.76.76 0 0 0-.58-.28h-1.46v-2h.71a3.63 3.63 0 0 0 3.8-3.44 3.64 3.64 0 0 0-3.79-3.45H6.55A.76.76 0 0 0 5.8 2v1.66a1.87 1.87 0 0 0 1.93 1.79A1.37 1.37 0 0 1 9.2 6.67v.73a.75.75 0 0 0 .75.75h1.31v2H9.78a.76.76 0 0 0-.58.28l-.38.47a14.28 14.28 0 0 0-3.12 8.89 3 3 0 0 0 3 3h6.66a3 3 0 0 0 3-3 14.28 14.28 0 0 0-3.18-8.89zM7.73 4c-.25 0-.43-.15-.43-.29v-.96h6.18a2.15 2.15 0 0 1 2.29 2 2.14 2.14 0 0 1-2.3 1.94H10.7A2.86 2.86 0 0 0 7.73 4zm7.6 17.3H8.67a1.47 1.47 0 0 1-1.47-1.51 12.74 12.74 0 0 1 2.8-7.95l.15-.19h1.12v4a1.13 1.13 0 0 1-.33.79l-.75.75a.75.75 0 0 0 0 1.06.75.75 0 0 0 1.06 0l.75-.75a2.61 2.61 0 0 0 .77-1.85v-4h1.1l.15.19a12.74 12.74 0 0 1 2.79 8 1.47 1.47 0 0 1-1.48 1.41z"></path></svg>,
                content: "Home Cleaning"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M18 9.6h-1.25V8.35A2.75 2.75 0 0 0 14 5.6H4a2.75 2.75 0 0 0-2.75 2.75v8.51a.75.75 0 0 0 .75.75h1.56a2.72 2.72 0 0 0-.31 1.25 2.75 2.75 0 0 0 5.5 0 2.61 2.61 0 0 0-.32-1.25h8.13a2.72 2.72 0 0 0-.31 1.25 2.75 2.75 0 0 0 5.5 0 2.61 2.61 0 0 0-.32-1.25H22a.76.76 0 0 0 .75-.75v-2.51A4.75 4.75 0 0 0 18 9.6zm0 1.5a3.26 3.26 0 0 1 3.25 3.25v1.76h-4.5v-5zm-14-4h10a1.25 1.25 0 0 1 1.25 1.25v4.76H2.75V8.35A1.25 1.25 0 0 1 4 7.1zm-1.25 7.51h12.5v1.5H2.75zm4.5 4.25A1.25 1.25 0 1 1 6 17.61a1.25 1.25 0 0 1 1.25 1.25zm13 0A1.25 1.25 0 1 1 19 17.61a1.25 1.25 0 0 1 1.25 1.25z"></path></svg>,
                content: "Full House Remove"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M22 3.27H2a.75.75 0 0 0-.75.73v4a.76.76 0 0 0 .75.77h.25V19A2.78 2.78 0 0 0 5 21.77h14A2.78 2.78 0 0 0 21.75 19V8.77H22a.76.76 0 0 0 .75-.77V4a.75.75 0 0 0-.75-.73zM2.75 4.77h18.5v2.5H2.75zM20.25 19A1.27 1.27 0 0 1 19 20.27H5A1.27 1.27 0 0 1 3.75 19V8.77h16.5z"></path><path d="M10.5 15.27h3a2.25 2.25 0 0 0 0-4.5h-3a2.25 2.25 0 0 0 0 4.5zm0-3h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1 0-1.5z"></path></svg>,
                content: "Few Items Removals"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M22.74 9.16a5.08 5.08 0 0 0-5.07-5.08h-7.42a5.08 5.08 0 0 0-5 4.33h-3.2a.75.75 0 1 0 0 1.5h3.19a5.08 5.08 0 0 0 5 4.33h3.57v4.4a3.23 3.23 0 0 0 6.45 0V13.5a5 5 0 0 0 2.48-4.34zm-4 9.48a1.73 1.73 0 0 1-3.45 0v-4.4h2.35a5 5 0 0 0 1.1-.13zm-1.1-5.9h-7.39a3.58 3.58 0 0 1 0-7.16h7.42a3.58 3.58 0 0 1 0 7.16z"></path><path d="M18.28 8.41h-2.47a.75.75 0 1 0 0 1.5h2.47a.75.75 0 0 0 0-1.5z"></path></svg>,
                content: "Furniture Assembly"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M19.78 8.36h-.36a2.75 2.75 0 0 0-2.75-2.75H4a2.75 2.75 0 0 0-2.75 2.73v1.55A2.75 2.75 0 0 0 4 12.64h12.67a2.75 2.75 0 0 0 2.75-2.75h.36a1.47 1.47 0 0 1 1.47 1.47v1.59a1.47 1.47 0 0 1-1.47 1.47h-7.22a3 3 0 0 0-3 3V22a.75.75 0 0 0 1.5 0v-4.64a1.47 1.47 0 0 1 1.48-1.47h7.22a3 3 0 0 0 3-3v-1.56a3 3 0 0 0-2.98-2.97zm-1.86 1.53a1.25 1.25 0 0 1-1.25 1.25H4a1.25 1.25 0 0 1-1.25-1.25V8.34A1.25 1.25 0 0 1 4 7.09h12.67a1.25 1.25 0 0 1 1.25 1.25z"></path></svg>,
                content: "Handyman"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M23.14 19.37L17 14.48a.76.76 0 0 0-.83-.07.77.77 0 0 0-.38.74l.89 7.93a.72.72 0 0 0 .59.65h.15a.74.74 0 0 0 .65-.37l1.11-1.93 1.11 1.93a.75.75 0 0 0 .65.37.69.69 0 0 0 .37-.1.75.75 0 0 0 .28-1l-1.13-1.93h2.22a.74.74 0 0 0 .46-1.33zM14 4.41h-3.83a.75.75 0 0 0 0 1.5H14a.75.75 0 0 0 0-1.5zm-.23 13.49h-3.41a.75.75 0 0 0 0 1.5h3.41a.75.75 0 1 0 0-1.5zm-8.49-3.35A.74.74 0 0 0 6 13.8V10a.75.75 0 0 0-1.5 0v3.8a.75.75 0 0 0 .78.75zM18.27 10v3.41a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-1.5 0zM5.28 3.5a1.71 1.71 0 0 0-.55.09 1.67 1.67 0 0 0-1 2.13 1.65 1.65 0 0 0 1.56 1.1 1.77 1.77 0 0 0 .56-.09 1.66 1.66 0 0 0-.57-3.23zm13.57 3.32a1.71 1.71 0 0 0 .55-.09 1.68 1.68 0 1 0-.55.09zM5.28 17a1.49 1.49 0 0 0-.55.1 1.66 1.66 0 0 0 .55 3.23 1.78 1.78 0 0 0 .56-.1A1.66 1.66 0 0 0 5.28 17z"></path></svg>,
                content: "Marketing & Design"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M22.2 3.43a.76.76 0 0 0-.68-.66c-.25 0-6.08-.48-7.35 4a8.48 8.48 0 0 0-.1 2.93 3.4 3.4 0 0 0-1.17.55l-.05-1.35a3.64 3.64 0 0 0-3.47-3.52h-.05C9.16 5.35 5.11 5 3 7.48c-1.18 1.36-1.51 3.24-1 5.6a.76.76 0 0 0 .6.58 9.59 9.59 0 0 0 1.77.17 5.28 5.28 0 0 0 5.44-4.52A21.08 21.08 0 0 0 10 7a2.15 2.15 0 0 1 1.32 1.9l.15 4.19.27 7.42a.74.74 0 0 0 .74.72.74.74 0 0 0 .72-.78l-.2-7.4a1.91 1.91 0 0 1 1.91-2 9.89 9.89 0 0 0 1.66.16 5.33 5.33 0 0 0 3.78-1.36c2.34-2.21 1.87-6.25 1.85-6.42zM8.34 9c-.58 2.55-2.21 3.61-5 3.24a4.42 4.42 0 0 1 .75-3.79c1.18-1.36 3.33-1.6 4.42-1.62A19.24 19.24 0 0 1 8.34 9zm11-.27a4.41 4.41 0 0 1-3.74.88 7.42 7.42 0 0 1 0-2.51c.72-2.52 3.78-2.85 5.13-2.88.04 1.11-.09 3.3-1.41 4.54z"></path></svg>,
                content: "Home & Gardening"
            },
            {
                icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M21.85 10.26A10 10 0 0 0 12 2a10.52 10.52 0 0 0-1.75.15A10 10 0 0 0 12 22a10.52 10.52 0 0 0 1.75-.15 10 10 0 0 0 8.1-11.59zm-1.8-1a27.9 27.9 0 0 0-4.29-.21 7 7 0 0 1 .58-1.26 8 8 0 0 0 1-2.45 8.49 8.49 0 0 1 2.71 3.94zm-9.53-5.63A8.41 8.41 0 0 1 12 3.5a8.54 8.54 0 0 1 3.9 1 5.38 5.38 0 0 1-.9 2.55 8 8 0 0 0-.86 2.11 27.42 27.42 0 0 0-5.14.92 7.93 7.93 0 0 0-1.62-1.73 5.81 5.81 0 0 1-1.68-2 8.46 8.46 0 0 1 4.82-2.72zm-5.8 4a8.05 8.05 0 0 0 1.71 1.88 7.21 7.21 0 0 1 1 1 26.37 26.37 0 0 0-3.95 1.69 8.51 8.51 0 0 1 1.24-4.57zm-1 6.2a25.51 25.51 0 0 1 4.5-1.95 4.57 4.57 0 0 1 .19 2.45 5.35 5.35 0 0 1-.82 2 5.7 5.7 0 0 0-.9 2.32 8.48 8.48 0 0 1-2.98-4.82zm9.77 6.54a8.48 8.48 0 0 1-5.36-.81 4.11 4.11 0 0 1 .75-2.48 6.77 6.77 0 0 0 1-2.48 6.05 6.05 0 0 0-.22-3.15 27.18 27.18 0 0 1 4.34-.77 6 6 0 0 0 .88 3.09 6.84 6.84 0 0 0 1.8 2 4.17 4.17 0 0 1 1.55 2 8.41 8.41 0 0 1-4.75 2.6zm5.77-3.95a5.81 5.81 0 0 0-1.64-1.84A5.45 5.45 0 0 1 16.16 13a4.66 4.66 0 0 1-.68-2.43 26.27 26.27 0 0 1 4.86.25h.07a8.49 8.49 0 0 1-1.16 5.6z"></path></svg>,
                content: "Anything"
            },
        ]
        return(
            <div className="categories">
                <div className="categories_container">
                    {/* <h2>What do you need done?</h2> */}
                    {this.props.children}
                    <ul>
                        {
                            arr.map((item)=>{
                                const Icon = ()=>(item.icon);
                                return(
                                    <li>
                                        <div><Icon /></div>
                                        <p>{item.content}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Categories;