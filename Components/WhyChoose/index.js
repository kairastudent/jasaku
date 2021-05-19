import { FlexContainer, FlexRow } from "../../Styles/Wrapper";
import { Color } from "../../Styles/device";
import { List, WrapperBox, WrapList } from "../../Styles/Box";
import { Text } from "../../Styles/Text";
import { StyleImage } from "../../Styles/Badge";

export const DATA = [
  {
    id: 0,
    title: "We Listen We Think",
    deskripsi:
      "Kami berusaha semaksimal mungkin untuk memahami tujuan bisnis client terlebih dahulu sebelum mengeksekusinya.",
  },
  {
    id: 2,
    title: "We Deliver On Time",
    deskripsi:
      "Kami tahu betul waktu itu adalah uang, apalagi dalam sektor bisnis dan kami berkomitmen untuk menetapkan tenggat waktu (antara client) dan dengan senang hati mentaatinya.",
  },
  {
    id: 3,
    title: "We Value Integrity",
    deskripsi:
      "Kami percaya dalam menjalankan bisnis harus dengan kejujuran, integritas, dan hati yang tulus. Kami tidak akan menjual sesuatu yang tidak client butuhkan. dan Kami tidak akan berbohong untuk mendapatkan keuntungan yang besar.",
  },
];
function WhyChooseUs() {
  return (
    <FlexContainer
      overflow={"none"}
      mtop={"150px"}
      height={"auto"}
      flexDir={"row"}
      phonemtop={"150px"}
      phoneFlexDir={"row-reverse"}
    >
      <FlexRow size={5} phoneOrder={2} padding={"10px"} mtop={"20px"}>
        <StyleImage
          src="/g10.svg"
          alt="me"
          width="450"
          height="450"
          objectfit="cover"
          quality={100}
        />
      </FlexRow>
      <FlexRow phoneOrder={1} padding={"5px"} size={6} wiphone={"99%"}>
        <Text
          bgColor={"rgba(255, 102, 35, 0.09)"}
          margin={"auto"}
          width={"350px"}
          textalign={"center"}
          fontSize={"16pt"}
          color={Color.Primary}
          borderrad={"50px"}
        >
          Bagaimana Kami Bekerja
        </Text>
        <Text
          margin={"auto"}
          width={"350px"}
          textalign={"center"}
          fontSize={"12pt"}
          color={Color.Font}
        >
          dan Mengapa Harus Memilih Kami ?
        </Text>
        <WrapperBox mtop={"20px"} jcontent={"flex-start"}>
          <WrapList>
            {DATA.map((el, index) => {
              return (
                <List key={index}>
                  <section className="section1">
                    <div className="bullet"></div>
                  </section>
                  <section className="section2">
                    <span className="header">{el.title}</span>
                    <span className="deskripsi">{el.deskripsi}</span>
                  </section>
                </List>
              );
            })}
          </WrapList>
        </WrapperBox>
      </FlexRow>
    </FlexContainer>
  );
}
export default WhyChooseUs;
