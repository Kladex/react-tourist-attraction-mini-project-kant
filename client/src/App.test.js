import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
// import axios from "axios";

test("counter increase when the button increase is click", () => {
  //   const apiCall = jest.spyOn(axios, "post").mockImplementationOnce(() => {
  //     return Promise.resolve({
  //       message: "Post has been created.",
  //     });
  //   });
  render(<App />);
  const searchInputText = screen.getByPlaceholderText("หาที่เที่ยวแล้วไปกัน");
  //   const tagList = screen.getAllByRole("list");
  fireEvent.change(searchInputText, {
    target: { value: "เกาะ" },
  });

  expect(searchInputText.value).toEqual("เกาะ");
});
