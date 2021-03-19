//__tests__/Description-test.js
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'

import Description from '../src/components/Description'

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
})

describe('Description Test Suite',()=>{
  //Does the Description component contain 'basic-electron-react-boilerplate'
  test('Description Test 1', () => {
    act(() => {
      render(
        <Description />, container
      )
    });

  expect(container.textContent).toContain('basic-electron-react-boilerplate')
  });

  //The Description Component should not contain 'python'
  test('Description Test 2', () => {
    act(() => {
      render(
        <Description />, container
      )
    });

    expect(container.textContent).not.toContain('python')
  });

});
