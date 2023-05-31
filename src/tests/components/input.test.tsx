import { act, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EnvelopeSimple } from "phosphor-react";

import { Input } from "@/components";

import { renderWithTheme } from "@/utils/tests/renderWithTheme";

describe("Input", () => {
  it("should renders with label", () => {
    const { container } = renderWithTheme(<Input label="Label" name="Field" />);

    expect(screen.getByLabelText("Label")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should renders without label", () => {
    renderWithTheme(<Input />);

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("should renders with placeholder", () => {
    renderWithTheme(<Input placeholder="hey you" />);

    expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument();
  });

  it("should changes its value when typing", async () => {
    const onInput = jest.fn();

    renderWithTheme(<Input onInput={onInput} label="Label" name="Label" />);

    const input = screen.getByRole("textbox");
    const text = "This is my new text";

    act(() => {
      userEvent.type(input, text);
    });

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it("should is accessible by tab", () => {
    renderWithTheme(<Input label="Label" name="Label" />);

    const input = screen.getByLabelText("Label");

    expect(document.body).toHaveFocus();

    act(() => {
      userEvent.tab();
    });

    expect(input).toHaveFocus();
  });

  it("should render an icon", () => {
    renderWithTheme(<Input icon={<EnvelopeSimple data-testid="icon" />} />);

    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("should render an iconon the right side", () => {
    renderWithTheme(
      <Input
        icon={<EnvelopeSimple data-testid="icon" />}
        iconPosition="right"
      />
    );

    expect(screen.getByTestId("icon").parentElement).toHaveStyle({
      order: 1
    });
  });

  it("should does not changes its value when disabled", async () => {
    const onInput = jest.fn();
    renderWithTheme(
      <Input onInput={onInput} label="Input" name="Input" disabled />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "This is my new text";

    act(() => {
      userEvent.type(input, text);
    });

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it("should is not accessible by tab when disabled", () => {
    renderWithTheme(<Input label="Input" name="Input" disabled />);

    const input = screen.getByLabelText("Input");
    expect(document.body).toHaveFocus();

    act(() => {
      userEvent.tab();
    });

    expect(input).not.toHaveFocus();
  });

  it("should renders with error", () => {
    const { container } = renderWithTheme(
      <Input
        icon={<EnvelopeSimple data-testid="icon" />}
        label="Input"
        name="Input"
        error="Error message"
      />
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
