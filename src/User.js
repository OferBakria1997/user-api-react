import React from 'react';

export function User(props) {
    let user=props.prop;
    return (
        <div id="userCard" onClick={()=>{props.getIndex(props.ind);props.showDetails(true)}}>
            <img src={props.prop.picture.large} alt="userPicture" width="200px" height="200px"></img><br/>
            <label id="labelName">{user.name.first}</label>
        </div>
    );
}
