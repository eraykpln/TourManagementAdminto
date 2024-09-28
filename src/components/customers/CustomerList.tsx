import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';

// Dummy data
const customers = [
    {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        birth_date: '1990-01-01',
        passport_expiry_date: '2025-01-01',
        passport_issue_date: '2015-01-01',
        visa_expiry_date: '2023-01-01',
        company_info: 'Company A',
        email: 'john.doe@example.com',
        ethnicity: 'Caucasian',
        passport_image: 'path/to/image.jpg',
        passport_no: 123456789,
        passport_type: 'Type A',
        phone: '123-456-7890',
        shengen_status: 'true',
        tckn: 12345678901,
        work_field: 'Engineering',
    },
    // Diğer dummy veriler...
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'İsim', accessor: 'first_name', sort: true },
    { Header: 'Soyisim', accessor: 'last_name', sort: true },
    { Header: 'Doğum Tarihi', accessor: 'birth_date', sort: true },
    { Header: 'Pasaport Bitiş Tarihi', accessor: 'passport_expiry_date', sort: true },
    { Header: 'Pasaport Veriliş Tarihi', accessor: 'passport_issue_date', sort: true },
    { Header: 'Vize Bitiş Tarihi', accessor: 'visa_expiry_date', sort: true },
    { Header: 'Şirket Bilgisi', accessor: 'company_info', sort: true },
    { Header: 'Email', accessor: 'email', sort: true },
    { Header: 'Etnik Köken', accessor: 'ethnicity', sort: true },
    { Header: 'Pasaport Resmi', accessor: 'passport_image', sort: true },
    { Header: 'Pasaport Numarası', accessor: 'passport_no', sort: true },
    { Header: 'Pasaport Türü', accessor: 'passport_type', sort: true },
    { Header: 'Telefon Numarası', accessor: 'phone', sort: true },
    { Header: 'Schengen Durumu', accessor: 'shengen_status', sort: true },
    { Header: 'TCKN', accessor: 'tckn', sort: true },
    { Header: 'Çalışma Alanı', accessor: 'work_field', sort: true },
];

const sizePerPageList = [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: 'All', value: customers.length },
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
