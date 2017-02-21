import styled from 'styled-components';
import media from 'components/Media';

const H4 = styled.h4`
  font-size: 1em;
  color: #FF3A8E;
  font-weight: 200;
  margin: 0;
  ${media.phone`text-align: center; margin: 0 auto; margin-top:1em; margin-bottom: 2em;`}
`;

export default H4;
