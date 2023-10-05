import '../assets/scss/main.scss'

const lists = document.querySelectorAll('.list');

function addTask() {
   const btn = document.querySelector('.add_btn');
   const addBtn = document.querySelector('.add_item-btn');
   const cancelBtn = document.querySelector('.cancel_item-btn');
   const textarea = document.querySelector('.textarea');
   const form = document.querySelector('.form');

   let value

   btn.addEventListener('click', () => {
      form.style.display = 'block'
      btn.style.display = 'none'
      addBtn.style.display = 'none'
   })
}

addTask();