import styled from 'styled-components';

const Label = styled.label`
padding: 10px 0;
position: relative;
background: ${(props) => props.inverted ? 'white' : '#FAFAFA'};
`;

export default Label;
