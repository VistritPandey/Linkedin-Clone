import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HeaderOption from './HeaderOption'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.flaticon.com/icons/png/512/61/61109.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="" />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search won't work :("/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption title="Home"/>
                <HeaderOption title="My Network"/>
                <HeaderOption title="Jobs"/>
                <HeaderOption title="Messaging"/>
                <HeaderOption title="Notifications"/>

            </div>
        </div>
    )
}

export default Header
