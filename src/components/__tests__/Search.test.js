import { fireEvent, render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should render the body component with search",async ()=>{
    await act(async ()=> render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const searchBtn=screen.getByRole("button", {name: "Search"});

    const searchInput= screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target:{value:"burger"}});

    fireEvent.click(searchBtn);

    const card=screen.getAllByTestId("resCard");

    expect(card.length).toBe(21);
    
});