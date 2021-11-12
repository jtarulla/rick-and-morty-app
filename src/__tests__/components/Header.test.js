import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'testUtils/renderWith';
import Header from 'components/Header';

describe('Header component', () => {
    it('renders', () => {
        const screen = renderWithRouter(<Header />);

        expect(screen).toMatchSnapshot();
    });

    it('renders with the right links', () => {
        const screen = renderWithRouter(<Header />)
        const logo = screen.getByRole('link', { name: 'rick-and-morty-logo'});
        const github = screen.getByRole('link', { name: 'github-logo'});

        expect(logo).toHaveAttribute('href', '/');
        expect(github).toHaveAttribute('href', 'https://github.com/jtarulla/rick-and-morty-app');
    });
})
