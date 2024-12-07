class ProgressBar extends HTMLElement {
    static get observedAttributes() {
        return ['progress'];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        const script = document.currentScript || (function () {
            const scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];
        })();

        const scriptDir = script.src.substring(0, script.src.lastIndexOf('/'));
        
        this.progress = Math.min(Math.max(this.progress, 0), 100);
        var dotsFilled = Math.round(this.progress / 20) - 1;

        const listItems = Array.from({ length: 5 }, (_, index) =>
            `<li class="${index === dotsFilled ? 'break' : ''}"></li>`
        ).join('');

        this.innerHTML = `
            <head>
                <link rel="stylesheet" type="text/css" href="${scriptDir}/progress-bar.css">
            </head>
            <ul class="progress-bar">
                ${listItems}
            </ul>
            <label class="progress-percentage">${this.levels[dotsFilled]}</label>
        `;
    }

    get progress() {
        return this.getAttribute('progress');
    }

    set progress(value) {
        this.setAttribute('progress', value);
    }

    levels = ['Beginner', 'Elementary', 'Intermediate', 'Advanced', 'Proficient'];
}

customElements.define('progress-bar', ProgressBar);