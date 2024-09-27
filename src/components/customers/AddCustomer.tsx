import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from '../../components/form';

interface IFormInput {
    name: string;
    surname: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    zip: string;
    personalInfo: string;
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    surname: yup.string().required('Surname is required'),
    email: yup.string().required('Email is required').email('Enter a valid email'),
    phone: yup.string().required('Phone is required'),
    address: yup.string().required('Address is required'),
    city: yup.string().required('City is required'),
    country: yup.string().required('Country is required'),
    zip: yup.string().required('Zip is required'),
    personalInfo: yup.string().required('Personal Info is required'),
});

const AddCustomer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Add Customer</h4>
                <p className="sub-header">
                    Fill in the form below to add a new customer.
                </p>
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
                                label="Surname"
                                name="surname"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Email"
                                name="email"
                                type="email"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Phone"
                                name="phone"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormInput
                                label="Address"
                                name="address"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <FormInput
                                label="City"
                                name="city"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={4}>
                            <FormInput
                                label="Country"
                                name="country"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={4}>
                            <FormInput
                                label="Zip"
                                name="zip"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <FormInput
                                label="Personal Info"
                                name="personalInfo"
                                type="textarea"
                                rows={3}
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Button type="submit" className="mt-3">Add Customer</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddCustomer;
