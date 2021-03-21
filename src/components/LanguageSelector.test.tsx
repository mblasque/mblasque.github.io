import { render, screen } from "@testing-library/react";
import LanguageSelector from "./LanguageSelector";

const renderPage = () => {
  render(<LanguageSelector />);
};

describe("Language Selector", () => {
  test("Should render USA and Brazil's flag", () => {
    renderPage();

    const br = screen.getByRole("img", { name: "br-flag" });
    const us = screen.getByRole("img", { name: "us-flag" });

    expect(br).toBeInTheDocument();
    expect(us).toBeInTheDocument();
  });
});
