import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = ({ d, itemDetail, setItemDetail }) => {

    const [isclicked, setBtnclicked] = useState(true);


    const additem = () => {
        if (itemDetail.length !== 0) {


            let change = false;
            for (let i = 0; i < itemDetail.length; i++) {
                if (itemDetail[i].name === `${d.name}`) {
                    itemDetail[i].quentity++;
                    change = true;

                    break;
                }
            }

            if (change)
                return;
        }

        let item = {
            'name': `${d.name}`,
            'price': `${d.final_price}`,
            'quentity': 1
        }
        let copyarray = [...itemDetail, item];
        setItemDetail(copyarray);

    }

    const subtractitem = () => {
        if (itemDetail.length !== 0) {


            itemDetail.filter((item) => item.name === `${d.name}` ? (item.quentity >= 1 ? item.quentity-- : itemDetail.splice(item, 1)) : "")
            let copyarray = [...itemDetail];
            setItemDetail(copyarray);
            // console.log(mapptedItem);

        }


    }
    // console.log(d)


    const btnclicked = () => {
        isclicked ? setBtnclicked(false) : setBtnclicked(true);
        console.log(isclicked)
    }


    return (
        <div className="card-container">

            <img className="img-card" src={`${d.img_url}`} /><br />
            <div className="about-item">
                <span><b>{d.name}</b></span>
                <div>
                    {d.original_price && <span><del>{d.original_price}.00</del></span>}
                    <span><b>{d.final_price}.00</b></span>
                </div>
            </div>
            <p style={{ 'color': 'rgb(184, 184, 185)', "width": '250px' }} >{d.description}</p>

            {isclicked ?
                <button className="add-button" onClick={() => btnclicked()}>Add to card</button>

                :
                <div>
                    <button style={{ 'backgroundColor': 'blue', 'color': 'white', 'font-size': '25px', "width": '75px' }} onClick={subtractitem}>-</button>
                    <button style={{ 'color': 'blue', "width": '100px', 'font-size': '25px', }} >1</button>
                    <button style={{ 'backgroundColor': 'blue', 'color': 'white', 'font-size': '25px', "width": '75px' }} onClick={additem}>+</button>
                </div>

            }
        </div>
    );
};

export default Card;