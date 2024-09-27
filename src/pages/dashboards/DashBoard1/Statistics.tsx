import { Col, Row } from "react-bootstrap";

// component
import StatisticsWidget1 from "../../../components/StatisticsWidget1";
import StatisticsWidget2 from "../../../components/StatisticsWidget2";

const Statistics = () => {
  return (
    <Row>
      <Col xl={3} md={6}>
        <StatisticsWidget1
          title="Aktif Tur"
          data={58}
          stats={256}
          color={"#f05050"}
          subTitle="Aktif tur"
        />
      </Col>
      <Col xl={3} md={6}>
        <StatisticsWidget2
          variant="success"
          title="Satış Sayısı"
          trendValue="32%"
          trendIcon="mdi mdi-trending-up"
          stats={8451}
          subTitle="Günlük Satış"
          progress={77}
        />
      </Col>
      <Col xl={3} md={6}>
        <StatisticsWidget1
          title="Yarın Başlayacak Tur"
          color={"#ffbd4a"}
          data={80}
          stats={4569}
          subTitle="Yarın Başlayacak"
        />
      </Col>
      <Col xl={3} md={6}>
        <StatisticsWidget2
          variant="pink"
          title="Yarın Tamamlanacak"
          trendValue="32%"
          trendIcon="mdi mdi-trending-up"
          stats={158}
          subTitle="Yarın Tamamlanacak"
          progress={77}
        />
      </Col>
    </Row>
  );
};

export default Statistics;
