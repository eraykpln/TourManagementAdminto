import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormInput } from "../form";

interface IFormInput {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  price: number;
  schengenRequired: boolean;
  country: string;
  city: string;
  guide?: string;
  workspace?: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Tur ismi gerekli"),
  description: yup.string().required("Açıklama gerekli"),
  startDate: yup.string().required("Başlangıç tarihi gerekli"),
  endDate: yup
    .string()
    .required("Bitiş tarihi gerekli")
    .min(yup.ref("startDate"), "Bitiş tarihi başlangıç tarihinden eski olamaz"),
  price: yup
    .number()
    .required("Fiyat gerekli")
    .min(0, "Fiyat 0'dan küçük olamaz"),
  schengenRequired: yup.boolean().required("Schengen durumu gerekli"),
  country: yup.string().required("Ülke gerekli"),
  city: yup.string().required("Şehir gerekli"),
  guide: yup.string().nullable(),
  workspace: yup.string().nullable(),
});

const AddTour = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
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
                label="Tur Adı"
                name="name"
                type="text"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
            <Col md={6}>
              <FormInput
                label="Fiyat"
                name="price"
                type="number"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormInput
                label="Başlangıç Tarihi"
                name="startDate"
                type="date"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
            <Col md={6}>
              <FormInput
                label="Bitiş Tarihi"
                name="endDate"
                type="date"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormInput
                label="Ülke"
                name="country"
                type="text"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
            <Col md={6}>
              <FormInput
                label="Şehir"
                name="city"
                type="text"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormInput
                label="Rehber"
                name="guide"
                type="text"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
            <Col md={6}>
              <FormInput
                label="Schengen Gerekliliği"
                name="schengenRequired"
                type="select"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </FormInput>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormInput
                label="Çalışma Alanı"
                name="workspace"
                type="text"
                containerClass={"mb-3"}
                register={register}
                errors={errors}
              />
            </Col>
          </Row>
          <Button type="submit" className="mt-3">
            Add Tour
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddTour;
