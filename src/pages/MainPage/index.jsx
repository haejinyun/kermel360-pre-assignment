import AdvertisementSection from "./components/AdvertisementSection";
import PopularCar from "./components/PopularCar";
import RecommendCar from "./components/RecommendCar";
import * as S from "./MainPage.styled";

function MainPage() {
  return (
    <S.Container>
      <AdvertisementSection />
      <S.CarContainer>
        <PopularCar />
        <RecommendCar />
      </S.CarContainer>
      <S.ButtonSection>
        <S.MoreButton>Show more car</S.MoreButton>
        <S.Count>120 Car</S.Count>
      </S.ButtonSection>
    </S.Container>
  );
}

export default MainPage;
