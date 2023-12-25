import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import { Toaster } from 'react-hot-toast';


const Layout = ({ children, title, description, author, keywords }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content={author} />
            </Helmet>
            <Header />
            <main className="layout" style={{ minHeight: "100vh" }}>
                <Toaster/>

                {children}
            </main>
            <Footer />
        </>
    )
}

Layout.defaultProps = {
    title: "Ecomm Express",
    description: "We sell the best products for cheap",
    author: "Chayan Rastogi",
    keywords: "MERN, React, Node, Express, MongoDB, Redux-Toolkit, Bootstrap",
};

export default Layout;
