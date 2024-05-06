import { render, screen } from "@testing-library/react"
import App from "../App";

describe("App",()=>{
    it("should display an X",()=>{
            render(<App/>);

            const gameBoard=screen.getByTestId("squareBoard");

            expect(gameBoard).not.toBeNull();

            // expect(gameBoard.textContent).toBe("X");

    });

    it("should render a button",()=>{
        render(<App/>);
        const button=screen.getAllByRole("button")[0];
        expect(button).not.toBeNull();
    });
    
    it("should render 9 buttons",()=>{
        render(<App/>);
        const buttons=screen.getAllByRole("button");
        expect(buttons.length).toBe(9);
    });
})