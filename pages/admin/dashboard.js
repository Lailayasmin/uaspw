import React from 'react'
import LayoutAdmin from '../../Component/Kadmin/LayoutAdmin'
import Card from '../../Component/Kadmin/Card'

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
