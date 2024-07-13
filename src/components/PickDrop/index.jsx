import * as S from "./PickDrop.styled";

import { ReactComponent as ChevronDownIcon } from "assets/svg/chevronDown.svg";

const SETTING_OPTIONS = [
  {
    title: "Locations",
    placeholder: "Select your city",
  },
  {
    title: "Date",
    placeholder: "Select your date",
  },
  {
    title: "Time",
    placeholder: "Select your time",
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
              <S.SettingDropDown>
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
