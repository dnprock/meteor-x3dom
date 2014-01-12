Package.describe({
  summary: "x3dom package for meteor"
});

Package.on_use(function (api) {
  api.use('jquery', 'client');
  api.add_files([
      'lib/x3dom/x3dom-full.js'
    ]
    ,'client'
  );

  api.export(['x3dom'], 'client');
});
