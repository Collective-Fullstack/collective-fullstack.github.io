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
                    <meta property="og:image" content="https://collective-fullstack.github.io/og-card.png"/>

                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://collective-fullstack.github.io"/>
                    <meta property="twitter:title" content="Collective Fullstack - Web Developers"/>
                    <meta property="twitter:description" content="We are a small two person freelance company who specialize in web development. Previous work includes building everything from environmental monitoring systems to chat clients."/>
                    <meta property="twitter:image" content="https://collective-fullstack.github.io/og-card.png"/>
        </Helmet>
    );
}

export default Head;
