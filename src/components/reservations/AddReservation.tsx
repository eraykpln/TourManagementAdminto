import React, { useState } from 'react';
import { Card, Form, Button, Tab, Nav } from 'react-bootstrap';
import { Wizard, Steps, Step } from 'react-albus';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from '../form';
import { tours } from '../tours/TourList'; // Correct import path
import Table from '../Table'; // Assuming Table component is available here

interface IFormInput {
    tour: string;
    hotel: string;
    room: string;
    customers: string[];
}

const schema = yup.object().shape({
    tour: yup.string().required('Tour is required'),
    hotel: yup.string().required('Hotel is required'),
    room: yup.string().required('Room is required'),
    customers: yup.array().of(yup.string()).required('At least one customer is required'),
});

const customers = [
    { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
    { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
    // Add more dummy customers as needed
];

const columns = [
    { Header: 'ID', accessor: 'id', sort: true },
    { Header: 'Name', accessor: 'name', sort: true },
    { Header: 'Email', accessor: 'email', sort: true },
];

const AddReservation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const [key, setKey] = useState<string | null>('tour');
    const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        data.customers = selectedCustomers;
        console.log(data);
    };

    const handleCustomerSelect = (selected: string[]) => {
        setSelectedCustomers(selected);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Add Reservation</h4>
                <Wizard>
                    <Steps>
                        <Tab.Container
                            id="left-tabs-example"
                            defaultActiveKey="tour"
                            activeKey={key ? key : 'tour'}
                            onSelect={(k) => setKey(k)}
                        >
                            <Nav variant="pills" as="ul" className="nav-justified bg-light form-wizard-header mb-4">
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="tour" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-map-marker-radius me-1"></i>
                                        <span className="d-none d-sm-inline">Tour</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="hotel" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-hotel me-1"></i>
                                        <span className="d-none d-sm-inline">Hotel</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="room" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-bed me-1"></i>
                                        <span className="d-none d-sm-inline">Room</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="customer" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-account-multiple me-1"></i>
                                        <span className="d-none d-sm-inline">Customer</span>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link eventKey="finish" className="rounded-0 pt-2 pb-2">
                                        <i className="mdi mdi-check-all me-1"></i>
                                        <span className="d-none d-sm-inline">Finish</span>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content className="pb-0 mb-0 pt-0">
                                <Tab.Pane eventKey="tour">
                                    <Step
                                        id="tour"
                                        render={({ next }) => (
                                            <Form>
                                                <FormInput
                                                    label="Tour"
                                                    name="tour"
                                                    type="select"
                                                    containerClass={'mb-3'}
                                                    register={register}
                                                    errors={errors}
                                                >
                                                    {tours.map((tour: { name: string }, index: number) => (
                                                        <option key={index} value={tour.name}>
                                                            {tour.name}
                                                        </option>
                                                    ))}
                                                </FormInput>
                                                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                    <li className="next list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('hotel');
                                                                next();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="hotel">
                                    <Step
                                        id="hotel"
                                        render={({ next, previous }) => (
                                            <Form>
                                                <FormInput
                                                    label="Hotel"
                                                    name="hotel"
                                                    type="select"
                                                    containerClass={'mb-3'}
                                                    register={register}
                                                    errors={errors}
                                                >
                                                    {/* Assuming hotels data is available */}
                                                    <option value="Hotel 1">Hotel 1</option>
                                                    <option value="Hotel 2">Hotel 2</option>
                                                </FormInput>
                                                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                    <li className="previous list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('tour');
                                                                previous();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('room');
                                                                next();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="room">
                                    <Step
                                        id="room"
                                        render={({ next, previous }) => (
                                            <Form>
                                                <FormInput
                                                    label="Room"
                                                    name="room"
                                                    type="select"
                                                    containerClass={'mb-3'}
                                                    register={register}
                                                    errors={errors}
                                                >
                                                    {/* Assuming rooms data is available */}
                                                    <option value="Room 101">Room 101</option>
                                                    <option value="Room 102">Room 102</option>
                                                </FormInput>
                                                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                    <li className="previous list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('hotel');
                                                                previous();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('customer');
                                                                next();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="customer">
                                    <Step
                                        id="customer"
                                        render={({ next, previous }) => (
                                            <Form>
                                                <Table
                                                    columns={columns}
                                                    data={customers}
                                                    pageSize={5}
                                                    sizePerPageList={[
                                                        { text: '5', value: 5 },
                                                        { text: '10', value: 10 },
                                                        { text: '25', value: 25 },
                                                        { text: 'All', value: customers.length },
                                                    ]}
                                                    isSortable={true}
                                                    pagination={true}
                                                    isSelectable={true}
                                                    isSearchable={true}
                                                />
                                                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                    <li className="previous list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('room');
                                                                previous();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('finish');
                                                                next();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Next
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                                <Tab.Pane eventKey="finish">
                                    <Step
                                        id="finish"
                                        render={({ previous }) => (
                                            <Form onSubmit={handleSubmit(onSubmit)}>
                                                <h4 className="header-title">Summary</h4>
                                                <p>Review your reservation details and submit.</p>
                                                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                                                    <li className="previous list-inline-item">
                                                        <Button
                                                            onClick={() => {
                                                                setKey('customer');
                                                                previous();
                                                            }}
                                                            variant="secondary"
                                                        >
                                                            Previous
                                                        </Button>
                                                    </li>
                                                    <li className="next list-inline-item">
                                                        <Button type="submit" variant="primary">
                                                            Submit
                                                        </Button>
                                                    </li>
                                                </ul>
                                            </Form>
                                        )}
                                    />
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Steps>
                </Wizard>
            </Card.Body>
        </Card>
    );
};

export default AddReservation;