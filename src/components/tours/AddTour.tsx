import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from '../form';

interface IFormInput {
    name: string;
    description: string;
    date: string;
    price: number;
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup.string().required('Description is required'),
    date: yup.string().required('Date is required'),
    price: yup.number().required('Price is required').min(0, 'Price must be a positive number'),
});

const AddTour = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Add Tour</h4>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Name"
                                name="name"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Date"
                                name="date"
                                type="date"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormInput
                                label="Description"
                                name="description"
                                type="textarea"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Price"
                                name="price"
                                type="number"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Button type="submit" className="mt-3">Add Tour</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddTour;
