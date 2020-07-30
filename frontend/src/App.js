import React from "react";
import logo from "./assets/logo.png";
import main from "./assets/main.png";
import lot from "./assets/lot.png";
import few from "./assets/few.png";
import enough from "./assets/enough.png";
import "./App.less";
import { Button, Layout, Head, Row, Col, Typography, Table, Card } from "antd";
import Icon, {
  FacebookOutlined,
  InstagramOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const vk = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.37498 12.3751C9.74998 12.3751 9.74998 11.8501 9.74998 11.6251C9.74998 11.2501 10.125 10.8751 10.5 10.8751C10.875 10.8751 11.5125 11.5126 12 12.0001C12.375 12.3751 12.375 12.3751 12.75 12.3751C13.125 12.3751 13.875 12.3751 13.875 12.3751C13.875 12.3751 14.625 12.3376 14.625 11.6251C14.625 11.4001 14.3625 10.9876 13.5 10.1251C12.75 9.37506 12.375 9.75006 13.5 8.25006C14.175 7.31256 14.7 6.48756 14.625 6.26256C14.55 6.03756 12.6375 5.66256 12.375 6.00006C11.625 7.12506 11.475 7.38756 11.25 7.87506C10.875 8.62506 10.8375 9.00006 10.5 9.00006C10.1625 9.00006 10.125 8.28756 10.125 7.87506C10.125 6.63756 10.3125 5.77506 9.74998 5.62506C9.74998 5.62506 8.99998 5.62506 8.62498 5.62506C8.02498 5.62506 7.49998 6.00006 7.49998 6.00006C7.49998 6.00006 7.04998 6.37506 7.12498 6.37506C7.23748 6.37506 7.87498 6.22506 7.87498 6.75006C7.87498 7.12506 7.87498 7.50006 7.87498 7.50006C7.87498 7.50006 7.87498 9.00006 7.49998 9.00006C7.12498 9.00006 6.37498 7.50006 5.62498 6.37506C5.32498 5.92506 5.24998 6.00006 4.87498 6.00006C4.46248 6.00006 4.12498 6.00006 3.74998 6.00006C3.37498 6.00006 3.33748 6.22506 3.37498 6.37506C4.12498 8.25006 4.64998 9.41256 6.07498 10.9126C7.38748 12.2626 8.24998 12.3376 8.99998 12.3751C9.18748 12.3751 8.99998 12.3751 9.37498 12.3751Z"
      fill="white"
    />
    <path
      d="M9 0C4.0125 0 0 4.0125 0 9C0 13.9875 4.0125 18 9 18C13.9875 18 18 13.9875 18 9C18 4.0125 13.9875 0 9 0ZM9 16.125C5.0625 16.125 1.875 12.9375 1.875 9C1.875 5.0625 5.0625 1.875 9 1.875C12.9375 1.875 16.125 5.0625 16.125 9C16.125 12.9375 12.9375 16.125 9 16.125Z"
      fill="white"
    />
  </svg>
);

const ok = () => (
  <svg
    width="11"
    height="19"
    viewBox="0 0 11 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.60952 11.9296C8.63088 12.5511 7.28431 12.7975 6.39495 12.8904L7.14143 13.6261L9.86665 16.3514C10.8632 17.3729 9.24155 18.9695 8.2344 17.9837C7.55219 17.2907 6.55203 16.2906 5.50917 15.2477L2.78394 17.9801C1.77671 18.9623 0.155153 17.3514 1.16238 16.3477C1.85529 15.6548 2.84467 14.6548 3.88761 13.6226L4.62339 12.8868C3.74477 12.7939 2.3768 12.5617 1.38739 11.9261C0.222996 11.1759 -0.287738 10.7366 0.162271 9.81868C0.426566 9.2972 1.15161 8.85789 2.11243 9.6151C2.11243 9.6151 3.40897 10.6473 5.50201 10.6473C7.59498 10.6473 8.89156 9.6151 8.89156 9.6151C9.85234 8.86143 10.5738 9.2972 10.8417 9.81868C11.2847 10.7366 10.7739 11.1759 9.60952 11.9296ZM0.865918 4.63252C0.865918 2.07161 2.94822 0 5.49847 0C8.04868 0 10.131 2.07161 10.131 4.63252C10.131 7.18277 8.04872 9.25433 5.49847 9.25433C2.94826 9.25433 0.865918 7.18277 0.865918 4.63252ZM3.22329 4.63252C3.22329 5.88619 4.2448 6.90769 5.49847 6.90769C6.75206 6.90769 7.77361 5.88619 7.77361 4.63252C7.77361 3.36811 6.75206 2.34664 5.49847 2.34664C4.2448 2.34664 3.22329 3.36811 3.22329 4.63252Z"
      fill="white"
    />
  </svg>
);

