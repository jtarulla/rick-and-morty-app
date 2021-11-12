import '@testing-library/jest-dom/extend-expect';
import { fireEvent } from '@testing-library/react';

import { renderWithRouter } from 'testUtils/renderWith';
import Pagination from 'components/Pagination';
import HomePage from 'pages/homePage';
import { loading, info } from 'testUtils/mocks/characters'

const setup = async (isLoading = loading.false, handlePage = jest.fn) => {
    const wrapper = await renderWithRouter(
        <Pagination
            handlePage={handlePage}
            info={info}
            loading={isLoading}
        />
    );

    return {wrapper};
}

describe('Pagination component', () => {
    it('renders', async () => {
        const { wrapper } = await setup();
        const component = await wrapper.findByTestId('pagination-component');
        
        expect(component).toBeTruthy();
        expect(wrapper).toMatchSnapshot();
    });

    it('doesn\'t renders if loading is true', async () => {
        const { wrapper } = await setup(loading.true);

        expect(wrapper.length).toBeFalsy();
    });

    it('changes the page number when click on next button', async () => {
        const screen = renderWithRouter(<HomePage />);
        await setup(loading.false);
        const paginationButton = screen.getByText('next', { exact: false });

        const event = fireEvent.click(paginationButton);
        expect(event).toBe(true);
      });
})
