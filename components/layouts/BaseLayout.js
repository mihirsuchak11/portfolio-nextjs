import React from 'react';

import Header from '../shared/Header';

export default function BaseLayout({ className, children }) {
    return (
        <div className="layout-container">
            <Header />
            <main className={`cover ${className}`}>
                <div className="wrapper">
                    {children}
                </div>
            </main>
        </div>
    )
}
