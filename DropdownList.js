import React from 'react'
import Dropdown from './Dropdown'
import StateDropdown from './StateDropdown'

function DropdownList() {
    return (
        <div className='Dropdown'>
            <h2>Filters</h2>
            <hr/>
            <div>
                <StateDropdown />
            </div>
            <div>
                <StateDropdown />
            </div>
            <div>
                <Dropdown />
            </div>
        </div>
    )
}

export default DropdownList
