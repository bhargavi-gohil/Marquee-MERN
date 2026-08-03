const draggableItems = Object.values(
  document.getElementsByClassName('draggables')
);

const container = Object.values(document.getElementsByClassName('containers'));

container.forEach((container) =>{
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    console.log(e);

    const draggedItem =document.querySelector('.dragging');
    container.appendChild(draggedItem);
  })
});

draggableItems.forEach((items) =>{
  items.addEventListener('dragstart', (e) =>{
    items.classList.add('dragging');
    console.log('dragStarts');
  });
        
  items.addEventListener('dragend', (e) => {
    items.classList.remove('dragging');
    console.log('draggend');
  });
});