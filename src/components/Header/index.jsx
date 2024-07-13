import * as S from "./Header.styled";
import { ReactComponent as SearchIcon } from "assets/svg/searchIcon.svg";
// import { ReactComponent as SettingIcon } from "assets/svg/settingIcon.svg";
import { ReactComponent as HeartIcon } from "assets/svg/heartIcon.svg";
import { ReactComponent as BellIcon } from "assets/svg/bellIcon.svg";
import { ReactComponent as UserSettingIcon } from "assets/svg/userSettingIcon.svg";

function Header() {
  return (
    <S.Container>
      <S.Title>KernelRent</S.Title>
      <S.SearchSection>
        <SearchIcon />
        <S.SearchInput placeholder="Search something here" />
        <S.SearchSettingIcon />
      </S.SearchSection>
      <S.UserSection>
        <S.IconBorder>
          <HeartIcon />
        </S.IconBorder>
        <S.IconBorder>
          <BellIcon />
        </S.IconBorder>
        <S.IconBorder>
          <UserSettingIcon />
        </S.IconBorder>
        <S.IconBorder>user</S.IconBorder>
      </S.UserSection>
    </S.Container>
  );
}

export default Header;
