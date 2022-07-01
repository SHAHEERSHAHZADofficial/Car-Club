
import React from 'react'
import { MainRoute } from './Source/Config/Route'
import { Provider } from 'react-redux'
import Store from "./Source/Store/index"
import FeedBack from './Source/Screens/Screen/FeedBack'
import PayWithCard from './Source/Screens/Screen/PayWithCard'
const App = () => {
  return (
    <Provider store={Store}>
      <MainRoute />
    </Provider>
  )
}

export default App

