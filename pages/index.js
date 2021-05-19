import Home from "../Components/Home";
import Layout from "../Components/Layout";
import Layanan from "../Components/Layanan";
import WhyChooseUs from "../Components/WhyChoose";
import Portofolio from "../Components/Portofolio";
import ContactUs from "../Components/Contact";
export default function Container() {
  return (
    <Layout>
      <Home />
      <Layanan />
      <WhyChooseUs />
      <Portofolio />
      <ContactUs />
    </Layout>
  );
}
