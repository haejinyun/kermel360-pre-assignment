import * as S from "./PickDrop.styled";

import { ReactComponent as ChevronDownIcon } from "assets/svg/chevronDown.svg";

const SETTING_OPTIONS = [
  {
    title: "Locations",
    placeholder: "Select your city",
    width: "126px",
  },
  {
    title: "Date",
    placeholder: "Select your date",
    width: "134px",
  },
  {
    title: "Time",
    placeholder: "Select your time",
    width: "130px",
  },
];

function PickDrop({ pickDropType, isChecked }) {
  return (
    <S.Container>
      <S.RadioLabel>
        <S.RadioInput type="radio" defaultChecked={isChecked} />
        <S.RadioText>{pickDropType}</S.RadioText>
      </S.RadioLabel>
      <S.SettingContainer>
        {SETTING_OPTIONS.map((option, index) => (
          <S.SettingSection key={option.title}>
            <S.Setting>
              <S.SettingTitle>{option.title}</S.SettingTitle>
              <S.SettingDropDown width={option.width}>
                <S.SettingValue>{option.placeholder}</S.SettingValue>
                <ChevronDownIcon />
              </S.SettingDropDown>
            </S.Setting>
            {index !== SETTING_OPTIONS.length - 1 && <S.Division />}
          </S.SettingSection>
        ))}
      </S.SettingContainer>
    </S.Container>
  );
}

export default PickDrop;
