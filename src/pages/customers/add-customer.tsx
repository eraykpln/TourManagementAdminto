import React from 'react';
import AddCustomer from '../../components/customers/AddCustomer';
import DefaultLayout from '../../layouts/Default';
import { usePageTitle } from '../../hooks';

const AddCustomerPage = () => {
    usePageTitle({
        title: 'Customers',
        breadCrumbItems: [
            { path: '/customers', label: 'Customers' },
            { path: '/customers/add-customer', label: 'Add Customer', active: true },
        ],
    });

    return (
        <DefaultLayout>
            <AddCustomer />
        </DefaultLayout>
    );
};

export default AddCustomerPage;
