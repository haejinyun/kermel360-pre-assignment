import * as S from "./CarCard.styled";
import { ReactComponent as HeartIcon } from "assets/svg/heartIcon.svg";
import { ReactComponent as GasolineIcon } from "assets/svg/gasolineIcon.svg";
import { ReactComponent as PeopleIcon } from "assets/svg/peopleIcon.svg";
import { ReactComponent as ManualIcon } from "assets/svg/manualIcon.svg";

function CarCard({ car }) {
  return (
    <S.Container>
      <S.CarContainer>
        <S.TitleSection>
          <S.NameSection>
            <S.Name>{car.name}</S.Name>
            <S.CarType>{car.type}</S.CarType>
          </S.NameSection>
          <S.Heart>
            {car.isLiked ? (
              <HeartIcon fill="red" stroke="red" />
            ) : (
              <HeartIcon stroke="rgba(144, 163, 191, 1)" />
            )}
          </S.Heart>
        </S.TitleSection>
        <S.CarImg src={car.image} />
      </S.CarContainer>
      <S.InfoContainer>
        <S.CarInfoSection>
          <S.IconGroup>
            <GasolineIcon />
            {car.fuelCapacity}L
          </S.IconGroup>
          <S.IconGroup>
            <ManualIcon />
            {car.gearType}
          </S.IconGroup>
          <S.IconGroup>
            <PeopleIcon />
            {car.seats}people
          </S.IconGroup>
        </S.CarInfoSection>
        <S.RentSection>
          <S.PriceSection>
            <S.Price>
              $ {car.originalPrice.toFixed(2)}/<span>day</span>
            </S.Price>
            {car.salePrice && (
              <S.DiscountPrice>${car.salePrice.toFixed(2)}</S.DiscountPrice>
            )}
          </S.PriceSection>
          <S.RentButton>Rent Now</S.RentButton>
        </S.RentSection>
      </S.InfoContainer>
    </S.Container>
  );
}

export default CarCard;
