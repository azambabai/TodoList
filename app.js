const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const generaitor = todo =>{
const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span> ${todo}</span>
  <i class="for fa-trash-alt delete"></i>
  </li>
`;
list.innerHTML += html;
};
