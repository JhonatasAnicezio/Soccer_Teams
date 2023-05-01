import { render, screen } from "@testing-library/react"
import App from "../App"
import { Provider } from "react-redux";
import store from "../redux/store";
import { QueryClientProvider } from "react-query";
import { queryCliente } from "../services/ApiLeagues";

describe('test app', () => {
  it('test component app', () => {
    render(
      <QueryClientProvider client={queryCliente}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    );

    const h1 = screen.getByText(/SELEÇÃO DE TIMES/i);
    const card = screen.getByTestId('component-card');

    expect(h1).toBeInTheDocument();
    expect(card).toBeInTheDocument();
  })
})