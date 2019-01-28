var nativefier = require('nativefier').default;

// possible options, defaults unless specified otherwise
var options = {
    name: 'Google Calendar', // will be inferred if not specified
    targetUrl: 'https://calendar.google.com', // required
    platform: 'darwin', // defaults to the current system
    arch: 'x64', // defaults to the current system
    version: '1.0',
    out: './build',
    overwrite: false,
    icon: './calendar_96dp.png',
    showMenuBar: false,
    fastQuit: true,
    singleInstance: true,
    fileDownloadOptions: {
      saveAs: true // always show "Save As" dialog
    },
    titleBarStyle: 'hiddenInset',
    inject: ['./calendar.css']
};

nativefier(options, function(error, appPath) {
    if (error) {
        console.error(error);
        return;
    }
    console.log('App has been nativefied to', appPath);
});