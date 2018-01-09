import React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { cssElevation } from 'css-elevation'

const App = styled.div`
  text-align: center;
`
const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppTitle = styled.h1`
  font-size: 1.5em;
`
const AppSubTitle = styled.h2`
  s: 1em;
`
const Link = styled.a`
  color: white;
  text-decoration: none;
`
const Container = styled.div`
  padding-top: 48;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
`

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 100px;
  margin: 0 60px 80px;
  padding: 5px;
  border-radius: 3px;
  font-size: 0.8em;
  color: #9e9e9e;
  background: white;
  ${props =>
    css`
      ${cssElevation({ ...props })};
    `};
`
const bounce = keyframes`
from {
  ${cssElevation({ z: 1 })}
}
to {
  ${cssElevation({ z: 24 })}
}
`
const AnimatedBox = styled(Box)`
  animation: ${bounce} 0.5s ease-in alternate infinite;
`
export default () => (
  <App>
    <AppHeader>
      <AppTitle>CSS Elevation</AppTitle>
      <AppSubTitle>Examples</AppSubTitle>
      <Link href={'https://github.com/vinodronold/css-elevation'}>
        View repo on Github
      </Link>
    </AppHeader>
    <AppSubTitle> Animated </AppSubTitle>
    <Container>
      <AnimatedBox> {`I'm Bouncing`} </AnimatedBox>
    </Container>
    <AppSubTitle> Default </AppSubTitle>
    <Container>
      {Array(25)
        .fill()
        .map((_, z) => <Box key={z} z={z}>{`elevation({ z: ${z} })`}</Box>)}
    </Container>
    <AppSubTitle> With Color </AppSubTitle>
    <Container>
      {Array(25)
        .fill()
        .map((_, z) => (
          <Box
            key={z}
            z={z}
            r={255}
            g={60}
            b={60}
          >{`elevation({ z: ${z}, r:255, g:60, b:60})`}</Box>
        ))}
    </Container>
  </App>
)
