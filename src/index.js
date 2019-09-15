import app from './app';

import cluster from './utils/cluster';

require('dotenv');

const server = app => {
  const port = process.env.PORT || 4000;
  return () => {
    app.listen(port, () => {
      global.console.log(`🚀 Server ready at http://localhost:${port}/api`);
    });
  };
};

if (process.env.NODE_CLUSTER) cluster(server(app()))
else server(app())();
