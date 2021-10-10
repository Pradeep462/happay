import React from 'react';
import { useHistory } from "react-router-dom";
import './Header.css'

const Header = ({ setIconClicked, isIconClicked }) => {
    let history = useHistory();


    const handleClick = () => {
        //setIconClicked(true);
        history.push("/summary");
    }

    return (
        <div className="header">
            <div className="header-item-l">
                <img src='https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg' />
                <h1 className="c-name">Happay</h1>
            </div>
            <div className="header-item-r">
                {!isIconClicked ?
                    <img className="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLciKdZeL1IX_9XSKEv00bpfZfA2uw-ByYsXI6gXZugjHWIRwJQxZVc4QY_GVPDDL9cLU&usqp=CAU' onClick={handleClick} />
                    :
                    ""}
                <img className="profile-img" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnjKcARdpn-RzBKfzK1YJzVEr6LG9DDoI1UcBYvxv-K9sly9MbHuRBkxDdllBxO9Ig_TY&usqp=CAU' />

            </div>
        </div>
    );
};

export default Header;