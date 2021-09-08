import React from 'react';
import Demo from './demo/index';
import { withRouter } from 'umi';

export default withRouter((props: any) => {
  return <Demo {...props} />;
});
