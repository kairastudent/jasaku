import { FlexContainer, FlexRow } from "../../Styles/Wrapper";
import { Color } from "../../Styles/device";
import { Text } from "../../Styles/Text";
import { RadioGroup, RadioType, LabelRadio } from "../../Styles/Checkbox";
import { GalleryPortofolio, ListPortofolio } from "../../Styles/Portofolio";

function Portofolio() {
  return (
    <FlexContainer
      flexDir={"column"}
      mtop={"40px"}
      jcontent={"center"}
      phonemtop={"60px"}
      height={"auto"}
      overflow={"none"}
    >
      <FlexRow padding={"5px"} height={"50px"} wiphone={"99%"}>
        <Text
          bgColor={"rgba(255, 102, 35, 0.09)"}
          margin={"auto"}
          width={"150px"}
          textalign={"center"}
          fontSize={"16pt"}
          color={Color.Primary}
          borderrad={"50px"}
        >
          Kontak
        </Text>
        <Text
          margin={"auto"}
          width={"750px"}
          textalign={"center"}
          fontSize={"12pt"}
          color={Color.Font}
        >
          Jangan sungkan untuk hubungi kami
        </Text>
      </FlexRow>
      <FlexRow margin={"auto"}>ko</FlexRow>
    </FlexContainer>
  );
}
export default Portofolio;
