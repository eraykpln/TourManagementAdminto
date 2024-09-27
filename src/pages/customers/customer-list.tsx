import React from 'react';
import CustomerList from '../../components/customers/CustomerList';
import DefaultLayout from '../../layouts/Default';

const CustomerListPage = () => {
    return (
        <DefaultLayout>
            <CustomerList />
        </DefaultLayout>
    );
};

export default CustomerListPage;