const dataSource = [
  {
    key: "1",
    name: "Иванова Анастасия Петровна",
    blood: "0 (I) - Rh+",
    city: "Тирасполь",
    count: 123,
  },
  {
    key: "2",
    name: "Петров Петр Сергеевич",
    blood: "0 (I) - Rh-",
    city: "Бендеры",
    count: 122,
  },
  {
    key: "3",
    name: "Ждань Екатерина Васильевна",
    blood: "A (II) - Rh+",
    city: "Рыбница",
    count: 121,
  },
  {
    key: "4",
    name: "Дмитриев Дмитрий Иванович",
    blood: "0 (I) - Rh+",
    city: "Тирасполь",
    count: 120,
  },
  {
    key: "5",
    name: "Дудка Богдан Алексеевич",
    blood: "B (III) - Rh+",
    city: "Бендеры",
    count: 119,
  },
];

const columns = [
  {
    title: "Имя",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Группа крови",
    dataIndex: "blood",
    key: "blood",
  },
  {
    title: "Город",
    dataIndex: "city",
    key: "city",
  },
  { title: "Кол-во донаций", dataIndex: "count", key: "count" },
];

const reserve = [
  {
    blood: "0 (I) - Rh+",
    img: lot,
    text: "МНОГО",
  },
  {
    blood: "0 (I) - Rh-",
    img: enough,
    text: "ДОСТАТОЧНО",
  },
  {
    blood: "А (II) - Rh+",
    img: few,
    text: "МАЛО",
  },
  {
    blood: "A (II) - Rh-",
    img: lot,
    text: "МНОГО",
  },
  {
    blood: "B (III) - Rh+",
    img: enough,
    text: "ДОСТАТОЧНО",
  },
  {
    blood: "B (III) - Rh-",
    img: few,
    text: "МАЛО",
  },
  {
    blood: "B (III) - Rh+",
    img: lot,
    text: "МНОГО",
  },
  {
    blood: "B (III) - Rh-",
    img: enough,
    text: "ДОСТАТОЧНО",
  },
];

