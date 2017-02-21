import styled from 'styled-components';
import media from 'components/Media';

const H3 = styled.h3`
  font-size: 1.2em;
  margin-top: 0.2em;
  margin-bottom: 0;
  font-weight: 400;
  ${media.phone`text-align: center; font-size: 1em; margin: 0`}
`;

export default H3;
