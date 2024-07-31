
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const nav = useNavigate();
 
  useState(() =>{
    axios.get("https://fakestoreapi.com/products")
    .then(res => setData(res.data))

  },[])

  return (
    <div className='el'>
      <div className='header' oncl>My-Shop.az</div>
      {
        data?.map((product, i) => (
          <div onClick={() => nav(`product/${product?.id}`)} key={i} style={{margin: '30px', cursor:'pointer', flex: '1 0 300px'}}>
            <h3>{product?.title}</h3>
            <img src={product?.image} alt="image" style={{width:'40%'}}/>
            <h1 style={{color: 'red'}}>Price: {product?.price}$</h1>
          </div>
        ))
      }
      <div className='footer'>Design by NERV &copy; 2024</div>
    </div>
  )
}

export default Home

