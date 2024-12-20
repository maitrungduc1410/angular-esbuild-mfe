const {
  withFederation,
  shareAll,
} = require("@module-federation/esbuild/build");

console.log(888888);

module.exports = withFederation({
  name: "app-shell",
  filename: "remoteEntry.js",
  exposes: {
    "./AppComponent": "./src/app/app.component.ts",
  },
  shared: ["@angular/core", "@angular/common", "@angular/router"],
});
