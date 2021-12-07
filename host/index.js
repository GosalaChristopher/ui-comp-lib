window.onload =() => {
  let config = {};

  document.getElementById('default').addEventListener('click', () => {
    document.querySelector('contact-card').setAttribute('variant', 'default');
    document.querySelector('contact-card').removeAttribute('bootstraped');

  });

  document.getElementById('business').addEventListener('click', () => {
    document.querySelector('contact-card').setAttribute('variant', 'business');
    document.querySelector('contact-card').removeAttribute('bootstraped');

  });

  document.getElementById('fuzzy').addEventListener('click', () => {
    document.querySelector('contact-card').setAttribute('variant', 'fuzzy');
    document.querySelector('contact-card').removeAttribute('bootstraped');
  });

  const setConfig = (confSet) => {
    config = {
      ...config,
      ...confSet,
    }

    document.querySelector('contact-card').setAttribute('config', JSON.stringify(config));
    document.querySelector('contact-card').removeAttribute('bootstraped');
  }

  document.getElementById('name').addEventListener('blur', (e) => {
    setConfig({'name': e.target.value})
  });
  document.getElementById('title').addEventListener('blur', (e) => {
    setConfig({'title': e.target.value})
  });
  document.getElementById('description').addEventListener('blur', (e) => {
    setConfig({'description': e.target.value})
  });
};