import React, { useState } from "react";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { Row, Col, Form, Button, Card, Tab, Nav } from "react-bootstrap";
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
  hotelDetails: {
    hotel: string;
    checkInDate: string;
    checkOutDate: string;
  }[];
  roomDetails: {
    hotel: string;
    roomType: string;
    roomStock: number;
  }[];
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
  hotelDetails: yup.array().of(
    yup.object().shape({
      hotel: yup.string().required("Otel gerekli"),
      checkInDate: yup.string().required("Check-in tarihi gerekli"),
      checkOutDate: yup.string().required("Check-out tarihi gerekli"),
    })
  ),
  roomDetails: yup.array().of(
    yup.object().shape({
      hotel: yup.string().required("Otel gerekli"),
      roomType: yup.string().required("Oda tipi gerekli"),
      roomStock: yup
        .number()
        .required("Oda stoğu gerekli")
        .min(1, "Oda stoğu 1'den küçük olamaz"),
    })
  ),
});

const AddTour = () => {
  const [key, setKey] = useState<string | null>("tour");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const { fields: hotelFields, append: appendHotel } = useFieldArray({
    control,
    name: "hotelDetails",
  });

  const { fields: roomFields, append: appendRoom } = useFieldArray({
    control,
    name: "roomDetails",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <Card>
      <Card.Body>
        <h4 className="header-title">Add Tour</h4>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="tour"
          activeKey={key ? key : "tour"}
          onSelect={(k) => setKey(k)}
        >
          <Nav
            variant="pills"
            as="ul"
            className="nav-justified bg-light form-wizard-header mb-4"
          >
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
          </Nav>
          <Tab.Content className="pb-0 mb-0 pt-0">
            <Tab.Pane eventKey="tour">
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
                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                  <li className="next list-inline-item">
                    <Button onClick={() => setKey("hotel")} variant="secondary">
                      Next
                    </Button>
                  </li>
                </ul>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="hotel">
              <Form>
                {hotelFields.map((item, index) => (
                  <Row key={item.id}>
                    <Col md={4}>
                      <FormInput
                        label="Otel"
                        name={`hotelDetails[${index}].hotel`}
                        type="select"
                        containerClass={"mb-3"}
                        register={register}
                        errors={errors}
                      >
                        <option value="otel 1">otel 1</option>
                        <option value="otel 2">otel 2</option>
                        <option value="otel 3">otel 3</option>
                      </FormInput>
                    </Col>
                    <Col md={4}>
                      <FormInput
                        label="Check-in Tarihi"
                        name={`hotelDetails[${index}].checkInDate`}
                        type="date"
                        containerClass={"mb-3"}
                        register={register}
                        errors={errors}
                      />
                    </Col>
                    <Col md={4}>
                      <FormInput
                        label="Check-out Tarihi"
                        name={`hotelDetails[${index}].checkOutDate`}
                        type="date"
                        containerClass={"mb-3"}
                        register={register}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                ))}
                <Button
                  type="button"
                  onClick={() =>
                    appendHotel({
                      hotel: "",
                      checkInDate: "",
                      checkOutDate: "",
                    })
                  }
                  className="mb-3"
                >
                  Add Hotel
                </Button>
                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                  <li className="previous list-inline-item">
                    <Button onClick={() => setKey("tour")} variant="secondary">
                      Previous
                    </Button>
                  </li>
                  <li className="next list-inline-item">
                    <Button onClick={() => setKey("room")} variant="secondary">
                      Next
                    </Button>
                  </li>
                </ul>
              </Form>
            </Tab.Pane>
            <Tab.Pane eventKey="room">
              <Form onSubmit={handleSubmit(onSubmit)}>
                {roomFields.map((item, index) => (
                  <Row key={item.id}>
                    <Col md={4}>
                      <FormInput
                        label="Otel"
                        name={`roomDetails[${index}].hotel`}
                        type="select"
                        containerClass={"mb-3"}
                        register={register}
                        errors={errors}
                      >
                        {hotelFields.map((hotel, idx) => (
                          <option key={idx} value={hotel.hotel}>
                            {hotel.hotel}
                          </option>
                        ))}
                      </FormInput>
                    </Col>
                    <Col md={4}>
                      <FormInput
                        label="Oda Tipi"
                        name={`roomDetails[${index}].roomType`}
                        type="select"
                        containerClass={"mb-3"}
                        register={register}
                        errors={errors}
                      >
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                      </FormInput>
                    </Col>
                    <Col md={4}>
                      <FormInput
                        label="Oda Stoğu"
                        name={`roomDetails[${index}].roomStock`}
                        type="number"
                        containerClass={"mb-3"}
                        register={register}
                        errors={errors}
                      />
                    </Col>
                  </Row>
                ))}
                <Button
                  type="button"
                  onClick={() =>
                    appendRoom({ hotel: "", roomType: "", roomStock: 0 })
                  }
                  className="mb-3"
                >
                  Add Room
                </Button>
                <ul className="pager wizard mb-0 list-inline text-end mt-2">
                  <li className="previous list-inline-item">
                    <Button onClick={() => setKey("hotel")} variant="secondary">
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
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};

export default AddTour;
