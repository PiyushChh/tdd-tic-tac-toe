import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App",()=>{

    it("should render Board component",()=>{
        render(<App />);
        const boardElement=screen.getByTestId('board');
        expect(boardElement).toBeDefined();

    });
})