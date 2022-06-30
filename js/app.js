console.log('coucou !')

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
