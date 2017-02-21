import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img';
import item from './item.png';

const ImgCenter = styled(Img)`
display: block;
margin: 0 auto;
height: 284px;
padding: 3em;
padding-top: 0;
`;
const Wrapper = styled.div`
padding: 2em;
padding-bottom: 1em;
border: 1px solid #E6E6E6;
font-size: 14px;
`;
const Hr = styled.hr`
border: none;
color: #E6E6E6;
background-color: #E6E6E6;
height: 1px;
margin-bottom: 0.5em;
`;
const Row = styled.span`
width: 50%;
display: inline-block;
line-height: 2em;
`;
const LeftRow = styled(Row)`
text-align:left;
`;
const RightRow = styled(Row)`
text-align:right;
`;
const Discount = styled(RightRow)`
color: #FF3A8E;
`;
const Total = styled.div`
font-weight: 700;
letter-spacing: 1px;
font-size: 16px;
`;
const A = styled.a`
text-decoration: none;
border-bottom: 1px dashed black;
color: #FF3A8E;
cursor: hand;
cursor: pointer;
`;
const Coupon = styled.div`
padding-top: 2em;
padding-bottom: 1em;
font-size: 1em;
`;
const Checkbox = styled.input`
margin-left: 0.3em;
`;

const LeftBlock = () =>
      (
        <Wrapper>
          <div><ImgCenter src={item} alt="item" /><Hr /></div>
          <div>
            <div>
              <LeftRow>Monthly subscription</LeftRow>
              <RightRow>$14.95</RightRow>
            </div>
            <div>
              <LeftRow>Shipping</LeftRow>
              <RightRow>FREE</RightRow>
            </div>
            <div>
              <LeftRow>Tax</LeftRow>
              <RightRow>$2.35</RightRow>
            </div>
            <div>
              <LeftRow>Discount</LeftRow>
              <Discount>-$5</Discount>
            </div>
            <div>
              <LeftRow>Credit (balance $100)</LeftRow>
              <RightRow>$50 <Checkbox type="checkbox" /></RightRow>
            </div>
            <Hr />
            <Total>
              <LeftRow>TOTAL</LeftRow>
              <RightRow>$25.00</RightRow>
            </Total>
            <Coupon>Have a <A>coupon code?</A></Coupon>
          </div>
        </Wrapper>
    );

export default LeftBlock;
