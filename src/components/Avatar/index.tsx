import { FC } from "react";
import { Link } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { SignOut, User } from "phosphor-react";

import { ENDPOINT } from "@/utils/common/constant/endpoints";

import * as S from "./styles";

import { AvatarProps } from "./types";

const Avatar: FC<AvatarProps> = ({ ...props }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <S.Image {...props} aria-label="avatar" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <S.DropdownMenuContent sideOffset={5} aria-label="profile menu">
          <S.DropdownMenuItem>
            <Link to={ENDPOINT.PROFILE.HOME}>
              <User weight="bold" /> <span>Perfil</span>
            </Link>
          </S.DropdownMenuItem>

          <S.DropdownMenuSeparator />

          <S.DropdownMenuItem>
            <SignOut weight="bold" /> <span>Sign out</span>
          </S.DropdownMenuItem>

          <S.DropdownMenuArrow />
        </S.DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Avatar;
