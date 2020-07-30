const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#FF4D4F",
              "@layout-header-background": "white",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
