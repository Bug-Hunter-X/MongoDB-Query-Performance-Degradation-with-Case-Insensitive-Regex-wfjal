```javascript
// Solution 1: Create a case-insensitive index
db.collection.createIndex( { name: "text" } );

// Solution 2: Use $regex with case-insensitive option and ensure a proper index is present
const query = { name: { $regex: "John", $options: "i" } };

//Ensure an index exists on the name field for optimal performance.  
//Example of index creation:
db.collection.createIndex( { name: 1 } );

collection.find(query).toArray((err, docs) => {
  if (err) {
    console.error(err);
  }
  console.log(docs);
});

//Solution 3: If you can, avoid regular expressions if possible. Use equality matches instead.
const query = { name: "John" };
collection.find(query).toArray((err, docs) => {
  if (err) {
    console.error(err);
  }
  console.log(docs);
});
```