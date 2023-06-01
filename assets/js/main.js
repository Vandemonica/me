// Main alpinejs function
// =============================================================================

function alpine_wrapper() {
  return {
    placeholder: 'Section currently under construction',
    title: title,
    activeTab: 'about',
    modal: {
      text: ''
    },
    intro: {
      session: localStorage.getItem('visited'),
      elem: document.getElementById('intro-pane'),
      alert: 'Establishing Connection'
    },
    navigations: [
      { title: 'About', href: 'about' },
      { title: 'Education', href: 'education' },
      { title: 'Portfolio', href: 'portfolio' }
    ],
    profile: {
      about: `
        Ello there Anon! I'm Nircahya, though I also goes by other internet nicknames.
        I'm a simple web programmer who waltz a lot around the internet..
      `,
      discord: 'Mepha#3262',
      skills: [
        {
          color: '#777BB3',
          title: 'PHP'
        }, {
          color: '#E44D26',
          title: 'HTML'
        }, {
          color: '#2965f1',
          title: 'CSS'
        }, {
          color: '#F0DB4F',
          title: 'Javascript'
        }, {
          color: '#FFD43B',
          title: 'Python'
        }, {
          color: '#044F88',
          title: 'C++'
        }, {
          color: '#41B883',
          title: 'VueJs'
        }, {
          color: '#61dbfb',
          title: 'React-Native'
        }, {
          color: '#F29111',
          title: 'SQL'
        }, {
          color: '#3E2C00',
          title: 'git'
        }
      ],
      socials: [
        {
          href: 'https://github.com/Vandemonica',
          icon: socialGithub
        }, {
          href: 'mailto:inircahya@gmail.com',
          icon: socialEmail
        }
      ]
    },
    svg: {
      caret: caret,
      caretUp: caretUp,
      connection: connection,
      security: security,
      angel: angel,
      discord: socialDiscord,
    },
    init() {
      console.log('Alpine Initialized!');

      // new Splide('.splide').mount();

      if (this.intro.session == '1') {
        this.closeIntroPane();

      } else {
        // I had a stroke reading tutorial about css keyframe, so.. I did this instead
        setTimeout(() => this.intro.elem.classList.add('phase-1'), 1200);
        setTimeout(() => this.intro.elem.classList.add('phase-2'), 2000);
        setTimeout(() => this.intro.elem.classList.add('phase-3'), 2800);
        setTimeout(() => {
          document.getElementById('intro-alert').classList.add('flicker');
          this.intro.alert = '[click anywhere to start]';
        }, 3800);

      }
    },
    scrollTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
    copyText(value, alert) {
      navigator.clipboard.writeText(value);
      this.alertModal(alert);
    },
    alertModal(text) {
      const elem = document.getElementById('modal-pane');

      if (text != '') {
        elem.classList.add('active');
        this.modal.text = text;
      } else {
        elem.classList.remove('active');
        this.modal.text = '';
      }
    },
    closeIntroPane() {
      // hard remove the intro-pane
      document.querySelector('body').classList.remove('overflow-hidden');
      this.intro.elem.classList.add('d-none');
      document.getElementById('to-top-stripe').classList.add('active');
    },
    doCloseIntroPane() {
      // smooth remove intro-pane with transition
      if (this.intro.elem.classList.contains('phase-3')) {
        this.intro.elem.classList.add('phase-4');

        setTimeout(() => {
          this.closeIntroPane();
          localStorage.setItem('visited', '1');
        }, 1000);
      }
    }
  };
}
