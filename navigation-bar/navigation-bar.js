class NavigationBar extends HTMLElement {
    connectedCallback() {
        const script = document.currentScript || (function () {
            const scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];
        })();
        
        const scriptDir = script.src.substring(0, script.src.lastIndexOf('/'));

        this.innerHTML = `
            <head>
                <link rel="stylesheet" type="text/css" href="${scriptDir}/navigation-bar.css">
            </head>
            <nav id="navigation">
                <div class="menu-icon" id="menu-icon">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="menu-items" id="menu-items">
                    <a href="https://gilmarferrari.github.io/portfolio">PROFILE</a>
                    <a href="https://gilmarferrari.github.io/portfolio/projects">PROJECTS</a>
                    <a href="https://gilmarferrari.github.io/portfolio/timeline">TIMELINE</a>
                    <a href="https://gilmarferrari.github.io/portfolio/technologies">TECHS</a>
                    <a href="https://gilmarferrari.github.io/portfolio/contact">CONTACT</a>
                </div>
            </nav>
        `;
    }
}

customElements.define('navigation-bar', NavigationBar);