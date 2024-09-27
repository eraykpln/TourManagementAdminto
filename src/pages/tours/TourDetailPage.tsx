import React from 'react';
import { useParams } from 'react-router-dom';
import { tours } from '../../components/tours/TourList';
import DefaultLayout from '../../layouts/Default';

const TourDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    if (!id) {
        return <p>Invalid tour ID</p>;
    }
    const tour = tours.find(t => t.id === parseInt(id));

    if (!tour) {
        return <p>Tour not found</p>;
    }

    return (
        <DefaultLayout>
            <h2>{tour.name}</h2>
            <p>Date: {tour.date}</p>
            <p>Price: ${tour.price}</p>
            <p>Description: {tour.description}</p>
        </DefaultLayout>
    );
};

export default TourDetailPage;
