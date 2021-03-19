//__tests__/Button-test.js
// Demonstration On how to interact with react components using jest
import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'

import Button from '../src/components/Button'

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

describe('Button Test Suite',()=> {
  test('Button Test 1', () => {
    act(() => {
      render(
        <Button />, container
      )
    });

    //label should not be rendered yet
    const label = container.querySelector('p');
    expect(label).toBeNull();
  });

  test('Button Test 2', () => {
    act(() => {
      render(
        <Button />, container
      )
    });
    //get button object to click
    const button = container.querySelector('button');

    // press the button
    act(() => {
      button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    });

    //label should re-render and tell the user the button has been pressed 1 time
    const label = container.querySelector('p');
    expect(label.textContent).toContain('1');
  });

});
