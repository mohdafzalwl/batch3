// use DATABASE_NAME

// show dbs

// db.test.insert({"name":"testdata"})

//drop db

// db.dropDatabase()

//create collection

// db.createCollection("mycollection")

//drop collection

// db.COLLECTION_NAME.drop()

//find method

// db.COLLECTION_NAME.find()

//delete
// db.COLLECTION_NAME.remove(DELLETION_CRITTERIA)

// db.mycol.remove({'title':'test'})

//sql databases
//data uses schema
//relational
//data is distributed across multiple tables
//H Scalling is difficult
//limitations to lots of read and write

//
db.posts.insert({
	title: 'Post One',
	body: 'Body of Post',
	category: 'News',
	likes: 4,
	tags: [ 'news', 'events' ],
	user: {
		name: 'Tom',
		status: 'author'
	},
	date: Date()
});

//insert many
db.posts.insertMany([
	{
		title: 'Post Two',
		body: 'Body of Post 2',
		category: 'Technology',
		date: Date()
	},
	{
		title: 'Post Three',
		body: 'Body of Post 3',
		category: 'News',
		date: Date()
	},
	{
		title: 'Post Four',
		body: 'Body of Post 4',
		category: 'Entertainment',
		date: Date()
	}
]);

//find
db.posts.find({ category: 'News' });

//sort
db.posts.find().sort({ title: 1 });

//count
db.posts.find({ category: 'News' }).count();

//limit
db.posts.find().limit(2);

//update
db.posts.update(
	{ title: 'Post Two' },
	{
		title: 'Post Two',
		body: 'New Body of Post 2',
		category: 'Technology',
		name: 'test update'
	},
	{ upsert: true }
);

db.posts.update(
	{ title: 'Post Two' },
	{
		$set: {
			body: 'New Body of Post 2',
			category: 'Technology'
		}
	}
);

db.posts.update({ title: 'Post One' }, { $inc: { likes: 2 } });

db.posts.remove({ title: 'Post Four' });
