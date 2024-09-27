import React from 'react';
import AddReservation from '../../components/reservations/AddReservation';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const AddReservationPage = () => {
    usePageTitle({
        title: 'Reservations',
        breadCrumbItems: [
            { path: '/reservations', label: 'Reservations' },
            { path: '/reservations/add', label: 'Add Reservation', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <AddReservation />
        </DefaultLayout>
    );
};

export default AddReservationPage;
