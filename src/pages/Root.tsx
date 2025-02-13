import { Outlet } from "react-router-dom"

function Root() {

    return (
        <div className="container mx-auto px-20 text-black">
            <Outlet />
        </div>
    )
}
export default Root 