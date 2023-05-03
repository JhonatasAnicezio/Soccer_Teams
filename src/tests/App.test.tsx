import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import store from '../redux/store';
import App from '../App';

const renderComponent = () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={ queryClient }>
      <Provider store={ store }>
        <App />
      </Provider>
    </QueryClientProvider>
  );
}

describe('test app', () => {
  it('test component app', () => {
    renderComponent();

    const h1 = screen.getByText(/SELEÇÃO DE TIMES/i);
    const card = screen.getByTestId('component-card');

    expect(h1).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  });
});