import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Table from '../Table';

export const tours = [
    { id: 1, name: 'Tour 1', date: '2023-10-01', price: 100 },
    { id: 2, name: 'Tour 2', date: '2023-10-02', price: 200 },
    { id: 3, name: 'Tour 3', date: '2023-10-03', price: 300 },
    { id: 4, name: 'Tour 4', date: '2023-10-04', price: 400 },
    { id: 5, name: 'Tour 5', date: '2023-10-05', price: 500 },
    // Add more dummy tours as needed
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'Name', accessor: 'name', sort: true },
    { Header: 'Date', accessor: 'date', sort: true },
    { Header: 'Price', accessor: 'price', sort: true },
];

const sizePerPageList = [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: 'All', value: tours.length },
];

const TourList = () => {
    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="header-title">Tour List</h4>
                            <Button variant="primary" onClick={() => console.log('Add Tour')}>
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
