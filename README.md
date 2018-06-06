# Zendesk App Webpack Example

An example of using webpack for development and production builds of a Zendesk App.
 
## Zendesk Apps Tools (zat)

You need to have ZAT installed.

```
gem install zendesk_apps_tools
```

We need to run `zat server` with a custom port and assets_dir. The assets_dir
setting is currently only available in this fork:
https://github.com/rmarscher/zendesk_apps_tools/tree/rmarscher/assets-dir-setting

You would clone, bundle install, switch to the `rmarscher/assets-dir-setting`
branch and then build and install the gem.

```
gem build zendesk_apps_tools.gemspec
gem install --local zendesk_apps_tools
```

## Develop

In one terminal window, go to the static folder and run `zat server --port 4568 --assets_dir http://localhost:4567/`. Then in another window, run `yarn develop` or `npm run develop`.

When debugging by appending ?zat=true to your Zendesk ticket url, make sure
you are looking in the iframe sources in devtools. Zendesk also uses webpack for
the Zendesk Support website, so you could easily end up searching through their
sources.

## Build

`npm run build` or `yarn build`
This will use webpack to build into the dist folder and then run `zat package`
from the dist folder.

