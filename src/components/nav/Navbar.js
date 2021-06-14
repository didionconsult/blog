import React, { PureComponent } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import rem from '../../util/rem'
import { navbarHeight } from '../../util/sizes'
import { mobile } from '../../util/media'
import NavLinks from './NavLinks'
import Social from './Social'
import MobileNavbar from './MobileNavbar'

const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: ${rem(navbarHeight)};
  font-size: ${rem(15)};
  font-weight: 500;
  background: #212121;
  transition: background 300ms ease-out;
  color: whitesmoke;
  a {
    text-decoration: none;
  }
`

const NormalNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px 0px 50px;
  height: 50px;
  ${mobile(css`
    display: none;
  `)}
`

const StartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const EndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const LogoLink = styled(Link).attrs({
    to: '/',
    'aria-label': 'home',
  })`
  display: inline-block;
  vertical-align: center;
  margin-right: ${rem(35)};
  color: currentcolor;
`

class NavBar extends PureComponent {
  render() {
    const {
      onMobileNavToggle,
      isMobileNavFolded,
    } = this.props

    return (
      <StaticQuery query={graphql` query { site { siteMetadata { title } } } `} render={data => (
        <Wrapper>
          <NormalNavbar>
            <StartWrapper>
              <LogoLink>
                <p>{data.site.siteMetadata.title}</p>
              </LogoLink>
              <NavLinks />
            </StartWrapper>
            <EndWrapper>
              <Social />
            </EndWrapper>
          </NormalNavbar>

          <MobileNavbar
            isMobileNavFolded={isMobileNavFolded}
            onMobileNavToggle={onMobileNavToggle}
          />
        </Wrapper>
      )} />
    )
  }
}

export default NavBar