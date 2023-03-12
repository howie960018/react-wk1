import { Row, Col ,Layout } from "antd";
import ImageItem from "../ImageItem";
import styles from "./imagelist.module.css";


const { Content } = Layout;

export default function ImageList({ ImageItems }) {
    return (
        <Layout  style={{ backgroundColor: '#FFFFFF',padding:16 }}>
            <Content>
               
                <Row gutter={[16, 16]} justify="center" style={{ height: "100%" }}>
                    {ImageItems.map(img => (
                        <Col
                            key={img.id}
                            sm={{ span: 24 }}
                            lg={{ span: 12 }}
                            xl={{ span: 6 }}
                            xxl={{ span: 6 }}
                        >
                            <ImageItem img={img} />
                        </Col>
                    ))}
                </Row>
            </Content>
        </Layout>
    );
}