import React from 'react'
import { Button } from '../styles/Button'
import styled from 'styled-components'
import { BsEmojiSunglasses, BsCameraFill } from "react-icons/bs";
import SecondHeader from './SecondHeader';



const Virtualtryon = ({product}) => {

  return (
  
    <Wrapper>
     <SecondHeader/>
    <div className="virtual-container">
        <h2 className="virtual-text"> <BsEmojiSunglasses /> Probiere {product.product_name} virtuell an</h2>
        <div className="vertical-center">
        <a href='https://seashell-app-4lcie.ondigitalocean.app/' target='blank'>
          <Button> <BsCameraFill /> Try On Virtually</Button></a>
          </div>
    
    {/* <div className="Iframe">
      <h2>Iframe</h2>
      <iframe src="https://seashell-app-4lcie.ondigitalocean.app/"  width={500} height={500} title='A youtube video on React hooks'></iframe>
    </div> */}
    </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`



`;
export default Virtualtryon;