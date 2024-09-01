const fs = require('fs');
const path = require('path');

const cachePath = path.join(__dirname, '..', 'node_modules', '.cache');

function deleteDirectory(directoryPath) {
    if (fs.existsSync(directoryPath)) {
        fs.rmSync(directoryPath, { recursive: true, force: true });
        console.log(`Deleted: ${directoryPath}`);
    } else {
        console.log(`Directory not found: ${directoryPath}`);
    }
}

deleteDirectory(cachePath);