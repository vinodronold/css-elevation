import React from 'react'
import glamorous from 'glamorous'
import { cssElevationObject } from 'css-elevation'

const App = glamorous.div({
  textAlign: 'center'
})
const AppHeader = glamorous.header({
  backgroundColor: '#222',
  height: 150,
  padding: 20,
  color: 'white'
})
const AppTitle = glamorous.h1({
  fontSize: '1.5em'
})

const Container = glamorous.div({
  paddingTop: 48,
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
})

const Box = glamorous.div(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    margin: '0 60px 80px',
    borderRadius: 3,
    fontSize: '.8em',
    color: '#9E9E9E',
    background: 'white'
  },
  ({ z }) => cssElevationObject({ z })
)

export default () => (
  <App>
    <AppHeader>
      <AppTitle>CSS Elevation</AppTitle>
    </AppHeader>
    <Container>
      {Array(25)
        .fill()
        .map((_, z) => <Box key={z} z={z}>{`cssElevation({ z: ${z} })`}</Box>)}
    </Container>
  </App>
)
