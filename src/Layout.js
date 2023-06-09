import { Outlet } from "react-router-dom"
import Header from "./Header"
import LeftSideBar from "./LeftSideBar"

const Layout=()=>{
    return(
        <div class="layout">
            <LeftSideBar/>
            <Outlet/>
        </div>
    )

}
export default Layout