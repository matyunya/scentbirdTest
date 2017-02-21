import React from 'react';
import styled from 'styled-components';

import Img from 'components/Img';
import shipping from './shipping.png';

const ImgCenter = styled(Img)`
display: block;
margin: 0 auto;
padding-bottom: 3em;
padding-top: 0;
height: 240px;
`;
const Wrapper = styled.div`
padding: 1em;
padding-bottom: 3em;
font-size: 14px;
`;

const ShippingBlock = () =>
      (
        <Wrapper>
          <span><ImgCenter src={shipping} alt="shipping" /></span>
          <span>You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.</span>
        </Wrapper>
    );

export default ShippingBlock;
