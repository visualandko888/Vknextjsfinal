// src/components/Helmet/HelmetMeta.js

import Head from 'next/head';

const HelmetMeta = ({ title, description }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Head>
);

export default HelmetMeta;
