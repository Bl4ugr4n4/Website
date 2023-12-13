import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { listProducts } from "../../Redux/Redux";
import { isAuthenticated } from "../Auth/auth";
import { Error, Success } from "../Messages/messages";
import './ProductCard.css'

export const ProductCard = ({ product }) => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleCart = async () => {
    if (isAuthenticated()) {
      if (product.qty === 0) {
        Error('Product out of stock!')
      } else {
        setLoading(true);
        const requestData = {
          title: product?.title,
          price: product?.price,
          productId: product?._id,
          userId: isAuthenticated()?._id,
          seller: product?.seller,
          category: product?.category,
          image: product?.productPictures[0],
          qty: 1,
          totalQty: product?.qty
        };
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/cart/add-to-cart`, requestData, {
          headers: {
            'authorization': 'Bearer ' + localStorage.getItem('token')
          }
        }).then(res => {
          setLoading(false);
          if (res.status === 200) {
            Success(res.data.successMessage);
            dispatch(listProducts(isAuthenticated()?._id));
          }
          else {
            Error(res.data.errorMessage)
          }
        })
      }
    } else {
      Error("Please login to buy");
    }
  }

  return (
    <>
      <div className="m-2 product-card">
        <Link to={"/product/" + product?._id}>
          <img
            src={
              product?.productPictures && product?.productPictures[0]?.url
            }
            alt={product.title}
            className="w-100"
            style={{ height: "323px" }}
          />
        </Link>
        <div className="desc mt-2">
          <p className="title">{product?.title}</p>
          <p className="para" dangerouslySetInnerHTML={{ __html: product?.description }}></p>
          <div className="mt-3 features">
            {
              product?.features?.map((feature, index) => {
                return (
                  <p key={index}>{feature}</p>
                )
              })
            }
          </div>
        </div>
        <div className="last">
          <p className="price">${product?.price}</p>
          <button className="btn" onClick={handleCart}>Buy Now</button>
        </div>
      </div>
    </>
  );
};
