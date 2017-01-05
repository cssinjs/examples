import React from 'react'
import {renderToString} from 'react-dom/server'
import {SheetsRegistryProvider, SheetsRegistry} from 'react-jss'
import Button from './Button'

export default function render() {
  const sheets = new SheetsRegistry()

  const app = renderToString(
    <SheetsRegistryProvider registry={sheets}>
      <Button />
    </SheetsRegistryProvider>
  )

  return '' +
`<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Server-side rendering with rehydration</title>
    <link rel="stylesheet" href="../../btn.css" />
    <style type="text/css" id="server-side-styles">
      ${sheets.toString()}
    </style>
  </head>
  <body>
    <a href="https://github.com/cssinjs/examples/tree/gh-pages/react-ssr" class="btn" target="_blank">View on Github</a>
    <div id="app">${app}</div>
    <script src="./app.js"></script>
  </body>
</html>`
}
