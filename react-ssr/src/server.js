import React from 'react'
import {renderToString} from 'react-dom/server'
import Button from './Button'
import jss from 'jss'

export default function render() {
  const app = renderToString(<Button />)

  return '' +
`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Server-side rendering with rehydration</title>
<style type="text/css" id="server-side-styles">
${jss.sheets.toString()}
</style>
</head>
<body>
  <div id="app">${app}</div>
  <script src="./app.js"></script>
</body>
</html>`
}
