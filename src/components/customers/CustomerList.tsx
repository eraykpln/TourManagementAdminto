import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';

// Dummy data
const customers = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '555-666-7777' },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', phone: '444-555-6666' },
    { id: 5, name: 'Charlie Davis', email: 'charlie.davis@example.com', phone: '333-444-5555' },
    { id: 6, name: 'Diana Evans', email: 'diana.evans@example.com', phone: '222-333-4444' },
    { id: 7, name: 'Eve Foster', email: 'eve.foster@example.com', phone: '111-222-3333' },
    { id: 8, name: 'Frank Green', email: 'frank.green@example.com', phone: '000-111-2222' },
    { id: 9, name: 'Grace Harris', email: 'grace.harris@example.com', phone: '999-888-7777' },
    { id: 10, name: 'Hank Irving', email: 'hank.irving@example.com', phone: '888-777-6666' },
    { id: 11, name: 'Ivy Johnson', email: 'ivy.johnson@example.com', phone: '777-666-5555' },
    { id: 12, name: 'Jack King', email: 'jack.king@example.com', phone: '666-555-4444' },
    { id: 13, name: 'Karen Lee', email: 'karen.lee@example.com', phone: '555-444-3333' },
    { id: 14, name: 'Leo Martin', email: 'leo.martin@example.com', phone: '444-333-2222' },
    { id: 15, name: 'Mona Nelson', email: 'mona.nelson@example.com', phone: '333-222-1111' },
    { id: 16, name: 'Nina Owens', email: 'nina.owens@example.com', phone: '222-111-0000' },
    { id: 17, name: 'Oscar Perez', email: 'oscar.perez@example.com', phone: '111-000-9999' },
    { id: 18, name: 'Paul Quinn', email: 'paul.quinn@example.com', phone: '000-999-8888' },
    { id: 19, name: 'Quincy Ross', email: 'quincy.ross@example.com', phone: '999-888-7777' },
    { id: 20, name: 'Rachel Scott', email: 'rachel.scott@example.com', phone: '888-777-6666' },
];

const columns = [
    {
        Header: 'ID',
        accessor: 'id',
        sort: true,
    },
    {
        Header: 'Name',
        accessor: 'name',
        sort: true,
    },
    {
        Header: 'Email',
        accessor: 'email',
        sort: true,
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        sort: true,
    },
];

const sizePerPageList = [
    {
        text: '5',
        value: 5,
    },
    {
        text: '10',
        value: 10,
    },
    {
        text: '25',
        value: 25,
    },
    {
        text: 'All',
        value: customers.length,
    },
];

const CustomerList = () => {
    const navigate = useNavigate();

    const handleAddCustomer = () => {
        navigate('/customers/add');
    };

    return (
        <Row>
            <Col xs={12}>
                <Card>
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="header-title">Customer List</h4>
                            <Button variant="primary" onClick={handleAddCustomer}>
                                Add Customer
                            </Button>
                        </div>
                        <Table
                            columns={columns}
                            data={customers}
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

export default CustomerList;
