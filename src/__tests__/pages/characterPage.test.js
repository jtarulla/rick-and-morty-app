import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'testUtils/renderWith';
import CharacterPage from 'pages/characterPage';

describe('Character page', () => {
    it('renders', () => {
        const screen = renderWithRouter(<CharacterPage />);

        expect(screen).toMatchSnapshot();
    });
})
