import React from 'react';
import { Helmet } from 'react-helmet'
const Head = (props) => {
    return (
        <Helmet>
                <meta charSet="utf-8" />
                    <title>Collective Fullstack - Web Developers</title>
                    <meta name="title" content="Collective Fullstack - Web Developers"/>
                    <meta name="description" content="We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients."/>

                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://collective-fullstack.github.io"/>
                    <meta property="og:title" content="Collective Fullstack - Web Developers"/>
                    <meta property="og:description" content="We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients."/>
                    <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>

                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://collective-fullstack.github.io"/>
                    <meta property="twitter:title" content="Collective Fullstack - Web Developers"/>
                    <meta property="twitter:description" content="We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients."/>
                    <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
        </Helmet>
    );
}

export default Head;
