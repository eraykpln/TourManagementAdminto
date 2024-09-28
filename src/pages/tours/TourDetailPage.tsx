import React from "react";
import { useParams } from "react-router-dom";
import { tours } from "../../components/tours/TourList";
import DefaultLayout from "../../layouts/Default";

const TourDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) {
    return <p>Invalid tour ID</p>;
  }
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return <p>Tour not found</p>;
  }

  return (
    <DefaultLayout>
      <h2>{tour.name}</h2>
      <p>Start Date: {tour.startDate}</p>
      <p>End Date: {tour.endDate}</p>
      <p>Price: ${tour.price}</p>
      <p>Schengen Required: {tour.schengenRequired ? "Yes" : "No"}</p>
      <p>Country: {tour.country}</p>
      <p>City: {tour.city}</p>
      <p>Guide: {tour.guide || "N/A"}</p>
      <p>Description: {tour.description}</p>
      <p>Workspace: {tour.workspace || "N/A"}</p>
    </DefaultLayout>
  );
};

export default TourDetailPage;
