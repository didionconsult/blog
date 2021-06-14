import styled, { css } from 'styled-components'

import rem from '../../util/rem'
import { resetInput } from '../../util/form'
import { navbarHeight } from '../../util/sizes'

const NavButton = styled.button`
  ${resetInput}
  flex: 0 0 auto;
  min-width: ${rem(navbarHeight)};
  height: 16px;
  color: white;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  ${p => p.active && css`
    background: rgba(0, 0, 0, 0.07);
  `}
`

export default NavButton