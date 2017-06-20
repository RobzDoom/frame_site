import React, { Component } from 'react'

class Header extends Component {
    render (){
        return(
            <div>This is the footer ok
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        )
    };
}

export default Header