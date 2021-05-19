import { FlexContainer, FlexRow, Blob } from "../../Styles/Wrapper";
import { Text } from "../../Styles/Text";
import { Bagdes, StyleImage } from "../../Styles/Badge";
const bounceTransition = {
  y: {
    duration: 2.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};
const xTransition = {
  y: {
    duration: 2.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
};

function Home() {
  return (
    <>
      <FlexContainer jcontent={"center"} aitem={"center"} position={"relative"}>
        <Blob>
          <StyleImage
            src="/blob.svg"
            alt="me"
            width="450"
            height="400"
            // layout="fill"
            objectfit="cover"
            quality={100}
          />
        </Blob>
        <FlexRow zindex={0} size={6} margin={"20px"} height={"300px"}>
          <Text
            fontSize={"80pt"}
            phonemtop={"50px"}
            phonefontSize={"50pt"}
            fontWeight={"600"}
          >
            YUK
          </Text>
          <Text
            fontSize={"80pt"}
            phonemtop={"-45px"}
            phonefontSize={"50pt"}
            fontWeight={"600"}
            mtop={"-40px"}
          >
            JASAKU
          </Text>
          <FlexContainer
            phonemtop={"-25px"}
            height={"35px"}
            mtop={"-28px"}
            overflow={"none"}
          >
            <Bagdes>we listen</Bagdes>
            <Bagdes>think</Bagdes>
            <Bagdes>create</Bagdes>
            <Bagdes>and deliver</Bagdes>
          </FlexContainer>
        </FlexRow>
        <FlexRow phonemtop={"-50px"} size={5} margin={"20px"} zindex={2}>
          <FlexContainer
            aitem={"center"}
            jcontent={"center"}
            height={"500px"}
            flexDir={"column"}
            zindex={3}
            overflow={"none"}
          >
            <FlexRow
              margin={"auto"}
              transition={bounceTransition}
              animate={{ y: ["10%", "-4%"] }}
            >
              <StyleImage
                src="/home.svg"
                alt="me"
                width="450"
                height="400"
                // layout="fill"
                objectfit="cover"
                quality={100}
              />
            </FlexRow>
            <FlexRow
              animate={{ y: ["1%", "-20%"] }}
              transition={xTransition}
              margin={"auto"}
              phonemtop={"-80px"}
              mtop={"-5px"}
            >
              <StyleImage
                src="/shadow.svg"
                alt="shadow"
                width="450"
                height="70"
                // layout="fill"
                objectfit="cover"
                quality={100}
              />
            </FlexRow>
          </FlexContainer>
        </FlexRow>
      </FlexContainer>
    </>
  );
}

export default Home;
