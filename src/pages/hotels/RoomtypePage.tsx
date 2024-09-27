import React from 'react';
import Roomtype from '../../components/hotels/Roomtype';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const RoomtypePage = () => {
    usePageTitle({
        title: 'Hotels',
        breadCrumbItems: [
            { path: '/hotels', label: 'Hotels' },
            { path: '/hotels/roomtype', label: 'Room Types', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <Roomtype />
        </DefaultLayout>
    );
};

export default RoomtypePage;
