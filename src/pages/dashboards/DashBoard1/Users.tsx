import { Col, Row } from "react-bootstrap";

// component
import StatisticsWidget3 from "../../../components/StatisticsWidget3";

// images
import avatar1 from "../../../assets/images/users/user-3.jpg";
import avatar2 from "../../../assets/images/users/user-2.jpg";
import avatar3 from "../../../assets/images/users/user-1.jpg";
import avatar4 from "../../../assets/images/users/user-10.jpg";

const Users = () => {
  return (
    <Row>
      <Col xl={3} md={6}>
        <StatisticsWidget3
          variant="warning"
          avatar={avatar1}
          name="Ali"
          emailId="lumiasoft@lumiasoft.com"
          position="Yönetici"
        />
      </Col>
      <Col xl={3} md={6}>
        <StatisticsWidget3
          variant="secondary"
          avatar={avatar2}
          name="Ayşe"
          emailId="lumiasoft@lumiasoft.com"
          position="Satış Temsilcisi"
        />
      </Col>
      <Col xl={3} md={6}>
        <StatisticsWidget3
          variant="success"
          avatar={avatar3}
          name="Mehmet"
          emailId="lumiasoft@lumiasoft.com"
          position="Satış Temsilcisi"
        />
      </Col>
      <Col xl={3} md={6}>
        <StatisticsWidget3
          variant="info"
          avatar={avatar4}
          name="Huriye"
          emailId="lumiasoft@lumiasoft.com"
          position="Satış Temsilcisi"
        />
      </Col>
    </Row>
  );
};

export default Users;
