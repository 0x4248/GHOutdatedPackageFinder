/* GHOutdatedPackageFinder
 * A simple tool to find outdated packages across github.
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */


document.getElementById('package-name').oninput = function() {
    if (document.getElementById('package-name').value !== '' && document.getElementById('package-version').value !== '') {
        query = constructQuery();
        document.getElementById('expected-query').innerHTML = query;
    }
}

document.getElementById('package-version').oninput = function() {
    if (document.getElementById('package-name').value !== '' && document.getElementById('package-version').value !== '') {
        query = constructQuery();
        document.getElementById('expected-query').innerText = query;
    }
}

document.getElementById('username').oninput = function() {
    if (document.getElementById('package-name').value !== '' && document.getElementById('package-version').value !== '') {
        query = constructQuery();
        document.getElementById('expected-query').innerText = query;
    }
}

document.getElementById('package-manager').onchange = function() {
    if (document.getElementById('package-name').value !== '' && document.getElementById('package-version').value !== '') {
        query = constructQuery();
        document.getElementById('expected-query').innerText = query;
    }
}
