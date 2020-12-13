import { render, screen } from '@testing-library/react';
import App from './App';

// Foo will be MOCKED. So instead of outputting Foo - the component will output text 'Mock'.

jest.mock("./components/Foo");

test('renders learn react link', () => {

 
  render(<App />);
  const linkElement = screen.getByText(/Mock/i);
  expect(linkElement).toBeInTheDocument();
});
