import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { SignOut, User } from "phosphor-react";

import { logout, reset } from "@/slices/authSlice";

import { ROUTES } from "@/utils/common/constant/routes";

import * as S from "./styles";

import { AvatarProps } from "./types";

const Avatar: FC<AvatarProps> = ({ src, ...props }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate(ROUTES.SIGNIN);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {src ? (
          <S.Image {...props} aria-label="avatar" />
        ) : (
          <User
            size={24}
            weight="bold"
            style={{
              cursor: "pointer"
            }}
          />
        )}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <S.DropdownMenuContent sideOffset={5} aria-label="profile menu">
          <S.DropdownMenuItem>
            <Link to={ROUTES.PROFILE.HOME}>
              <User weight="bold" /> <span>Perfil</span>
            </Link>
          </S.DropdownMenuItem>

          <S.DropdownMenuSeparator />

          <S.DropdownMenuItem>
            <button
              type="button"
              aria-label="sign out button"
              onClick={handleLogout}
            >
              <SignOut weight="bold" />
              Sign out
            </button>
          </S.DropdownMenuItem>

          <S.DropdownMenuArrow />
        </S.DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export default Avatar;
