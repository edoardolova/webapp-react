import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
//menus
import DefaultMenu from '../menus/DeafultMenu'

export default function DefaultLayout(){
    return(
        <>
            <Header menu={DefaultMenu} showSearch={true}/>
            <Outlet/>
            <Footer/>
        </>
    )
}