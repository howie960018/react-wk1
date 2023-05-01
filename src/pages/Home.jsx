import Header from "../components/Header"
import Footer from "../components/Footer"
import Article from "../components/Article"
// import ImageItems from "../json/image.json";
import ImageList from "../components/ImageList";
import Info from "../components/Info";
import { Layout } from "antd";
import { useImages } from "../react-query";
const { Content } = Layout;

function Home() {

  const {data , isLoading } = useImages();
  const images = data || [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]

  return (
    <Layout>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container mainLayout">
          <Header className="layoutHeader"/>
          <Info />
          <ImageList ImageItems={images}   isLoading={isLoading} />
          <Article className="layoutContent" />
          <Footer className="layoutFooter" />
        </div>
      </Content>
    </Layout>

  );
}

export default Home;
