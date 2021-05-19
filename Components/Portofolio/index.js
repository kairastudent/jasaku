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
          Portofoli
        </Text>
      </FlexRow>
      <FlexRow margin={"auto"}>
        <RadioGroup>
          <div>
            <RadioType
              name="layanan"
              value="digitalmarketing"
              id="digitalmarketing"
            />
            <LabelRadio htmlFor="digitalmarketing">
              Digital Marketing
            </LabelRadio>
          </div>
          <div>
            <RadioType name="layanan" value="DesignVisual" id="DesignVisual" />
            <LabelRadio htmlFor="DesignVisual">Design Visual</LabelRadio>
          </div>
          <div>
            <RadioType name="layanan" value="WebApp" id="WebApp" />
            <LabelRadio htmlFor="WebApp">Web App</LabelRadio>
          </div>
          <div>
            <RadioType name="layanan" value="Smsmar" id="Smsmar" />
            <LabelRadio htmlFor="Smsmar">Sms Marketing</LabelRadio>
          </div>
        </RadioGroup>
      </FlexRow>
      <FlexRow size={10} margin={"auto"}>
        <GalleryPortofolio>
          <ListPortofolio>
            <img
              className="image"
              alt="Portofolio JASAKU"
              src="/external.jpeg"
            />
            <div className="description">
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </div>
          </ListPortofolio>
          <ListPortofolio>
            <img
              className="image"
              alt="Portofolio JASAKU"
              src="/external.jpeg"
            />
            <div className="description">
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </div>
          </ListPortofolio>{" "}
          <ListPortofolio>
            <img
              className="image"
              alt="Portofolio JASAKU"
              src="/external.jpeg"
            />
            <div className="description">
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </div>
          </ListPortofolio>{" "}
          <ListPortofolio>
            <img
              className="image"
              alt="Portofolio JASAKU"
              src="/external.jpeg"
            />
            <div className="description">
              Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More
              Bingo. Lorem Ipum doth be hard.
            </div>
          </ListPortofolio>
        </GalleryPortofolio>
      </FlexRow>
    </FlexContainer>
  );
}
export default Portofolio;
