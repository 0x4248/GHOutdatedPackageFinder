/* GHOutdatedPackageFinder
 * A simple tool to find outdated packages across github.
 * GitHub: https:///www.github.com/0x4248
 * Licence: GNU General Public License v3.0
 * By: 0x4248
 */

let content = `
<h2>Why is updating dependencies important?</h2>
<p>Updating dependencies is important because it ensures that your project is secure and up-to-date. Outdated dependencies can have security vulnerabilities that can be exploited by attackers. By updating your dependencies, you can protect your project from these vulnerabilities and keep it running smoothly.</p>

<h2>How to update packages?</h2>
<p>Updating packages is easy. In the <code>requirements.txt</code>, <code>package.json</code> or whatever file you are using to manage your dependencies, simply change the version number of the package you want to update to the latest version. Then push the changes to your repository and your dependencies will be updated.</p>

<h2>How can I find out new vulnerabilities in my dependencies?</h2>
<p>There are many tools available that can help you find vulnerabilities in your dependencies. Some popular tools include <a href="https://snyk.io/">Snyk</a> and <a href="https://dependabot.com/">Dependabot</a></p>`;

document.getElementById('content').innerHTML = content;