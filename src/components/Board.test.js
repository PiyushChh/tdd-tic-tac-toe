import { fireEvent, getAllByRole,render, screen } from "@testing-library/react";
import Board from "./Board";
describe("Board",()=>{
    it("Should render X on the click of the button",()=>{
        render(<Board/>);
        const square=screen.getAllByRole("button");
        fireEvent.click(square[0]);
        expect(square[0].textContent).toBe("X");
    });

    it("Should render 0 on 2nd move",()=>{
        render(<Board/>);
        const square=screen.getAllByRole("button");
        fireEvent.click(square[0]);
        expect(square[0].textContent).toBe("X");
        fireEvent.click(square[1]);
        expect(square[1].textContent).toBe("O");
    })
})