import { fireEvent,render } from "@testing-library/react";
import Board from "../components/Board";
describe("Board",()=>{

    it("Should render X on the click of the button",()=>{
        const component=render(<Board/>);
        const square=component.getAllByTestId("square");

        fireEvent.click(square[0]);

        expect(square[0].textContent).toBe("X");
    });

    it("Should render O on 2nd move",()=>{
        const component=render(<Board/>);
        const square=component.getAllByTestId("square");
        
        fireEvent.click(square[0]);
        expect(square[0].textContent).toBe("X");
        fireEvent.click(square[1]);
        expect(square[1].textContent).toBe("O");
    })

    it("Should display token on only empty sq click",async ()=>{
        const component=render(<Board/>);

        const square=component.getAllByTestId("square");

        fireEvent.click(square[0]);

        expect(await square[0].textContent).toBe("X");

        fireEvent.click(square[0]);

        expect(await square[0].textContent).toBe("X");

    })

    it("Should reset the board",()=>{
        const component=render(<Board/>)
        const reset=component.getByTestId("reset");
        expect(reset).not.toBeNull();
    });

    it("should be able to find the winner",async ()=>{
        const component=render(<Board/>);
        const squares=await component.getAllByTestId("square");
        const status=component.getByTestId("status");        

        fireEvent.click(squares[0]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[3]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[6]);
        
        expect(await status.textContent).toBe("Winner: X");
    });
})