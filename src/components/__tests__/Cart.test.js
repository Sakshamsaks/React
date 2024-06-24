import { act } from "react"
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch=jest.fn(() => {
    return Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA)
    });
});

it("Should load Restaurant Menu Component",async () =>{
    await act(async () => render(
        <Provider store={appStore}>
            <RestaurantMenu />
        </Provider>
    ));

    const accordionHeader=screen.getByText("Veg Pizza (14)");

    fireEvent.click(accordionHeader);
});