import React from 'react'
import { Link } from 'react-router-dom'

const Coin = ({coin}) => {

    let classy = "fas align-middle mr-1 fa-sort-"
    const getarrow = () =>{
        classy += coin.price_change_percentage_24h<=0?"down":"up"
    }


  
    return (
       <Link to='/coindetail' className="text-decoration-none my-1 coin">
           <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
               <img src={coin.image} alt="" className='coinlist-image'/>
               <span className="text-decoration-none">{coin.current_price}</span>
               <span className={coin.price_change_percentage_24h<0?"text-danger mr-2":"text-success mr-2"}>
               <i className={coin.price_change_percentage_24h<0?"fas align-middle mr-1 fa-sort-down":"fas align-middle mr-1 fa-sort-up"}></i>{Math.abs(coin.price_change_percentage_24h)}
               </span>

               <i className="delete-icon far fa-times-circle text-danger"></i>

           </li>
       </Link>
    )
}

export default Coin
