import React, { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { UserLayout } from '../../Components/Layouts/UserLayout';
import { Error, Success } from '../../Components/Messages/messages';
import { listProducts } from '../../Redux/Redux';
import { isAuthenticated } from '../../Components/Auth/auth';

export const Payment = (props) => {
  const dispatch = useDispatch('');
  const user = isAuthenticated();
  const [products, setProducts] = useState([]);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
    month: ""
  });

  const handleChange = (key, value) => {
    setCardData({
      ...cardData,
      [key]: value
    })
  }

  const getCartProducts = async () => {
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cart/get`, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      if (res.status === 200) {
        setProducts(res.data);
      } else {
        Error(res.data.errorMessage);
      }
    })


  }


  useEffect(() => {
    getCartProducts();
    return () => {

    }
  }, []);

  const totalPrice = products?.reduce((a, b) => a + b.qty * b.price.toString(), 0);

  const emptyCart = async () => {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/cart/empty`, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res => {
      if (res.status === 200) {
        Success(res.data.successMessage);
        dispatch(listProducts());
      } else {
        Error(res.data.errorMessage)
      }
    })
  }

  const transactionSuccess = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/orders/place-order`, {
      placed: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
      totalPrice: totalPrice,
      phone: user?.phone,
      name: user.firstName + " " + user.lastName,
      email: user.email,
      cartProducts: products,
      address: "address",
      paymentData: cardData
    }, {
      headers: {
        'authorization': 'Bearer ' + localStorage.getItem('token')
      }
    }
    )
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          emptyCart();
          Success(res.data.successMessage);
          setTimeout(() => {
            props.history.push('/orders')
          }, 2000);
        } else {
          Error(res.data.errorMessage)
        }
      }).catch(err => {
        console.log(err);
      })

  }

  return (
    <div>
      <UserLayout navbar>
        <div className='row payment' style={{ marginLeft: '100px' }}>
          <div className='col-md-8 pr-4'>
            <div style={{ width: '100%' }}>
              <div className='jumbotron jumbotron-fluid mt-4 border payment p-4'>
                <div>
                  <h4>Pay with Paypal</h4>
                  <div className='my-5'>
                    <>
                      <br />
                      <form onSubmit={transactionSuccess}>
                        <div className="row">
                          <div className="col-sm-11">
                            <label for="name">Card Number</label>
                            <input
                              required
                              type="tel"
                              className="form-control"
                              value={cardData?.number}
                              name="number"
                              maxlength="16"
                              pattern="[0-9]+"
                              onChange={(e) => {
                                handleChange("number", e.target.value);
                              }}
                            ></input>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div className="col-sm-11">
                            <label for="name">Card Name</label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="name"
                              onChange={(e) => {
                                handleChange("name", e.target.value);
                              }}

                            ></input>
                          </div>
                        </div>
                        <br />
                        <div className="row">
                          <div
                            className="col=sm-8"
                            style={{
                              ...{ "padding-right": "12em" },
                              ...{ "padding-left": "1em" }
                            }}
                          >
                          </div>
                          <div className="col=sm-4">
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-4">
                            <label for="month">Expiration Month</label>
                            <br />
                            <select
                              required
                              className="form-control"
                              name="expiry"
                              onChange={(e) => handleChange("expiryMonth", e.target.value)}
                            >
                              <option value=" ">Month</option>
                              <option value="01">Jan</option>
                              <option value="02">Feb</option>
                              <option value="03">Mar</option>
                              <option value="04">April</option>
                              <option value="05">May</option>
                              <option value="06">June</option>
                              <option value="07">July</option>
                              <option value="08">Aug</option>
                              <option value="09">Sep</option>
                              <option value="10">Oct</option>
                              <option value="11">Nov</option>
                              <option value="12">Dec</option>
                            </select>
                          </div>
                          &nbsp;
                          <div className="col-sm-4">
                            <label for="month">Expiration Year</label>
                            <br />
                            <select
                              className="form-control"
                              name="expiry"
                              required
                              onChange={(e) => handleChange("expiryYear", e.target.value)}                            >
                              <option value=" ">Year</option>
                              <option value="21">2021</option>
                              <option value="22">2022</option>
                              <option value="23">2023</option>
                              <option value="24">2024</option>
                              <option value="25">2025</option>
                              <option value="26">2026</option>
                              <option value="27">2027</option>
                              <option value="28">2028</option>
                              <option value="29">2029</option>
                              <option value="30">2030</option>
                            </select>
                          </div>
                          <div className="col-sm-3">
                            <label for="cvv">CVV</label>
                            <br />
                            <input
                              required
                              type="tel"
                              name="cvc"
                              maxlength="3"
                              className=" form-control card"
                              pattern="\d*"
                              onChange={(e) => handleChange("cvc", e.target.value)}

                            ></input>
                          </div>
                        </div>
                        <br />
                        <button
                          type="submit"
                          className='w-100 mt-4 btn'
                        >Submit</button>
                      </form>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4 mt-5 px-4' style={{ borderLeft: '1px solid #dddde6' }}>
            <h6>PRICE DETAILS ({products?.length} Items)</h6>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='my-2'>
                <h6> Total Amount </h6>
              </div>
              <div className='mt-2' style={{ paddingLeft: '102px' }}>
                <h6>{products?.reduce((a, b) => a + b.qty * b.price.toString(), 0)}$</h6>
              </div>
            </div>
          </div>
        </div>
      </UserLayout >
    </div >
  )
}
