const addProduct = () => {
    const inputElement = document.querySelector('input[type="text"]');
    const taskText = inputElement.value
  
    if (taskText !== '') {
      const ulElement = document.querySelector('ul');
      
      // Creare il checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      // Creare l'elemento del testo del task
      const taskLabel = document.createElement('label');
      taskLabel.textContent = taskText;
  
      // Creare l'elemento list item
      const liElement = document.createElement('li');
  
      // Aggiungere il checkbox e il testo del task all'elemento list item
      liElement.appendChild(checkbox);
      liElement.appendChild(taskLabel);
  
      // Aggiungere l'elemento list item alla lista
      ulElement.appendChild(liElement);
  
      // Pulire l'input
      inputElement.value = '';
    }
  };