import React from 'react';
import { useHistory } from "react-router-dom";
import './OrderSummary.css'

const OrderSummary = ({ setIconClicked, itemDetail, setItemDetail }) => {
    let history = useHistory();

    const handleClick = () => {
        setIconClicked(false);
        history.push("/");
    }

    const additem = () => {
        //     if (itemDetail.length !== 0) {


        //         let change = false;
        //         for (let i = 0; i < itemDetail.length; i++) {
        //             if (itemDetail[i].name === `${d.name}`) {
        //                 itemDetail[i].quentity++;
        //                 change = true;

        //                 break;
        //             }
        //         }

        //     }

    }

    const subtractitem = (e) => {
        console.log(e)
        // if (itemDetail.length !== 0) {


        //     itemDetail.filter((item) => item.name === `${d.name}` ? (item.quentity >= 1 ? item.quentity-- : itemDetail.splice(item, 1)) : "")
        //     let copyarray = [...itemDetail];
        //     setItemDetail(copyarray);
        //     // console.log(mapptedItem);

        // }


    }
    let totalBil = 0;

    itemDetail.map(item => totalBil = totalBil + (`${item.quentity}` * `${item.price}`))

    return (
        <div className='OrderSummary-container'>
            <span onClick={handleClick} style={{ 'cursor': 'pointer', 'margin': '5rem' }} >{`<-`}  Back To Home</span>
            <h3 className="m-5">Order Summary ({`${itemDetail.length}`} Items)</h3>
            <div className=" container o-container ">
                <div className=" container bordered">
                    <table class="table ">
                        <thead>
                            <tr>
                                <th scope="col">S NO.</th>
                                <th scope="col">ITEMS</th>
                                <th scope="col">QTY</th>

                            </tr>
                        </thead>
                        <tbody>
                            {itemDetail.map((item, index) => {
                                return <tr >
                                    <th scope="row">{index}</th>
                                    <td>{item.name}</td>
                                    <td>
                                        <button type="button" class="btn btn-secondary" onClick={e => subtractitem(e)}>-</button>
                                        <button type="button" class="btn btn-light" onClick={additem}>{item.quentity}</button>

                                        <button type="button" class="btn btn-secondary">+</button>
                                    </td>
                                </tr>
                            })}
                        </tbody>


                    </table>
                    <hr />
                    <b className="text-primary" onClick={handleClick} style={{ 'cursor': 'pointer' }}>+ Add more items</b>

                </div>
                <div className='container d-flex flex-column' style={{ 'backgroundColor': '#edf2f7', "paddding": '5rem', 'padding-top': '3rem' }}>

                    <h3>Price Detail</h3><hr />

                    {itemDetail.map((item, index) => {
                        return <div className="d-flex justify-content-between p-3">
                            <b>{`${item.quentity} X  $ ${item.price}.00`}</b>
                            <b>$ {`${item.quentity}` * `${item.price}`} .00</b>

                        </div>
                    })}                    <hr />

                    <div className="d-flex justify-content-between p-3">
                        <b>Total Saving</b>
                        <b className="text-success">- $ {`${itemDetail[0].quentity}` * 9}.00</b>
                    </div>
                    <div className="d-flex justify-content-between p-3">
                        <b>Delivery Fee</b>
                        <b>{`$ 5.00`}</b>
                    </div>
                    <div className="d-flex justify-content-between p-3">
                        <b>Taxes and Charges</b>
                        <b>{`$ 2.00`}</b>
                    </div>

                    <hr />

                    <div className="d-flex justify-content-between p-3">
                        <b>To Pay</b>
                        <b>$ {`${totalBil} ` - 12}.00</b>
                    </div>

                    <button type="button" class="btn btn-primary btn-lg">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;