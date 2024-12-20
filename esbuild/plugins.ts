const federationConfig = require('./federation.config.js');
const { moduleFederationPlugin } = require('@module-federation/esbuild/plugin');

const plugin = moduleFederationPlugin(federationConfig);
console.log(9999, plugin);
export default plugin;
