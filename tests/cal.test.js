import { describe, expect, test } from "vitest";
import {
    add,
    subtract,
    multiply,
    divide,
    percentage
} from "../script.js";


describe("Calculator", () => {

    test("adds two numbers", () => {
        expect(add(5, 3)).toBe(8);
    });

    test("subtracts two numbers", () => {
        expect(subtract(10, 4)).toBe(6);
    });

    test("multiplies two numbers", () => {
        expect(multiply(5, 4)).toBe(20);
    });

    test("divides two numbers", () => {
        expect(divide(20, 5)).toBe(4);
    });

    test("calculates percentage", () => {
        expect(percentage(50)).toBe(0.5);
    });

    test("throws error when dividing by zero", () => {
        expect(() => divide(10, 0))
            .toThrow("Cannot divide by zero");
    });

});