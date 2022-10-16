class AudioComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        let component = document.createElement('div');
        component.setAttribute('class', 'audio');

        this.audio = document.createElement('audio');
        this.audio.src = this.getAttribute('src');
        //this.audio.controls = 'true';
        component.appendChild(this.audio);

        let title = document.createElement('div');
        title.innerHTML = this.getAttribute('src');
        component.appendChild(title);

        let play = document.createElement('button');
        play.innerHTML = 'Play';
        play.addEventListener('click', () => {
            this.audio.play();
        });
        component.appendChild(play);

        let pause = document.createElement('button');
        pause.innerHTML = 'Pause';
        pause.addEventListener('click', () => {
            this.audio.pause();
        });
        component.appendChild(pause);

        let forward = document.createElement('button');
        forward.innerHTML = 'Avancer de 10 secondes';
        forward.addEventListener('click', () => {
            this.audio.currentTime += 10;
        });
        component.appendChild(forward);

        let backword = document.createElement('button');
        backword.innerHTML = 'Revenir de 10 secondes';
        backword.addEventListener('click', () => {
            if (backword < 10) {
                this.audio.currentTime = 0;
            }
            else {
                this.audio.currentTime -= 10;
            }
        });
        component.appendChild(backword);

        let style = document.createElement('link');
        style.setAttribute('rel', 'stylesheet');
        style.setAttribute('href', 'components/audio-component/style.css');
        
        this.shadowRoot.appendChild(style);
        this.shadowRoot.appendChild(component);
    }
}

customElements.define('audio-component', AudioComponent);