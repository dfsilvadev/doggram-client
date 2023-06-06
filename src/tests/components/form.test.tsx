import { fireEvent, screen } from "@testing-library/react";
import { renderWithTheme } from "@/utils/tests";

import { Button, Form, Input } from "@/components";
import { FormEvent } from "react";

describe("Form", () => {
  it("should render currectly", () => {
    renderWithTheme(
      <Form aria-label="sign up form">
        <Input
          initialValue=""
          label="E-mail"
          name="email"
          placeholder="john.doe@gmail.com"
        />

        <Button type="submit">Submit</Button>
      </Form>
    );

    expect(
      screen.getByRole("form", { name: "sign up form" })
    ).toBeInTheDocument();
  });

  it("render title when passed", () => {
    renderWithTheme(
      <Form aria-label="sign up form" title="Title Form">
        <Input
          initialValue=""
          label="E-mail"
          name="email"
          placeholder="john.doe@gmail.com"
        />

        <Button type="submit">Submit</Button>
      </Form>
    );

    expect(
      screen.getByRole("heading", { name: /title form/i })
    ).toBeInTheDocument();
  });

  it("test form submit", () => {
    const handleSubmit = jest.fn((evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
    });

    renderWithTheme(
      <Form aria-label="sign up form" onSubmit={handleSubmit}>
        <Input
          initialValue=""
          label="E-mail"
          name="email"
          placeholder="john.doe@gmail.com"
        />

        <Button type="submit">Submit</Button>
      </Form>
    );

    fireEvent.change(screen.getByPlaceholderText("john.doe@gmail.com"), {
      target: { value: "john.doe@gmail.com" }
    });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
