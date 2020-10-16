import React from 'react';

export function UserDetails(props) {
    if(props.show){
    return (
        <div id="containerForHidding">
            <div id="oneUserDetailsContainer">
                <div id="upperUserDetailContainer">
                    <img id="userImage" width="310px" src={props.user.picture.large} alt="" />
                    <div>
                        <div id="closeUserDetailsDiv">
                            <button id="closeBtn" onClick={()=>props.closeDetails(false)}>X</button>
                        </div>
                        <label className="lblUser1"> Name:</label> <label className="lblUser2" id="userName">{props.user.name.title} {props.user.name.first} {props.user.name.last}</label>
                        <label className="lblUser1">Email:</label> <label className="lblUser2" id="userEmail">{props.user.email}</label>
                    </div>
                </div>
                <p id="userBio">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio rem, fugit incidunt beatae
                    veritatis voluptas hic blanditiis aspernatur doloribus ex facilis architecto quasi facere amet.
                    Unde a ea et dolor?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio rem, fugit incidunt beatae
                    veritatis voluptas hic blanditiis aspernatur doloribus ex facilis architecto quasi facere amet.
                    Unde a ea et dolor?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio rem, fugit incidunt beatae
                    veritatis voluptas hic blanditiis aspernatur doloribus ex facilis architecto quasi facere amet.
                    Unde a ea et dolor?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio rem, fugit incidunt beatae
                    veritatis voluptas hic blanditiis aspernatur doloribus ex facilis architecto quasi facere amet.
                    Unde a ea et dolor?
                </p>
            </div>
        </div>
    );
    }
    return <div></div>
}
