import React from 'react';
import CustomerList from '../../components/customers/CustomerList';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const CustomerListPage = () => {
    usePageTitle({
        title: 'Customers',
        breadCrumbItems: [
            { path: '/customers', label: 'Customers' },
            { path: '/customers/customer-list', label: 'Customer List', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <CustomerList />
        </DefaultLayout>
    );
};

export default CustomerListPage;
