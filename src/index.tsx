import * as React from 'react';
import * as ReactDomClient from 'react-dom/client';
import './index.css';
import { App } from './App'

const rootElement = document.getElementById('container')

if (!rootElement) {
  throw new Error("Root element with id 'container' not found!")
}

const root = ReactDomClient.createRoot(
  rootElement
)

root.render(
  <App />,
)

declare const module: any;

if (module.hot) {
  module.hot.accept();
}
