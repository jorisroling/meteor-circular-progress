Package.describe({
  name: 'jorisroling:circular-progress',
  summary: "A reactive, flexible, SVG-based circular progress bar for Meteor",
  version: '1.0.0',
  git: 'https://github.com/jorisroling/meteor-circular-progress',
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.0');
    api.use(['templating', 'd3@1.0.0'], 'client');
    api.addFiles(['circular_progress.html', 'circular_progress.js'], 'client');
});

