import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

global.localStorage = {
  getItem: jest.fn().mockReturnValue(null),
  setItem: jest.fn(),
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
