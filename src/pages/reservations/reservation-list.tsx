import React from 'react';
import ReservationList from '../../components/reservations/ReservationList';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const ReservationListPage = () => {
    usePageTitle({
        title: 'Reservations',
        breadCrumbItems: [
            { path: '/reservations', label: 'Reservations' },
            { path: '/reservations/list', label: 'Reservation List', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <ReservationList />
        </DefaultLayout>
    );
};

export default ReservationListPage;
