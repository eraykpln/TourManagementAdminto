import React from 'react';
import AddHotel from '../../components/hotels/AddHotel';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const AddHotelPage = () => {
    usePageTitle({
        title: 'Hotels',
        breadCrumbItems: [
            { path: '/hotels', label: 'Hotels' },
            { path: '/hotels/add', label: 'Add Hotel', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <AddHotel />
        </DefaultLayout>
    );
};

export default AddHotelPage;
