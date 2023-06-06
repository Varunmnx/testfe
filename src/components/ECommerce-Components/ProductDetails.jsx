import React from 'react'
import "./product-details.css"


const ProductDetails = ({name , campaigns , channels , lastEditBy , timeStamp}) => {
  return (
    <div className='product-details-wrapper'>
      <div className='padding-21 product-details-container'>
         <div className='product-details-tb'>
              {/* product name */}
              <span className='prod-name'style={{color:"black"}} >{name}</span>   
         </div>

         <div className='product-details-tb'>
             <span >Campaigns</span>
             <span>{campaigns}</span>
         </div>
         <div className='product-details-tb'>
            <span>Channels</span>
            <span>{channels}</span>
         </div>
         <div className='product-details-tb'>
             <span>Last Edited By</span>
             <span>{lastEditBy}</span>
         </div>
         <div className='product-details-tb'>
            <span>Last Edited on</span>
            <span>{timeStamp}</span>
         </div>
      </div>
    </div>
  )
}

export default ProductDetails