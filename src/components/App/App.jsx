import React from "react"
import AppEven from "../App/AppEven"
import AppOdd from "../App/AppOdd"

//プロダクトの表示をする
//flugがtrueで奇数個目のアプリとし、左右の画像のレイアウトを入れ替える
const App = ( {flug, appName, catchCopy, description} ) => {
  const isOdd = flug;
  if (isOdd) {
    return <AppOdd appName={appName} catchCopy={catchCopy} description={description} />;
  }
  return <AppEven appName={appName} catchCopy={catchCopy} description={description}/>;
}

export default App