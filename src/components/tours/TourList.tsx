import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Table from "../Table";
import { Link, useNavigate } from "react-router-dom";

export const tours = [
  {
    id: 1,
    name: "Tour 1",
    startDate: "2023-10-01",
    endDate: "2023-10-05",
    price: 100,
    schengenRequired: true,
    country: "France",
    city: "Paris",
    guide: "John Doe",
    description: "Description 1",
    workspace: "Workspace 1",
  },
  {
    id: 2,
    name: "Tour 2",
    startDate: "2023-10-02",
    endDate: "2023-10-06",
    price: 200,
    schengenRequired: false,
    country: "Germany",
    city: "Berlin",
    guide: null,
    description: "Description 2",
    workspace: null,
  },
  // Add more dummy tours as needed
];

const columns = [
  { Header: "ID", accessor: "id", sort: true },
  { Header: "Tur ismi", accessor: "name", sort: true },
  { Header: "Başlangıç Tarihi", accessor: "startDate", sort: true },
  { Header: "Bitiş Tarihi", accessor: "endDate", sort: true },
  { Header: "Fiyat", accessor: "price", sort: true },
  {
    Header: "Schengen Gerekliliği",
    accessor: "schengenRequired",
    sort: true,
    Cell: ({ value }: any) => (value ? "Yes" : "No"),
  },
  { Header: "Ülke", accessor: "country", sort: true },
  { Header: "Şehir", accessor: "city", sort: true },
  { Header: "Rehber", accessor: "guide", sort: true },
  { Header: "İş alanı", accessor: "workspace", sort: true },
  {
    Header: "Detaylar",
    accessor: "actions",
    Cell: ({ row }: any) => (
      <Link to={`/tours/${row.original.id}`} className="btn btn-primary">
        View Details
      </Link>
    ),
  },
];

const sizePerPageList = [
  { text: "5", value: 5 },
  { text: "10", value: 10 },
  { text: "25", value: 25 },
  { text: "All", value: tours.length },
];

const TourList = () => {
  const navigate = useNavigate();

  const handleAddTour = () => {
    navigate("/tours/add");
  };

  return (
    <Row>
      <Col xs={12}>
        <Card>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="header-title">Tour List</h4>
              <Button variant="primary" onClick={handleAddTour}>
                Add Tour
              </Button>
            </div>
            <Table
              columns={columns}
              data={tours}
              pageSize={5}
              sizePerPageList={sizePerPageList}
              isSortable={true}
              pagination={true}
            />
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default TourList;
