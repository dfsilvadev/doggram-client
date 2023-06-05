import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlass, PlusCircle } from "phosphor-react";

import { Avatar, Button, Input } from "@/components";

import { endpoint } from "@/utils/common/constant/endpoints";

import * as S from "./styles";

import logo from "@assets/images/svg/logo.svg";

const Navbar = () => {
  return (
    <S.Header>
      <S.Content>
        <S.Logo>
          <Link to={endpoint.HOME}>
            <img
              src={logo}
              alt="logotipo doggram: composto por um desenho vetor de um cachorro sorrindo e com uma mancha roxa com formato de triângulo em seu olho direito."
              title="logotipo doggram: composto por um desenho vetor de um cachorro sorrindo e com uma mancha roxa com formato de triângulo em seu olho direito."
              aria-label="logotipo doggram"
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
          <NavLink to={endpoint.HOME}>
            <MagnifyingGlass size={24} weight="bold" aria-label="home link" />
          </NavLink>

          <Button
            icon={<PlusCircle size={24} weight="bold" />}
            minimal
            size="medium"
          />

          <Avatar src="https://avatars.githubusercontent.com/u/16245261?v=4" />
        </S.Nav>
      </S.Content>
    </S.Header>
  );
};

export default Navbar;
