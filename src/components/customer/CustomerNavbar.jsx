import React, { useState } from 'react';
import NavCss from './Nav.module.css'
import AddApplication from '../common/AddApplication';

const CustomerNavbar = () => {
    const [modal, setModal] = useState(false);

    return (
        <>
            <div className={NavCss.navbar}>
                <div className='container'>
                    <div className={NavCss.header}>
                        <div><p>Status</p></div>
                        <button onClick={() => setModal(true)}>Incurance</button>
                    </div>
                </div>
            </div>
            {modal && <div className='overlay'>
                <AddApplication setModal={setModal} />
            </div>}
        </>
    )
}

export default CustomerNavbar