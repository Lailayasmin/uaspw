import LayoutAdmin from '../../Component/Kuser/LayoutAdmin'
import Card from '../../Component/Kuser/Card'

export default function dashboard() {
    return (
        <div>
            <LayoutAdmin>
            <div className="container-fluid">
            <div className="row">
            <Card/>
            </div>
            </div>
            </LayoutAdmin>
        </div>
    )
}
