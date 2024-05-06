import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("App",()=>{


    // it("should render a button",()=>{
    //     render(<App/>);
    //     const button=screen.getAllByRole("button")[0];
    //     expect(button).not.toBeNull();
    // });

    // it("should render 9 buttons",()=>{
    //     render(<App/>);
    //     const buttons=screen.getAllByRole("button");
    //     expect(buttons.length).toBe(9);
    // });

    it("should render Board component",()=>{
        render(<App />);
        const boardElement=screen.getByTestId('board');
        expect(boardElement).toBeDefined();

    });
})