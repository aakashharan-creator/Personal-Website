import React from 'react'
import NavLink from './NavLink';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Aakash Haran</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <NavLink sectionTitle={'Home'} href={'home'} />
                        </li>
                        <li class="nav-item active">
                            <NavLink sectionTitle={'About Me'} href={'about_me'} />
                        </li>
                        <li class="nav-item active">
                            <NavLink sectionTitle={'Resume'} href={'resume'} />
                        </li>
                        <li class="nav-item active">
                            <NavLink sectionTitle={'Projects'} href={'projects'} />
                        </li>
                        <li class="nav-item active">
                            <NavLink sectionTitle={'Contact'} href={'contact'} />
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
