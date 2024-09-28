import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from '../form';

interface IFormInput {
    address: string;
    city: string;
    country: string;
    email: string;
    name: string;
    phone: string;
}

const schema = yup.object().shape({
    address: yup.string().required('Adres gereklidir'),
    city: yup.string().required('Şehir gereklidir'),
    country: yup.string().required('Ülke gereklidir'),
    email: yup.string().required('Email gereklidir').email('Geçerli bir email giriniz'),
    name: yup.string().required('İsim gereklidir'),
    phone: yup.string().required('Telefon numarası gereklidir'),
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
                <h4 className="header-title">Otel Ekle</h4>
                <p className="sub-header">
                    Yeni bir otel eklemek için aşağıdaki formu doldurun.
                </p>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="İsim"
                                name="name"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
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
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Telefon Numarası"
                                name="phone"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Adres"
                                name="address"
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
                                label="Şehir"
                                name="city"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Ülke"
                                name="country"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Button type="submit" className="mt-3">Otel Ekle</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddHotel;
