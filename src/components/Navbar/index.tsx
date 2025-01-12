import { Link, NavLink } from "react-router-dom";
import { House, MagnifyingGlass, PlusCircle } from "phosphor-react";

import { Avatar, Button, Flex, Input } from "@/components";

import { ROUTES } from "@/utils/common/constant/routes";

import * as S from "./styles";

import logo from "@assets/images/svg/logo.svg";

const Navbar = () => {
  return (
    <S.Header>
      <S.Content>
        <S.Logo>
          <Link to={ROUTES.HOME}>
            <img
              src={logo}
              alt="logotipo petsgram: composto por um desenho vetor de um cachorro sorrindo e com uma mancha roxa com formato de triângulo em seu olho direito."
              title="logotipo petsgram: composto por um desenho vetor de um cachorro sorrindo e com uma mancha roxa com formato de triângulo em seu olho direito."
              aria-label="logotipo petsgram"
            />
          </Link>
        </S.Logo>

        <Input
          type="search"
          name="search"
          placeholder="search"
          icon={<MagnifyingGlass />}
          iconPosition="right"
          role="search"
          aria-label="search photo"
        />

        <S.Nav>
          <Flex gap="2rem" align="center">
            <NavLink to={ROUTES.HOME}>
              <House size={24} weight="bold" aria-label="home link" />
            </NavLink>

            <Button
              icon={<PlusCircle size={24} weight="bold" />}
              minimal
              size="medium"
            />

            <Avatar />
          </Flex>
        </S.Nav>
      </S.Content>
    </S.Header>
  );
};

export default Navbar;
