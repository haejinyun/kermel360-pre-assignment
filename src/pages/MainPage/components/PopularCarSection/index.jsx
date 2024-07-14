import CarCard from "components/CarCard";
import * as S from "./PopularCarSection.styled";
import { POPULAR_CAR } from "\butils/constant/popularCar";

function PopularCarSection() {
  return (
    <S.Container>
      <S.TopSection>
        <S.Title>Popular Car</S.Title>
        <S.ViewButton>View All</S.ViewButton>
      </S.TopSection>
      <S.CarContainer>
        {POPULAR_CAR.slice(0, 4).map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </S.CarContainer>
    </S.Container>
  );
}

export default PopularCarSection;
