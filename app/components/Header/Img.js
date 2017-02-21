import styled from 'styled-components';
import media from 'components/Media';

import NormalImg from 'components/Img';

const Img = styled(NormalImg)`
  width: 137px;
  height: 40px;
  margin: 1em;
  display: block;
  ${media.phone`margin: 0 auto; margin-bottom: 2em;`}
`;

export default Img;
