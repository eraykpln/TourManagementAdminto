import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from '../Table';

const reservations = [
    { id: 1, name: 'John Doe', date: '2023-10-01', time: '18:00', guests: 4 },
    { id: 2, name: 'Jane Smith', date: '2023-10-02', time: '19:00', guests: 2 },
    // Add more dummy reservations as needed
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'Name', accessor: 'name', sort: true },
    { Header: 'Date', accessor: 'date', sort: true },
    { Header: 'Time', accessor: 'time', sort: true },
    { Header: 'Guests', accessor: 'guests', sort: true },
];

const sizePerPageList = [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: 'All', value: reservations.length },
];

const ReservationList = () => {
    const navigate = useNavigate();

    const handleAddReservation = () => {
        navigate('/reservations/add');
    };

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="header-title">Reservation List</h4>
                            <Button variant="primary" onClick={handleAddReservation}>
                                Add Reservation
                            </Button>
                        </div>
                        <Table
                            columns={columns}
                            data={reservations}
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

export default ReservationList;
