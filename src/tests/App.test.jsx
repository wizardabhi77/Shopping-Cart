
import {describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App"; 

describe("App component", () => {
    it("renders heading", () => {
        render(<App />);
        expect(screen.getByRole("heading").textContent).toMatch("SHOPKILLA");
    })
    
})

/*
describe("Navigation Bar", () => {

    
    it("Home button lead to Home page", async () => {
        render(<App />);

        const user = userEvent.setup();

        await user.click(screen.getByRole("button", { name: "HOME" }));

        expect(screen.getByTestId('home').textContent).toMatch(/HOME/i);

    })
})

*/