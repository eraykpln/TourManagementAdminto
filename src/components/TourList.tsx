import React from "react";
import { Table } from "react-bootstrap";
import { tours } from "../pages/tours/tours";

const TourList = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tour Name</th>
          <th>Tour Country</th>
          <th>Tour City</th>
          <th>Tour Guide</th>
          <th>Price</th>
          <th>Start Date</th>
          <th>End Date</th>
        </tr>
      </thead>
      <tbody>
        {tours.map((tour, index) => (
          <tr key={index}>
            <td>{tour.name}</td>
            <td>{tour.country}</td>
            <td>{tour.city}</td>
            <td>{tour.guide}</td>
            <td>{tour.price}</td>
            <td>{tour.startDate}</td>
            <td>{tour.endDate}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TourList;
