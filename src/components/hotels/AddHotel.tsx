import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from '../form';

interface IFormInput {
    name: string;
    location: string;
}

const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    location: yup.string().required('Location is required'),
});

const AddHotel = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data);
    };

    return (
        <Card>
            <Card.Body>
                <h4 className="header-title">Add Hotel</h4>
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
                                label="Location"
                                name="location"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Button type="submit" className="mt-3">Add Hotel</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddHotel;
