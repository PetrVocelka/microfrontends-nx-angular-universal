module.exports = {
  name: 'header-react-ssr',
  exposes: {
    './Module': 'apps/header-react-ssr/src/remote-entry.ts',
  },
};
