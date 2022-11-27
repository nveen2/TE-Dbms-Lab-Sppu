db = connect("mongodb://localhost/3333ass9");
db.students.insertMany([
	{
		rollNo: 3310,
		name: {
			first: "Abhishek"
		},
		dob: "2001-01-21",
		branch: "TE-IT",
		marks: {
			ltc: 70
		},
		cgpa: 7,
		city: "Mumbai"
	},
	{
		rollNo: 3312,
		name: {
			first: "Amathya"
		},
		dob: "2001-02-02",
		branch: "TE-IT",
		marks: {
			ltc: 80
		},
		cgpa: 7.5,
		city: "Mumbai"
	},
	{
		rollNo: 3333,
		name: {
			first: "Manish",
			last: "Bishnoi"
		},
		dob: "2001-08-10",
		branch: "TE-COMP-A",
		marks: {
			dbms: 75
		},
		cgpa: 8.5,
		city: "Mumbai"
	},
	{
		rollNo: 3354,
		name: {
			first: "Nitesh",
			middle: "Kumar",
			last: "Jha"
		},
		dob: "2001-05-21",
		branch: "TE-COMP-A",
		marks: {
			dbms: 80
		},
		cgpa: 9,
		city: "Pune"
	},
	{
		rollNo: 3356,
		name: {
			first: "Naveen",
			last: "Jhajhriya"
		},
		dob: "2000-07-15",
		branch: "TE-COMP-A",
		marks: {
			dbms: 70
		},
		cgpa: 8,
		city: "Pune"
	}
]);

print("\n(Q2) All students:");
printjson(
	db.students.find()
);
print("\n(Q3) Updating marks of student 'Abhishek':");
printjson(
	db.students.updateOne(
		{
			name: {
				first: "Abhishek"
			}
		},
		{
			$set: {
				marks: {
					ltc: 85
				}
			}
		}
	)
);
printjson(
	db.students.find(
		{
			name: {
				first: "Abhishek"
			}
		}
	)
);

print("\n(Q4) Students with CGPA 9 or branch Computer:")
printjson(
	db.students.find(
		{
			$or: [
				{
					cgpa: 9
				},
				{
					branch: "TE-COMP-A"
				}
			]
		}
	)
);

print("\n(Q5) Students with branch not as IT:");
printjson(
	db.students.find(
		{
			branch: {
				$not: /TE-IT/
			}
		}
	)
);

print("\n(Q6) Students with CGPA 7 and native city Mumbai:");
printjson(
	db.students.find(
		{
			$and: [
				{
					cgpa: 7
				},
				{
					city: "Mumbai"
				}
			]
		}
	)
);

print("\n(Q7) Students with CGPA not 9 or branch Computer:");
printjson(
	db.students.find(
		{
			$or: [
				{
					cgpa: {
						$ne: 9
					}
				},
				{
					branch: "TE-COMP-A"
				}
			]
		}
	)
);

print("\n(Q8) Adding new student document using save():");
printjson(
	db.students.insertOne(
		{
			rollNo: 3360,
			name: {
				first: "Mohmd",
				last: "Ashraf"
			},
			dob: "2001-01-18",
			branch: "TE-COMP-A",
			marks: {
				dbms: 75
			},
			cgpa: 8.6,
			city: "Pune"
		}
	)
);

print("\n(Q9) Removing document of 'Amathya':");
printjson(
	db.students.deleteOne(
		{
			name: {
				first: "Amathya"
			}
		}
	)
);

print("\n(Q10) Max CGPA student from Computer branch:");
printjson(
	db.students.find(
		{
			branch: "TE-COMP-A"
		}
	).sort({
		cgpa: -1
	}).limit(1)
);

db.dropDatabase();
