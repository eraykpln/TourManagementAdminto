import React, { useState } from 'react';
import { Card, Col, Row, Button, Modal, Form } from 'react-bootstrap';
import Table from '../Table';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const roomTypes = [
    { id: 1, type: 'Single', capacity: 1 },
    { id: 2, type: 'Double', capacity: 2 },
    // Add more dummy room types as needed
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'Type', accessor: 'type', sort: true },
    { Header: 'Capacity', accessor: 'capacity', sort: true },
];

const sizePerPageList = [
    { text: '5', value: 5 },
    { text: '10', value: 10 },
    { text: '25', value: 25 },
    { text: 'All', value: roomTypes.length },
];

interface IFormInput {
    type: string;
    capacity: number;
}

const schema = yup.object().shape({
    type: yup.string().required('Type is required'),
    capacity: yup.number().required('Capacity is required').min(1, 'Capacity must be at least 1'),
});

const Roomtype = () => {
    const [show, setShow] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
        handleClose();
    };

    return (
        <>
            <Row>
                <Col xs={12}>
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="header-title">Room Types</h4>
                                <Button variant="primary" onClick={handleShow}>
                                    Add Room Type
                                </Button>
                            </div>
                            <Table
                                columns={columns}
                                data={roomTypes}
                                pageSize={5}
                                sizePerPageList={sizePerPageList}
                                isSortable={true}
                                pagination={true}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Room Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter room type"
                                {...register('type')}
                                isInvalid={!!errors.type}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.type?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter room capacity"
                                {...register('capacity')}
                                isInvalid={!!errors.capacity}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.capacity?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add Room Type
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Roomtype;