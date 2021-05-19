import { StyleImage } from "../../Styles/Badge";
import { FlexContainer, FlexRow } from "../../Styles/Wrapper";
import { Color } from "../../Styles/device";
import { BOX, WrapperBox } from "../../Styles/Box";
import { Text } from "../../Styles/Text";
export const DATA = [
  {
    id: 0,
    title: "Digital Marketing",
    image: "/marketing.svg",
    deskripsi:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
  {
    id: 2,
    title: "Design Visual",
    image: "/view.svg",
    deskripsi:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
  {
    id: 3,
    title: "Web Application",
    image: "/web.svg",
    deskripsi:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
  {
    id: 4,
    title: "SMS Marketing",
    image: "/email.svg",
    deskripsi:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint",
  },
];

const container = {
  hidden: { rotate: 90 },
  show: {
    rotate: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemA = {
  hidden: { scale: 0, top: 100 },
  show: { scale: 1, top: 30 },
};

function Layanan() {
  return (
    <FlexContainer
      flexDir={"column"}
      height={"auto"}
      overflow={"none"}
      phonemtop={"5px"}
    >
      <FlexRow padding={"5px"} bradius={"50px"} wiphone={"99%"}>
        <Text
          bgColor={"rgba(255, 102, 35, 0.09)"}
          margin={"auto"}
          width={"150px"}
          textalign={"center"}
          fontSize={"16pt"}
          color={Color.Primary}
          borderrad={"50px"}
        >
          Layanan
        </Text>
      </FlexRow>

      <WrapperBox
        style={{ marginTop: "10px" }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {DATA.map((el, index) => (
          <BOX key={index} variants={itemA}>
            <div className="wrapimage">
              <StyleImage
                phonemt={"0px"}
                src={el.image}
                width="40px"
                height="40px"
              />
            </div>
            <p className="judul">{el.title}</p>
            <p className="desc">{el.deskripsi}</p>
          </BOX>
        ))}
      </WrapperBox>
    </FlexContainer>
  );
}
export default Layanan;
