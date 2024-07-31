
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setDetail(res.data));
  }, [id]);

  
  return (
    <div>
      <div className='header'>My-Shop.az</div>
      {
        <div>
          <h2>
            {detail?.title}
          </h2>
          <h2>
            {detail?.category}
          </h2>
          <img src={detail?.image} alt="image" style={{ width: "45%" }} />
          <p>
            Product rating: {detail?.rating.rate}, Product count:{" "}
            {detail?.rating.rate}
          </p>
          <h2>{detail?.description}</h2>
          <h1 style={{ color: "red" }}>Price: {detail?.price}$</h1>
        </div>
      }
      <div className='footer'>Design by NERV &copy; 2024</div>
    </div>
  );
};

export default Product;
