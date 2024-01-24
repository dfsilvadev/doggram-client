import { render } from "@testing-library/react";

import { Flex } from "@/components";

describe("Flex Component", () => {
  it("should render the Flex component with default values", () => {
    const { container } = render(
      <Flex>
        <div>Flex item</div>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: "flex",
      "flex-direction": "row",
      "align-items": "flex-start",
      "align-content": "stretch",
      "justify-content": "flex-start",
      "flex-wrap": "wrap",
      gap: 0
    });
  });

  it("should render the Flex component with direction column", () => {
    const { container } = render(
      <Flex direction="column">
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: "flex",
      "flex-direction": "column",
      "align-items": "flex-start",
      "align-content": "stretch",
      "justify-content": "flex-start",
      "flex-wrap": "wrap",
      gap: 0
    });
  });

  it("should render the Flex component with align center and justify space-between", () => {
    const { container } = render(
      <Flex align="center" justify="space-between">
        <div>Flex item</div>
        <div>Flex item</div>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
      "align-content": "stretch",
      "justify-content": "space-between",
      "flex-wrap": "wrap",
      gap: 0
    });
  });

  it("should render the Flex component gap=1rem", () => {
    const { container } = render(
      <Flex gap="1rem">
        <div>Flex item</div>
      </Flex>
    );

    expect(container.firstChild).toHaveStyle({
      display: "flex",
      "flex-direction": "row",
      "align-items": "flex-start",
      "align-content": "stretch",
      "justify-content": "flex-start",
      "flex-wrap": "wrap",
      gap: "1rem"
    });
  });
});
