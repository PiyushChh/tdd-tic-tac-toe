import { fireEvent, getAllByRole, render, screen } from "@testing-library/react";
import Square from "./Square";
import Board from "./Board";
describe("Square",()=>{
    it("Should contain a button",()=>{
        render(<Square />);
        const button=screen.getByRole("button");
        expect(button).not.toBeNull();
    });
})