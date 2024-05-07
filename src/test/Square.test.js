import { render, screen } from "@testing-library/react";
import Square from "../components/Square";

describe("Square",()=>{
    it("Should contain a button",()=>{
        render(<Square />);
        const button=screen.getByTestId("square");
        expect(button).not.toBeNull();
    });
})