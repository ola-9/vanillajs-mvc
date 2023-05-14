import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import userEvent from '@testing-library/user-event';
import testingLibrary from '@testing-library/dom';
import run from '../src/application.js';

const { screen } = testingLibrary;

const options = {
  parser: 'html',
  htmlWhitespaceSensitivity: 'ignore',
  tabWidth: 4,
};

const getFormattedHTML = () => prettier.format(document.body.innerHTML, options);

beforeEach(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'index.html')).toString();
  document.body.innerHTML = initHtml;
  run();
});

test('#application1', async () => {
  expect(getFormattedHTML()).toMatchSnapshot();

  const javascriptTab = await screen.getByTestId('javascript-main-tab');
  const pythonTab = await screen.getByTestId('python-main-tab');

  await userEvent.click(pythonTab);
  expect(getFormattedHTML()).toMatchSnapshot();

  await userEvent.click(javascriptTab);
  expect(getFormattedHTML()).toMatchSnapshot();

  await userEvent.click(pythonTab);
  expect(getFormattedHTML()).toMatchSnapshot();
});

test('#application2', async () => {
  expect(getFormattedHTML()).toMatchSnapshot();

  const javascriptTab = await screen.getByTestId('javascript-secondary-tab');
  const pythonTab = await screen.getByTestId('python-secondary-tab');

  await userEvent.click(pythonTab);
  expect(getFormattedHTML()).toMatchSnapshot();

  await userEvent.click(javascriptTab);
  expect(getFormattedHTML()).toMatchSnapshot();

  await userEvent.click(pythonTab);
  expect(getFormattedHTML()).toMatchSnapshot();
});

test('#application3', () => {
  expect(getFormattedHTML()).toMatchSnapshot();
});
