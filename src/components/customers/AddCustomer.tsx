import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FormInput } from '../../components/form';

interface IFormInput {
    birth_date: string;
    passport_expiry_date: string;
    passport_issue_date: string;
    visa_expiry_date: string;
    company_info: string;
    email: string;
    ethnicity: string;
    first_name: string;
    last_name: string;
    passport_image: FileList;
    passport_no: number;
    passport_type: string;
    phone: string;
    shengen_status: string;
    tckn: number;
    work_field: string;
}

const schema = yup.object().shape({
    birth_date: yup.string().required('Doğum tarihi gereklidir'),
    passport_expiry_date: yup.string().required('Pasaport bitiş tarihi gereklidir'),
    passport_issue_date: yup.string().required('Pasaport veriliş tarihi gereklidir'),
    visa_expiry_date: yup.string().required('Vize bitiş tarihi gereklidir'),
    company_info: yup.string().required('Şirket bilgisi gereklidir'),
    email: yup.string().required('Email gereklidir').email('Geçerli bir email giriniz'),
    ethnicity: yup.string().required('Etnik köken gereklidir'),
    first_name: yup.string().required('İsim gereklidir'),
    last_name: yup.string().required('Soyisim gereklidir'),
    passport_image: yup.mixed().required('Pasaport resmi gereklidir'),
    passport_no: yup.number().required('Pasaport numarası gereklidir'),
    passport_type: yup.string().required('Pasaport türü gereklidir'),
    phone: yup.string().required('Telefon numarası gereklidir'),
    shengen_status: yup.string().required('Schengen durumu gereklidir'),
    tckn: yup.number().required('TCKN gereklidir'),
    work_field: yup.string().required('Çalışma alanı gereklidir'),
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
                <h4 className="header-title">Müşteri Ekle</h4>
                <p className="sub-header">
                    Yeni bir müşteri eklemek için aşağıdaki formu doldurun.
                </p>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="İsim"
                                name="first_name"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Soyisim"
                                name="last_name"
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
                                label="Doğum Tarihi"
                                name="birth_date"
                                type="date"
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
                                label="TCKN"
                                name="tckn"
                                type="number"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Etnik Köken"
                                name="ethnicity"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Çalışma Alanı"
                                name="work_field"
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
                                label="Şirket Bilgisi"
                                name="company_info"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Pasaport Numarası"
                                name="passport_no"
                                type="number"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Pasaport Türü"
                                name="passport_type"
                                type="text"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Pasaport Resmi"
                                name="passport_image"
                                type="file"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Pasaport Veriliş Tarihi"
                                name="passport_issue_date"
                                type="date"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <FormInput
                                label="Pasaport Bitiş Tarihi"
                                name="passport_expiry_date"
                                type="date"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormInput
                                label="Vize Bitiş Tarihi"
                                name="visa_expiry_date"
                                type="date"
                                containerClass={'mb-3'}
                                register={register}
                                errors={errors}
                            />
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Schengen Durumu</Form.Label>
                                <Form.Select {...register("shengen_status")}>
                                    <option value="">Seçiniz</option>
                                    <option value="true">Var</option>
                                    <option value="false">Yok</option>
                                </Form.Select>
                                {errors.shengen_status && <p className="text-danger">{errors.shengen_status.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" className="mt-3">Müşteri Ekle</Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default AddCustomer;