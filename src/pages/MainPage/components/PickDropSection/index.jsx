import PickDrop from "components/PickDrop";
import * as S from "./PickDropSection.styled";
import { ReactComponent as SwitchIcon } from "assets/svg/switch.svg";

function PickDropSection() {
  return (
    <S.Container>
      <PickDrop pickDropType={"Pick - Up"} isChecked={true} />
      <S.SwitchButton>
        <SwitchIcon stroke="white" />
      </S.SwitchButton>
      <PickDrop pickDropType={"Drop - Off"} isChecked={true} />
    </S.Container>
  );
}

export default PickDropSection;
