import React from 'react';
import './../App.css';


let myRef = React.createRef()
console.log(myRef);

function Body() {
    return (
        <div className="body-container">
            <div className="body-header">
                Full-Stack Developer
            </div>
            <br />
            <br />
            <div className="body-text">
                Producing high quality responsive websites and exceptional user experience
            </div>
            <br />
            <div className="body-link">
                View Portfolio
            </div>
            <div className="body-link-underline">
                <a href="#projects">
                    <i class="fas fa-angle-down"></i>   
                </a>
            </div>
        </div>
    );
}

export default Body;
