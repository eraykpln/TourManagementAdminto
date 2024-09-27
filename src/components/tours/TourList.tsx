import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Table from '../Table';
import { Link, useNavigate } from 'react-router-dom';

export const tours = [
    { id: 1, name: 'Tour 1', date: '2023-10-01', price: 100, description: 'Description 1' },
    { id: 2, name: 'Tour 2', date: '2023-10-02', price: 200, description: 'Description 2' },
    { id: 3, name: 'Tour 3', date: '2023-10-03', price: 300, description: 'Description 3' },
    { id: 4, name: 'Tour 4', date: '2023-10-04', price: 400, description: 'Description 4' },
    { id: 5, name: 'Tour 5', date: '2023-10-05', price: 500, description: 'Description 5' },
    { id: 6, name: 'Tour 6', date: '2023-10-06', price: 600, description: 'Description 6' },
    // Add more dummy tours as needed
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'Name', accessor: 'name', sort: true },
    { Header: 'Date', accessor: 'date', sort: true },
    { Header: 'Price', accessor: 'price', sort: true },
    {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }: any) => (
            <Link to={`/tours/${row.original.id}`} className="btn btn-primary">
                View Details
            </Link>
        ),
    },
];

const sizePerPageList = [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: 'All', value: tours.length },
];

const TourList = () => {
    const navigate = useNavigate();

    const handleAddTour = () => {
        navigate('/tours/add');
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
