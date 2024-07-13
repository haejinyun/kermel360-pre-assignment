import * as S from "./Advertisement.styled";

function Advertisement({ ad }) {
  return (
    <S.Container img={ad.backImg} color={ad.backColor}>
      <S.Advertisement>
        <S.AdvertisementTitle>{ad.title}</S.AdvertisementTitle>
        <S.AdvertisementDescription>
          {ad.description}
        </S.AdvertisementDescription>
      </S.Advertisement>
      <S.RentButton color={ad.buttonColor}>Rental Car</S.RentButton>
    </S.Container>
  );
}

export default Advertisement;
