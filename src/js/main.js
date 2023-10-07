import '../assets/scss/main.scss';

const lists = document.querySelectorAll('.list');
const button = document.querySelector('.button');

function addTask() {
   const btn = document.querySelector('.add_btn');
   const addBtn = document.querySelector('.add_item-btn');
   const cancelBtn = document.querySelector('.cancel_item-btn');
   const textarea = document.querySelector('.textarea');
   const form = document.querySelector('.form');

   let value;

   btn.addEventListener('click', () => {
      form.style.display = 'block';
      btn.style.display = 'none';
      addBtn.style.display = 'none';

      textarea.addEventListener('input', (e) => {
         value = e.target.value;
         if (value) {
            addBtn.style.display = 'block';
         } else {
            addBtn.style.display = 'none';
         }
      });
   });
   cancelBtn.addEventListener('click', () => {
      textarea.value = '';
      value = '';
      form.style.display = 'none';
      btn.style.display = 'flex';
   });

   addBtn.addEventListener('click', () => {
      const newItem = document.createElement('div');
      newItem.classList.add('list_item');
      newItem.draggable = true;
      newItem.textContent = value;
      lists[0].append(newItem);

      textarea.value = '';
      value = '';
      form.style.display = 'none';
      btn.style.display = 'flex';
      dargNdrop();
   });
}
addTask();
function addBoard() {
   const boards = document.querySelector('.boards');
   const board = document.createElement('div');

   board.classList.add('boards_item');
   board.innerHTML = `<button class="dell-board"></button>
   <span contenteditable="true" class="title">Введите название</span>
          <div class="list">
`; 
   boards.append(board);
   changeTitle();
   dargNdrop();
   dellBoard();
}

button.addEventListener('click', addBoard);

function dellBoard() {
   const boards = document.querySelectorAll('.boards_item');
   for (let pane of boards) {
      // кнопка становится первым потомком плитки (pane)
      pane.firstChild.onclick = () => pane.remove();
   }
}

dellBoard();
function changeTitle() {
   const title = document.querySelectorAll('.title');

   title.forEach((title) => {
      title.addEventListener('click', (e) => (e.target.textContent = ''));
   });
}
changeTitle();

let draggedItem = null;

function dargNdrop() {
   const listItems = document.querySelectorAll('.list_item');
   const lists = document.querySelectorAll('.list');

   for (let i = 0; i < listItems.length; i++) {
      const item = listItems[i];
      item.addEventListener('dragstart', () => {
         draggedItem = item;
         setTimeout(() => {
            item.style.display = 'none';
         }, 0);
      });

      item.addEventListener('dragend', () => {
         setTimeout(() => {
            item.style.display = 'block';
            draggedItem = null;
         }, 0);
      });

      item.addEventListener('dblclick', () => {
         item.remove();
      });

      for (let j = 0; j < lists.length; j++) {
         const list = lists[j];

         list.addEventListener('dragover', (e) => e.preventDefault());

         list.addEventListener('dragenter', function (e) {
            e.preventDefault();
            this.style.backgroundColor = 'rgba(0,0,0, .3)';
         });
         list.addEventListener('dragleave', function (e) {
            this.style.backgroundColor = 'rgba(0,0,0, 0)';
            this.append(draggedItem);
         });
      }
   }
}
