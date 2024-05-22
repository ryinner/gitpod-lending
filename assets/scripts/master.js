window.onload = initialize

function initialize () {
  initializeBurgetMenu();
  initializeSlider();
  initializeModal();
  initializeSwicher();
}

function initializeBurgetMenu () {
  const burgerMenu = document.querySelector('.burger-menu');

  if (burgerMenu === null) {
    throw new Error('Burger menu is not defined');
  }

  document.querySelectorAll('.burger').forEach(e => {
    e.addEventListener('click', () => {
      burgerMenu.classList.toggle('burger-menu--active');
    });
  });
}

function initializeSlider () {
  const slider = document.querySelector('.rewiews-list');

  if (slider === null) {
    throw new Error('Reviews slider is not defined');
  }

  const sliderStepWidth = slider.querySelector('.rewiews-item').offsetWidth + slider.style.gap;
  const { length: sliderChildrenLength} = slider.children;
  let step = 0;

  setInterval(() => {
    step++
    if (step >= sliderChildrenLength) {
      step = 0;
    }
    slider.style.transform = `translateX(-${sliderStepWidth * step}px)`;
  }, 2000);
}

function initializeModal () {
  const modal = document.querySelector('.modal');
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const modalBackground = document.querySelector('.modal-background');
  const modalClose = document.querySelector('.modal-close');

  if (modal === null || modalTriggers.length === 0 || modalBackground === null || modalClose === null) {
    throw new Error('Modal is not defined');
  }

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      modal.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    });
  });

  modalBackground.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  function closeModal (event) {
    event.stopPropagation();
    event.preventDefault();
    modal.classList.remove('modal--active');
    document.body.style.overflow = 'initial';
  }
}

function initializeSwicher () {
  const switcherTriggers = document.querySelectorAll('.modal-switcher-trigger');
  const switcherContents = document.querySelectorAll('.modal-switcher-content');

  if (switcherTriggers.length === 0 ) {
    throw new Error('Switcher is not defined');
  }

  if (switcherContents.length !== switcherTriggers.length) {
    console.log(switcherContents, switcherTriggers)
    throw new Error('Switcher trigger is not equeal contents');
  }

  switcherTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      switcherTriggers.forEach((t) => {
        t.classList.remove('modal-switcher-trigger--active');
      });
      trigger.classList.add('modal-switcher-trigger--active');
      const { type } = trigger.dataset;
      switcherContents.forEach(content => {
        if (content.dataset.type === type) {
          content.classList.add('modal-switcher-content--active');
        } else {
          content.classList.remove('modal-switcher-content--active');
        }
      })
    });
  })
}
