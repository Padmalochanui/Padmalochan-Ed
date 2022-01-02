import React from 'react'
import AllProduct from './AllProduct'
import DropdownList from './DropdownList'

function MainComponent() {
    return (
        <div>
            <div className='all'>
                <div class="row">
                    <div class="col-2">
                        <DropdownList/>
                    </div>
                    <div class="col-10">
                        <AllProduct/>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default MainComponent
