console.log('Hello, Bienvenue dans la console !')

function showProject() {
  const links = document.querySelectorAll('.projects__card-link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const resetModal = () => {
    modals.forEach(modal=> {
      modal.classList.remove('show')
    });
  }

  links.forEach(element=>{
    element.addEventListener('click',(event)=>{
      event.preventDefault();
      document.querySelector(`[id=${element.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn =>{
    btn.addEventListener('click',(event)=>{
      resetModal();
      
    });
  });
  

}

showProject();

const animations = () => {
  const sections = document.querySelectorAll('section');

  sections.forEach((section, index)=> {
    /*console.log(index);*/
    if (index === 0) return;
    section.style.opacity="0";
    section.style.transition="all 1.5s";
  });

  let sectionObserver = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry=>{
      if(entry.isIntersecting) {
        let elem = entry.target;
        /*console.log(elem);*/
        elem.style.opacity=1;
      }
    });
  });

  sections.forEach(section=> {
    sectionObserver.observe(section)
  });

}

animations();