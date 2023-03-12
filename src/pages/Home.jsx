import Header from "../components/Header"
import Footer from "../components/Footer"
import Article from "../components/Article"
import ImageItems from "../json/image.json";
import ImageList from "../components/ImageList";
import Info from "../components/Info";
import { Layout } from "antd";
const { Content } = Layout;
function Home() {

  return (
    <Layout>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="container mainLayout">
          <Header className="layoutHeader"/>
          <Info />
          <ImageList ImageItems={ImageItems} />
          <Article className="layoutContent" />
          <Footer className="layoutFooter" />
        </div>
      </Content>
    </Layout>

  );
}

export default Home;
