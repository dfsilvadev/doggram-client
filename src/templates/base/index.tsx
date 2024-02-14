import { PropsWithChildren } from "react";

import { Container, Navbar } from "@/components";

const Base = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navbar />
      <Container>{children}</Container>
    </main>
  );
};

export default Base;
