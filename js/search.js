/* GHOutdatedPackageFinder
 * A simple tool to find outdated packages across github.
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */


let packageManager;
let packageName;
let packageVersion;
let username;
let querys = [];
let query = '';
function constructQuery() {
    querys = [];
    query = '';
    packageManager = document.getElementById('package-manager').value;
    packageName = document.getElementById('package-name').value;
    packageVersion = document.getElementById('package-version').value.split(',');
    username = document.getElementById('username').value;
    if (packageName === '' || packageVersion === '') {
        alert('Please enter package name and version');
        return;
    }
    for (let i = 0; i < packageVersion.length; i++) {
        if (packageManager === 'pip') {
            query = `path:requirements.txt "${packageName}==${packageVersion[i]}"`;
            if (username !== '') {
                query = `owner:${username} ${query}`;
            }
        } else if (packageManager === 'npm') {
            query = `path:package.json "\"${packageName}\":\"${packageVersion[i]}\""`;
            if (username !== '') {
                query = `owner:${username} ${query}`;
            }
        } else if (packageManager === 'maven') {
            let packageDetails = packageName.split(':');
            if (packageDetails.length !== 2) {
                query = `path:pom.xml "<groupId>${packageDetails[0]}</groupId>" "<version>${packageVersion[i]}</version>"`;
            } else {
                query = `path:pom.xml "<groupId>${packageDetails[0]}</groupId>" "<artifactId>${packageDetails[1]}</artifactId>" "<version>${packageVersion[i]}</version>"`;
            }
            if (username !== '') {
                query = `owner:${username} ${query}`;
            }
        } else if (packageManager === 'gradle') {
            let packageDetails = packageName.split(':');
            if (packageDetails.length !== 2) {
                query = `path:build.gradle "group:'${packageDetails[0]}'" "version:'${packageVersion[i]}'"`;
            } else {
                query = `path:build.gradle "group:'${packageDetails[0]}'" "name:'${packageDetails[1]}'" "version:'${packageVersion[i]}'"`;
            }
            if (username !== '') {
                query = `owner:${username} ${query}`;
            }
        } else if (packageManager === 'composer') {
            query = `path:composer.json "\"${packageName}\":\"${packageVersion[i]}\""`;
            if (username !== '') {
                query = `owner:${username} ${query}`;
            }
        }
        querys.push(query);
    }
    query = querys.join(' OR ');
    return query;
}

function openSearch(query) {
    window.open(`https://www.github.com/search?q=${query}&type=code`);
}

function clearFields() {
    document.getElementById('package-name').value = '';
    document.getElementById('package-version').value = '';
    document.getElementById('username').value = '';
}