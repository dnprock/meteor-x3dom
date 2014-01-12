Package.describe({
  summary: "x3dom package for meteor"
});

Package.on_use(function (api) {
  api.export('x3dom', 'client');

  api.add_files(
     'lib/x3dom/x3dom-full.debug.modified.js','client'
  );
});
