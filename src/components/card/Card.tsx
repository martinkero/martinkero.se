import React from 'react';

import './Card.css'

export const Card = () =>
    <div className="card">
        <header>
            <p className="name">
                Martin Kero
            </p>
            <p>
                Utvecklare
            </p>
        </header>
        <section>
            <div className="wip">WIP</div>
        </section>
        <footer>
            <div className="link">
                <a href="https://www.linkedin.com/in/martin-kero-63308950" target="_blank">Linkedin</a>
            </div>
            <div className="link">
                <a href="https://github.com/martinkero" target="_blank">GitHub</a>
            </div>
        </footer>
    </div>