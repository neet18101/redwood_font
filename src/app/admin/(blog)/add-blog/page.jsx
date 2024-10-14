import React from 'react'
import RootLayout from '../../layout'
import AdminHeader from '../../components_admin/AdminHeader'
import Sidebar from '../../components_admin/Sidebar'

function page() {
    return (
        <RootLayout>
            <AdminHeader />
            <Sidebar />



        </RootLayout>
    )
}

export default page