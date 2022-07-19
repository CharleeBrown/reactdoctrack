import React, { lazy, Suspense } from 'react';

const LazyLogins = lazy(() => import('./Logins'));

const Logins = props => (
  <Suspense fallback={null}>
    <LazyLogins {...props} />
  </Suspense>
);

export default Logins;