const App = () => {
  return (
    <Layout style={{ background: "white" }}>
      {/* <Header>header</Header> */}

      <Content>
        <Row
          className="waves"
          style={{ height: "100vh" }}
          justify="center"
          align="stretch"
        >
          <Col {...{ md: 24, lg: 16 }}>
            <Row type="flex" justify="space-between" gutter={[16, 16]}>
              <Col style={{ marginTop: "8px" }}>
                <img src={logo} alt="logo" style={{ height: "63px" }} />
              </Col>

              <Col style={{ marginTop: "8px" }}>
                <Row
                  gutter={[16, 16]}
                  align="middle"
                  style={{ height: "100%" }}
                >
                  <Col>
                    <Button type="link">О портале</Button>
                  </Col>
                  <Col>
                    <Button type="link">О донорстве</Button>
                  </Col>
                  <Col>
                    <Button type="link">Нужна кровь</Button>
                  </Col>
                  <Col>
                    <Button type="link">Сдать кровь</Button>
                  </Col>
                  <Col>
                    <Button type="primary">Кабинет донора</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col {...{ md: 24, xl: 20, xxl: 16 }}>
            <Row justify="center" align="middle" gutter={[16, 16]}>
              <Col span={14}>
                <img src={main} alt="main" style={{ height: "50vh" }} />
              </Col>
              <Col span={10}>
                <Title level={1}>Люди помогают людям</Title>
                <Text type="secondary" strong>
                  Web-платформа для тех, кто сдает и ищет донорскую кровь
                </Text>
              </Col>
            </Row>
          </Col>

          <Col {...{ md: 24, lg: 18, xxl: 16 }}>
            <Row
              justify="center"
              style={{ height: "100%" }}
              align="middle"
              gutter={[16, 16]}
            >
              <Col>
                <FacebookOutlined style={{ height: "19px", color: "white" }} />
              </Col>
              <Col>
                <InstagramOutlined style={{ height: "19px", color: "white" }} />
              </Col>
              <Col>
                <Icon component={ok} />
              </Col>
              <Col>
                <Icon component={vk} />
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "100px" }} justify="center" align="stretch">
          <Col {...{ md: 24, xl: 20, xxl: 16 }}>
            <Row gutter={[32, 32]} justify="center" align="middle">
              <Col>
                <Title level={1}>Мониторинг запасов</Title>
              </Col>
            </Row>

            <Row justify="center">
              <Col span={24}>
                <Card>
                  <Row justify="space-around">
                    {reserve.map(({ text, img, blood }) => (
                      <Col span={3}>
                        <Row align="middle" justify="center" gutter={[16, 16]}>
                          <Col span={24} className="centered">
                            <Text strong>{blood}</Text>
                          </Col>
                          <Col span={24} className="centered">
                            <img src={img} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text strong>{text}</Text>
                          </Col>
                        </Row>
                      </Col>
                    ))}
                  </Row>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "100px" }} justify="center" align="stretch">
          <Col {...{ md: 24, xl: 20, xxl: 16 }}>
            <Row gutter={[32, 32]}>
              <Col span={24}>
                <Row justify="center">
                  <Col>
                    <Title level={1}>Где сдать кровь?</Title>
                  </Col>
                </Row>
              </Col>

              <Col span={24}>
                <Row gutter={[16, 16]} justify="space-between" align="stretch">
                  <Col className="waves info-card" span={6}>
                    <Row gutter={[16, 16]} justify="center">
                      <Col span={24}>
                        <Row justify="center" align="center">
                          <Col span={24} className="centered">
                            <Text strong>Тирасполь</Text>
                          </Col>
                          <Col span={24} className="centered">
                            <Text>РЕСПУБЛИКАНСКАЯ КЛИНИЧЕСКАЯ БОЛЬНИЦА</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <EnvironmentOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>г. Тирасполь, ул. Мира, 33 А</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <PhoneOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>
                              (533) 4-67-37 <br /> (533) 2-39-07 <br /> (533)
                              2-51-36
                            </Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <ClockCircleOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>
                              пн-пт с 8.00 до 14.00 <br /> обед с 12.00 до 12.30{" "}
                            </Text>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="waves info-card" span={6}>
                    <Row gutter={[16, 16]} justify="center">
                      <Col span={24}>
                        <Row justify="center" align="center">
                          <Col span={24} className="centered">
                            <Text strong>Бендеры</Text>
                          </Col>
                          <Col span={24} className="centered">
                            <Text>
                              ГУ “БЕНДЕРСКИЙ ЦЕНТР АМБУЛАТОРНОЙ- ПОЛИКЛИНИЧЕСКОЙ
                              ПОМОЩИ”
                            </Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <EnvironmentOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>г. Бендеры, ул. С. Лазо, 20, 2 этаж</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <PhoneOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>(552) 44707</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <ClockCircleOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>пн-пт с 8.00 до 11.00</Text>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="waves info-card" span={6}>
                    <Row gutter={[16, 16]} justify="center">
                      <Col span={24}>
                        <Row justify="center" align="center">
                          <Col span={24} className="centered">
                            <Text strong>Рыбница</Text>
                          </Col>
                          <Col span={24} className="centered">
                            <Text>ГУ “РЫБНИЦКАЯ ЦЕНТРАЛЬНАЯ БОЛЬНИЦА”</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <EnvironmentOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>г. Рыбница, ул. Грибоедова, 5</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <PhoneOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>(555) 4-39-06</Text>
                          </Col>
                        </Row>
                      </Col>

                      <Col span={24}>
                        <Row justify="center">
                          <Col span={24} className="centered">
                            <ClockCircleOutlined style={{ color: "#FF4D4F" }} />
                          </Col>
                          <Col span={24} className="centered">
                            <Text>пн-чт с 8.00 до 12.00</Text>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "100px" }} justify="center" align="stretch">
          <Col {...{ md: 24, xl: 20, xxl: 16 }}>
            <Row gutter={[32, 32]} justify="center" align="middle">
              <Col>
                <Title level={1}>Топ доноров портала</Title>
              </Col>
            </Row>

            <Row justify="center">
              <Col span={24}>
                <Table columns={columns} dataSource={dataSource} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>

      <Footer>
        <Row justify="center" align="stretch">
          <Col {...{ md: 24, lg: 16 }}>
            <Row type="flex" justify="start" gutter={[16, 16]}>
              <Col>
                <img
                  src={logo}
                  alt="logo"
                  style={{ height: "63px", margin: "8px" }}
                />
              </Col>

              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
};

export default App;
