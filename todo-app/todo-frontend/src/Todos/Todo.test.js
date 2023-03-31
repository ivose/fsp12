//Task 12.14
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

test('todo', () => {
    render(<Todo todo={{ text: "Todo!" }} />);
    expect(screen.getByText(/Todo!/i)).toBeInTheDocument();
});

test('undone', () => {
    render(<Todo todo={{ text: "Undone!", done: false }} />);
    expect(screen.getByText(/Undone!/i)).toBeInTheDocument();
});

test('done', () => {
    render(<Todo todo={{ text: "Done!", done: true }} />);
    expect(screen.getByText(/Done!/i)).toBeInTheDocument();
});
