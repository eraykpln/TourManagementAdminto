import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Table from '../Table';
import { useNavigate } from 'react-router-dom';

const hotels = [
    { id: 1, name: 'Hotel 1', location: 'Location 1' },
    { id: 2, name: 'Hotel 2', location: 'Location 2' },
    // Add more dummy hotels as needed
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'Name', accessor: 'name', sort: true },
    { Header: 'Location', accessor: 'location', sort: true },
];

const sizePerPageList = [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: 'All', value: hotels.length },
];

const HotelList = () => {
    const navigate = useNavigate();

    const handleAddHotel = () => {
        navigate('/hotels/add');
    };

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="header-title">Hotel List</h4>
                            <Button variant="primary" onClick={handleAddHotel}>
                                Add Hotel
                            </Button>
                        </div>
                        <Table
                            columns={columns}
                            data={hotels}
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

export default HotelList;
