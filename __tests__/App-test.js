//__tests__/App-test.js
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'
import App from '../src/components/App'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

describe('Description Test Suite',()=>{
  //does the App Component contain 'Electron'
  test('Description Test 1', () => {
    act(() => {
      render(
        <App />, container
      )
    })
    expect(container.textContent).toContain('Electron')
  });

  //The App component should not contain 'C++'
  test('Description Test 1', () => {
    act(() => {
      render(
        <App />, container
      )
    })
    expect(container.textContent).not.toContain('C++')
  });
});
