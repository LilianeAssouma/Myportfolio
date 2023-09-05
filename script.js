document.addEventListener('DOMContentLoaded', function() {
const addTaskButton = document.getElementById('addTask');
const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const taskText = newTaskInput.value;
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
//edit
const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
            const newtext=prompt('edit task:',taskItem.textContent);
            if (newtext!==null) {
              taskItem.textContent =newtext;
            }
            
        });
//delete
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            taskItem.remove();
        });
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);

        newTaskInput.value = '';
    }


});

});
