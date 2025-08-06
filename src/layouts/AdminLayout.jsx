import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AdminMenu from "../menus/AdminMenu";

export default function AdminLayout(){
    return(
        <>
            <Header menu={AdminMenu} showSearch={false}/>
            <Outlet/>
        </>
    )
}