import styled from 'styled-components';

const Input = styled.input`
-webkit-input-placeholder {color:#9B9B9B;}
-moz-placeholder          {color:#9B9B9B;}
-moz-placeholder           {color:#9B9B9B;}
-ms-input-placeholder      {color:#9B9B9B;}
font-size: 14px;
width: ${(props) => props.question ? '80%' : '100%'};
line-height: 100%;
margin: 0;
padding: 10px;
outline: none;
border: 1px solid #e6e6e6;

${(props) => props.error && `border-color: #fd6464;
-webkit-box-shadow: inset 0 0 0 1px #fd6464;
box-shadow: inset 0 0 0 1px #fd6464;`}

&:focus {
    background-color: white;
    transition: all 300ms ease;
    border-color: #fd6464;
}
`;

export default Input;
