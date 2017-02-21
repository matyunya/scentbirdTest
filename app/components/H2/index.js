import styled from 'styled-components';
import media from 'components/Media';

const H2 = styled.h2`
  font-size: 2em;
  font-family: 'Proxima Nova', Helvetica Neue, sans-serif;
  margin-top: 0.2em;
  margin-bottom: 0;
  ${media.phone`text-align: center; font-size: 1.28em; margin: 0`}
`;

export default H2;
