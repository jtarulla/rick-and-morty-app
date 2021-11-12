import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const MemoryRouterWithInitialRoutes = ({ children, initialRoutes }) => {
    return (
        <MemoryRouter initialEntries={initialRoutes}>
            {children}
        </MemoryRouter>
    );
};

export const renderWithRouter = (ui, options) => {
    const initialRoutes =
        options && options.initialRoutes ? options.initialRoutes : ["/"];

    return render(ui, {
            wrapper: (args) =>
                MemoryRouterWithInitialRoutes({
                    ...args,
                    initialRoutes,
                }),
                ...options,
        }
    );
}

export * from "@testing-library/react";
