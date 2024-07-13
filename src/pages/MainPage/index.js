import PopularCar from "./components/PopularCar";
import RecommendCar from "./components/RecommendCar";
import * as S from "./MainPage.styled";

function MainPage() {
  return (
    <S.Container>
      <PopularCar />
      <RecommendCar />
    </S.Container>
  );
}

export default MainPage;
