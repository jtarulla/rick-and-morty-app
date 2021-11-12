import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'testUtils/renderWith';
import HomePage from 'pages/homePage';

describe('Home page', () => {
    it('renders', () => {
        const screen = renderWithRouter(<HomePage />);

        expect(screen).toMatchSnapshot();
    });
})
