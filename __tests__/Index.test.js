import React from "react";
import ReactDOM from 'react-dom';

 let container = null
 beforeEach(() => {
   container = document.createElement('div')
   document.body.appendChild(container)
 })

 afterEach(() => {
   ReactDOM.unmountComponentAtNode(container)
   container.remove()
   container = null
 })
const APP = () => <h1>Hello!</h1>

  test('index APP component', () => {
      const container = document.createElement('div')
      ReactDOM.render(<APP />, container)
      expect(container.querySelector('h1').textContent).toBe('Hello!')
    });

