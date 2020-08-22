import React from 'react';

import './Card.css';
import { Link } from '../link/Link';

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
            <Link href="https://www.linkedin.com/in/martin-kero-63308950" text="LinkedIn" className="link" />
            <Link href="https://github.com/martinkero" text="GitHub" className="link" />
        </footer>
    </div>