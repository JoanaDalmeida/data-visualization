var sampleJson = '{' + '\n' + 
'   "expenses" : [' + '\n'+
'      {'+ '\n' +
'         "type":"type1",' + '\n' + 
'         "value":2,'+ '\n' + 
'         "date":"12/04/2013"' + '\n' +
'      },'+ '\n' + 
'      {'+ '\n' +
'         "type":"type2",' + '\n' + 
'         "value":6,'+ '\n' + 
'         "date":"12/04/2014"' + '\n' +
'      },'+ '\n' + 
'      {'+ '\n' +
'         "type":"type3",' + '\n' + 
'         "value":10,'+ '\n' + 
'         "date":"12/04/2015"' + '\n' +
'      }'+ '\n' + 
'   ]' + '\n' + 
'}';

function addSampleJson() {
	document.getElementById('json-data').value = sampleJson;
}

function highlightExpenses(event){
  	//remove the class from all tr 
	$('tbody tr').removeClass('highlight');
	//highlight expenses matching the selected type
	$('tbody tr[data-type="'+ event.data.type +'"]').addClass('highlight')
}

