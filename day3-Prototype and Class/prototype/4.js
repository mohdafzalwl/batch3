function getFromStudentId(studentId) {
	return studentRecords.find(function match(record) {
		return record.id === studentId;
	});
}

function printRecords(recordIds) {
	// TODO
	const records = recordIds.map(getFromStudentId);
	//sort - compare function as a callback
	records.sort(function sortByNameAsc(record1, record2) {
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	});

	records.forEach(function printEachRecord(records) {
		console.log(`${records.name} ${records.id} : ${records.paid}`);
	});
}

// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: 'Frank', paid: true },
	{ id: 410, name: 'Suzy', paid: true },
	{ id: 709, name: 'Brian', paid: false },
	{ id: 105, name: 'Henry', paid: false },
	{ id: 502, name: 'Mary', paid: true },
	{ id: 664, name: 'Bob', paid: false },
	{ id: 250, name: 'Peter', paid: true },
	{ id: 375, name: 'Sarah', paid: true },
	{ id: 867, name: 'Greg', paid: false }
];

printRecords(currentEnrollment);
console.log('----');

//OUTPUT as below
/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	*/
