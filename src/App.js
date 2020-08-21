import React, { useState } from "react";
import { Layout, Typography, Button } from "antd";
import Items from "./Components/Items";
import Card from "./Components/Card";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

function App() {
  const { Header, Content, Footer } = Layout;
  const { Title } = Typography;
  const [showCard, setShowCard] = useState(false);

  const count = useSelector(state => state.card.items.length);

  const onCardClose = () => {
    setShowCard(false);
  };

  return (
    <div className="app">
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Title level={3} style={{ color: "#fff" }}>
            Gunya Store
          </Title>
          <Button
            onClick={() => setShowCard(true)}
            icon={<ShoppingCartOutlined />}
          >
            Card {count}
          </Button>
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between"
          }}
        >
          <Items />
        </Content>

        <Footer>Footer</Footer>
      </Layout>
      {showCard && <Card visibility={showCard} onClose={onCardClose} />}
    </div>
  );
}
export default App;
