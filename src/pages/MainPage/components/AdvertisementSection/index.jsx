import Advertisement from "components/Advertisement";
import * as S from "./AdvertisementSection.styled";
import AdvertisementImageOne from "assets/svg/advertisementImageOne.svg";
import AdvertisementImageTwo from "assets/svg/advertisementImageTwo.svg";

const ADVERTISEMENT = [
  {
    backImg: AdvertisementImageOne,
    backColor: "rgba(84, 166, 255, 1)",
    buttonColor: "rgba(53, 99, 233, 1)",
    title: (
      <>
        The Best Platform
        <br />
        for Car Rental
      </>
    ),
    description: (
      <>
        Ease of doing a car rental safely and
        <br />
        reliably. Of course at a low price.
      </>
    ),
  },
  {
    backImg: AdvertisementImageTwo,
    backColor: "rgba(53, 99, 233, 1)",
    buttonColor: "rgba(84, 166, 255, 1)",
    title: (
      <>
        Easy way to rent a<br />
        car at a low price
      </>
    ),
    description: (
      <>
        Providing cheap car rental services
        <br />
        and safe and comfortable facilities.
      </>
    ),
  },
];
function AdvertisementSection() {
  return (
    <S.Container>
      {ADVERTISEMENT.map((ad, index) => (
        <Advertisement ad={ad} key={index} />
      ))}
    </S.Container>
  );
}

export default AdvertisementSection;
