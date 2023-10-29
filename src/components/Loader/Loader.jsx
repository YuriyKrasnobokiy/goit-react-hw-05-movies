import { Hourglass } from 'react-loader-spinner';

import React from 'react';

export const Loader = () => {
  return (
    <div>
      <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
    </div>
  );
};
