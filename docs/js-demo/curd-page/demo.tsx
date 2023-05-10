import React from 'react';
import Demo from './demo/index';
import { withRouter } from 'umi';
import { test } from './simplePoller';
console.log('🚀 ~ file: demo.tsx:5 ~ simplePoller:', test());

export default withRouter((props: any) => {
  return <Demo {...props} />;
});
