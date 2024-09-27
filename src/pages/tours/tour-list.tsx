import React from 'react';
import TourList from '../../components/tours/TourList';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const TourListPage = () => {
    usePageTitle({
        title: 'Tours',
        breadCrumbItems: [
            { path: '/tours', label: 'Tours' },
            { path: '/tours/list', label: 'Tour List', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <TourList />
        </DefaultLayout>
    );
};

export default TourListPage;
