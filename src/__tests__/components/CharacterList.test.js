import '@testing-library/jest-dom/extend-expect';
import { renderWithRouter } from 'testUtils/renderWith';

import CharacterList from 'components/CharacterList';
import { characterList, loading } from 'testUtils/mocks/characters'

const setup = async (isLoading = loading.false) => {
    const wrapper = await renderWithRouter(
        <CharacterList
            characters={characterList}
            loading={isLoading}
        />
    );

    return {wrapper};
}

describe('CharacterList component', () => {
    it('renders', async () => {
        const { input } = await setup();

        expect(input).toMatchSnapshot();
    });

    it('renders Card child component', async () => {
        const { wrapper } = await setup();
        const childComponents = await wrapper.findAllByTestId('character-card');

        expect(childComponents.length).toEqual(3);
    });

    it('renders Loading component if loading is true', async () => {
        const { wrapper } = await setup(loading.true);
        const loadingComponent = wrapper.getAllByTitle('Loading...', {exact: false});

        expect(loadingComponent).toBeTruthy();
    });
})