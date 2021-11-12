import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'testUtils/renderWith';
import { fireEvent, screen } from '@testing-library/react';
import Filter from 'components/Filter';

const setup = async () => {
    const utils = await renderWithRouter(<Filter handleChange={jest.fn} />);

    const input = await screen.findByTestId('input-filter');

    return {
        input,
        ...utils,
    }
}

describe('Filter component', () => {
    it('renders', async () => {
        const { input } = await setup();

        expect(input).toMatchSnapshot();
    });

    it('changes input value', async () => {
        const { input } = await setup();

        fireEvent.change(input, {target: {value: 'rick'}})
        expect(input.value).toBe('rick')
    })
})