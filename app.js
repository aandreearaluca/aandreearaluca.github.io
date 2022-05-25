particlesJS.load('particles-js', 'particlesjs-config.json', function () {
    console.log('callback - particles.js config loaded');
});

let tippyOptions = {
    placement: 'bottom',
    animation: 'perspective',
    theme: 'elegant'
};

tippy('#mail', {
    ...tippyOptions,
    content: 'aandreearaluca@gmail.com',
});

tippy('#call', {
    ...tippyOptions,
    content: '+40 761 448 791',
});

tippy('#linkedin', {
    ...tippyOptions,
    content: 'www.linkedin.com/in/albu-andreea-raluca',
});

tippy('#github', {
    ...tippyOptions,
    content: 'github.com/aandreearaluca',
});

