import React from "react";
import AddTour from "../../components/tours/AddTour";
import DefaultLayout from "../../layouts/Default";
import { usePageTitle } from "../../hooks";

const AddTourPage = () => {
  usePageTitle({
    title: "Tours",
    breadCrumbItems: [
      { path: "/tours", label: "Tours" },
      { path: "/tours/add", label: "Add Tour", active: true },
    ],
  });

  return (
    <DefaultLayout>
      <AddTour />
    </DefaultLayout>
  );
};

export default AddTourPage;
