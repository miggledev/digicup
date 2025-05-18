var sh = require('shelljs');

const args = process.argv.slice(2);
const [version, distroName] = args;

const pluginSource = './src';
const pluginDest = `./dist/${distroName}`;
const pluginDestZip = `./dist/${distroName}.zip`;

interface ErrorHandler {
    (error: Error | string): void;
}

export const onError: ErrorHandler = function(error: Error | string): void {
    console.error('Error:', error);
    process.exit(1);
};

export function build(distroName: string): void {
    console.log(`Building ${distroName}...`);
    sh.exec(`pnpm run build -- --distro ${distroName}`, { silent: true }, (code: number, stdout: string, stderr: string) => {
        if (code !== 0) {
            onError(stderr);
        } else {
            console.log(stdout);
        }
    });
    function zipPlugin(): void {
        console.log(`Zipping ${distroName}...`);
        sh.exec(`zip -r ${pluginDestZip} ${pluginDest}`, { silent: true }, (code: number, stdout: string, stderr: string) => {
            if (code !== 0) {
                onError(stderr);
            } else {
                console.log(stdout);
            }
        });
    }
}