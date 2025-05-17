import { version } from '#'; // import the version from the source code on github

const localconfig = path('./config.json');
const latestVersion = config.version;

function startup() {
    // check DigiCup version via json file, emmit an alert if there's a new version
    const currentVersion = '0.1.0';

    const latestVersion = localconfig.version;
    if (currentVersion !== latestVersion) {
        alert(`A new version of DigiCup is available: ${latestVersion}. Please update to the latest version.`);
    }
}

// startup();