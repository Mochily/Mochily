import React from "react"
import AppEven from "../App/AppEven"
import AppOdd from "../App/AppOdd"

const App = ( {flug, appName, catchCopy, description} ) => {
  const isOdd = flug;
  if (isOdd) {
    return <AppOdd appName={appName} catchCopy={catchCopy} description={description} />;
  }
  return <AppEven appName={appName} catchCopy={catchCopy} description={description}/>;
}

export default App