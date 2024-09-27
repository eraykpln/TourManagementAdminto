import React from 'react';
import HotelList from '../../components/hotels/HotelList';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const HotelListPage = () => {
    usePageTitle({
        title: 'Hotels',
        breadCrumbItems: [
            { path: '/hotels', label: 'Hotels' },
            { path: '/hotels/list', label: 'Hotel List', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <HotelList />
        </DefaultLayout>
    );
};

export default HotelListPage;
