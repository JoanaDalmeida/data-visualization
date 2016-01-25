var sampleJson = '{' + '\n' + 
'   "expenses" : [' + '\n'+
'      {'+ '\n' +
'         "type":"type1",' + '\n' + 
'         "value":2,'+ '\n' + 
'         "date":"01/04/2013"' + '\n' +
'      },'+ '\n' + 
'      {'+ '\n' +
'         "type":"type2",' + '\n' + 
'         "value":6,'+ '\n' + 
'         "date":"02/04/2014"' + '\n' +
'      },'+ '\n' + 
'      {'+ '\n' +
'         "type":"type1",' + '\n' + 
'         "value":6,'+ '\n' + 
'         "date":"03/04/2014"' + '\n' +
'      },'+ '\n' + 
'      {'+ '\n' +
'         "type":"type3",' + '\n' + 
'         "value":3,'+ '\n' + 
'         "date":"04/04/2014"' + '\n' +
'      },'+ '\n' + 
'      {'+ '\n' +
'         "type":"type4",' + '\n' + 
'         "value":10,'+ '\n' + 
'         "date":"05/04/2015"' + '\n' +
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
	$('tbody tr[data-type="'+ event.data.key +'"]').addClass('highlight')
}

