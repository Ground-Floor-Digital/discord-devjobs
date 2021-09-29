import React from 'react';

const LandingPage = () => {
  // @ts-ignore
  import Page from '../../components/Page';
  // @ts-ignore
  import { Helmet } from 'react-helmet';
  return (
    <Page>
      <Helmet>
        <title>Discord Jobs Board</title>
        <meta name="description" content="Post or Find Jobs from within Discord servers" />
      </Helmet>
      <h1 className="text-4xl font-bold">Discord Jobs Board</h1>
    </Page>
  );
};

export default LandingPage;
