let form = document.getElementById('formTransaction');

form.addEventListener('submit', function(event){
  event.preventDefault();  
  let transactionFormData = new FormData(form);

  let tableTransaction = document.getElementById('tableTransaction');
  let newTransactionRow = tableTransaction.insertRow(-1);

  let newTypeCell =  newTransactionRow.insertCell(0);
  newTypeCell.textContent = transactionFormData.get('');

  newTypeCell = newTransactionRow.insertCell(1);
  newTypeCell.textContent = transactionFormData.get('Name');

  newTypeCell = newTransactionRow.insertCell(2);
  newTypeCell.textContent = transactionFormData.get('SurName');

  newTypeCell = newTransactionRow.insertCell(3);
  newTypeCell.textContent = transactionFormData.get('SecondSurName');


})


