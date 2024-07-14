import AdvertisementSection from "./components/AdvertisementSection";
import PickDropSection from "./components/PickDropSection";
import PopularCar from "./components/PopularCarSection";
import RecommendCar from "./components/RecommendCarSection";
import * as S from "./MainPage.styled";

function MainPage() {
  return (
    <S.Container>
      <AdvertisementSection />
      <PickDropSection />
      <S.CarContainer>
        <PopularCar />
        <RecommendCar />
      </S.CarContainer>
      <S.ShowMoreSection>
        <S.ButtonSection>
          <S.MoreButton>Show more car</S.MoreButton>
          <S.Count>120 Car</S.Count>
        </S.ButtonSection>
      </S.ShowMoreSection>
    </S.Container>
  );
}

export default MainPage;
