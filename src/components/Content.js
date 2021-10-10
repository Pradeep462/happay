import React, { useEffect, useState } from 'react';
import { data } from '../data';
import Card from './Card';
import './Content.css';

const Content = ({ itemDetail, setItemDetail }) => {

    const [Data, setData] = useState();


    useEffect(() => {
        setData(data);
    }, []);

    return (
        <div className='main-content'>
            <h1>Most Popular</h1>
            {/* <p>_______</p> */}
            <img className="star-img" src='https://cdn.icon-icons.com/icons2/2091/PNG/512/star_icon_128523.png' />
            <div className='card-content'>
                {Data && Data.map((d) => {
                    return <Card d={d} itemDetail={itemDetail} setItemDetail={setItemDetail} />
                })
                }
            </div>
        </div>
    );
};

export default Content;