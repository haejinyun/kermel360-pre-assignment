import * as S from "./Header.styled";
import { ReactComponent as SearchIcon } from "assets/svg/searchIcon.svg";
import { ReactComponent as HeartIcon } from "assets/svg/heartIcon.svg";
import { ReactComponent as BellIcon } from "assets/svg/bellIcon.svg";
import { ReactComponent as UserSettingIcon } from "assets/svg/userSettingIcon.svg";

function Header() {
  return (
    <S.Container>
      <a href="/">
        <S.Title>KernelRent</S.Title>
      </a>
      <S.SearchSection>
        <SearchIcon />
        <S.SearchInput placeholder="Search something here" />
        <S.SearchSettingIcon />
      </S.SearchSection>
      <S.UserSection>
        <a href="/">
          <S.IconBorder>
            <HeartIcon
              fill="rgba(89, 103, 128, 1)"
              stroke="rgba(89, 103, 128, 1)"
            />
          </S.IconBorder>
        </a>
        <a href="/">
          <S.IconBorder>
            <BellIcon
              fill="rgba(89, 103, 128, 1)"
              stroke="rgba(89, 103, 128, 1)"
            />
          </S.IconBorder>
        </a>
        <a href="/">
          <S.IconBorder>
            <UserSettingIcon
              fill="rgba(89, 103, 128, 1)"
              stroke="rgba(89, 103, 128, 1)"
            />
          </S.IconBorder>
        </a>
        <a href="/">
          <S.IconBorder>user</S.IconBorder>
        </a>
      </S.UserSection>
    </S.Container>
  );
}

export default Header;
