import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Table from '../Table';
import { useNavigate } from 'react-router-dom';

const hotels = [
    {
        id: 1,
        name: 'Hotel 1',
        address: 'Address 1',
        city: 'City 1',
        country: 'Country 1',
        email: 'hotel1@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        name: 'Hotel 2',
        address: 'Address 2',
        city: 'City 2',
        country: 'Country 2',
        email: 'hotel2@example.com',
        phone: '098-765-4321',
    },
    // Add more dummy hotels as needed
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'İsim', accessor: 'name', sort: true },
    { Header: 'Adres', accessor: 'address', sort: true },
    { Header: 'Şehir', accessor: 'city', sort: true },
    { Header: 'Ülke', accessor: 'country', sort: true },
    { Header: 'Email', accessor: 'email', sort: true },
    { Header: 'Telefon Numarası', accessor: 'phone', sort: true },
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
                            <h4 className="header-title">Otel Listesi</h4>
                            <Button variant="primary" onClick={handleAddHotel}>
                                Otel Ekle
                            </Button>
                        </div>
                        <Table
                            columns={columns}
                            data={hotels}
                            pageSize={5}
                            sizePerPageList={sizePerPageList}
                            isSortable={true}
                            pagination={true}
                            isSearchable={true}
                        />
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default HotelList;
