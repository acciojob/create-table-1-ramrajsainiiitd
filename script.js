function insert_Row() {
	let newTable = document.getElementById('sampleTable');
  let newRow = newTable.insertRow(0);
  let newCell1 = newRow.insertCell(0);
  let newCell2 = newRow.insertCell(1);
  let newText1 = document.createTextNode('New Cell1');
  let newText2 = document.createTextNode('New Cell2');

  newCell1.appendChild(newText1);
  newCell2.appendChild(newText2);
}

