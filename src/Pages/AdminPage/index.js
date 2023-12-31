import StaffHeader from "../../components/StaffHeader";
import AdminSidebar from "../../components/AdminSidebar";
import StaffContainer from "../../components/StaffContainer";
import AddStaffContainer from "../../components/AddStaffContainer";
import { Route, Routes } from "react-router-dom";

import classNames from "classnames/bind";
import style from './AdminPage.module.scss';

const cx = classNames.bind(style);

function AdminPage() {
    return (
        <div>
            <StaffHeader />
            <div className={cx('container')}>
                <AdminSidebar />
                <StaffContainer />
            </div>
        </div>
    );
}

export default AdminPage;