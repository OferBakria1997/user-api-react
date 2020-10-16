import React, {useState } from 'react';
import { User } from './User'
import { UserDetails } from './userDetails/userDetails'

export function Gallery(props) {
    const [userIndex, setuserIndex] = useState(-1);//init with -1 , indexes in array started with 0;
    const [showDetails, setShowDetails] = useState(false);//show details component
    let users=props.userArr;

    let images = users.map((curr, index) => {
        if(curr.name.first.includes(props.search)){
        return <div key={curr.name.first}>
            <User prop={curr} getIndex={(index) => setuserIndex(index)} ind={index} showDetails={(boolean)=>setShowDetails(boolean)}></User>
            </div>
        }
        return <></>
    });
    return (
        <div>
            <UserDetails show={showDetails} closeDetails={(boolean)=>setShowDetails(boolean)} user={users[userIndex]}/>
            <div id="gallery">
                {images}
            </div>
        </div>
    );
}
