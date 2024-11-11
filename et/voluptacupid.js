/**
 * Processes the elements of a non-empty path.
 * @param {string[]} path - An array representing a path.
 */
function processPath(path) {
    if (path && path.length > 0) {
        // Process each element of the path
        path.forEach(element => {
            // Perform operations with each element
            console.log(element);
        });
    } else {
        console.log('Path is empty or not provided.');
    }
}

// Example usage:
const myPath = ['folder', 'subfolder', 'file.txt'];
processPath(myPath);
