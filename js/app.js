document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');

    const form = document.querySelector('#new-item-form');
    form.addEventListener('submit', handleFormSubmit)

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleFormSubmit = function(event){
    event.preventDefault();
    const newListItem = document.createElement('div');
    newListItem.classList.add('list-item');
    const newListItem1 = document.createElement ('h1');
    const newListItem2 = document.createElement ('h2');
    const newListItem3 = document.createElement ('h3');
    newListItem1.textContent = `${event.target.title.value}`;
    newListItem2.textContent = `${event.target.director.value}`;
    newListItem3.textContent = `${event.target.genre.value}`;
    const list = document.querySelector('#movie-list');
    newListItem.appendChild(newListItem1);
    newListItem.appendChild(newListItem2);
    newListItem.appendChild(newListItem3);
    list.append(newListItem);
    this.reset();
};

const handleDeleteAllClick = function(){
    const movieList = document.querySelector('#movie-list');
    movieList.innerHTML = '';
}