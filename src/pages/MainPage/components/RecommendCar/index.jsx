import * as S from "./RecommendCar.styled";
import CarCard from "components/CarCard";
import { RECOMMENDATION_CAR } from "\butils/constant/recommendationCar";

function RecommendCar() {
  return (
    <S.Container>
      <S.TopSection>
        <S.Title>Recomendation Car</S.Title>
      </S.TopSection>
      <S.CarContainer>
        {RECOMMENDATION_CAR.slice(0, 8).map((car, index) => (
          <CarCard car={car} key={index} />
        ))}
      </S.CarContainer>
    </S.Container>
  );
}

export default RecommendCar;
