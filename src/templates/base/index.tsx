import { PropsWithChildren } from "react";

import { Container, Navbar } from "@/components";

import * as S from "./styles";

const Base = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Navbar />
      <Container>
        <S.Content>{children}</S.Content>
      </Container>
    </main>
  );
};

export default Base;
