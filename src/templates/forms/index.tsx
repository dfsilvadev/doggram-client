import { PropsWithChildren } from "react";

import { Flex } from "@/components";

import * as S from "./styles";

import logo from "@assets/images/svg/logo.svg";

const Forms = ({ children }: PropsWithChildren) => {
  return (
    <S.Content align="center" justify="center">
      <S.Wrapper>
        <Flex align="center" justify="center">
          <Flex align="center" justify="center" direction="column" gap="0.8rem">
            <S.LogoContent>
              <img
                src={logo}
                alt="logotipo petsgram: composto por um desenho vetor de um cachorro sorrindo e com uma mancha roxa com formato de triângulo em seu olho direito."
                title="logotipo petsgram: composto por um desenho vetor de um cachorro sorrindo e com uma mancha roxa com formato de triângulo em seu olho direito."
                aria-label="logotipo petsgram"
              />
            </S.LogoContent>

            <h1>PetsGram</h1>
          </Flex>
        </Flex>

        <Flex align="center" justify="center">
          {children}
        </Flex>
      </S.Wrapper>
    </S.Content>
  );
};

export default Forms;
