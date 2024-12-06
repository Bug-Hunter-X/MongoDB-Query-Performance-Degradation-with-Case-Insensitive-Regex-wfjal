```javascript
const query = { name: /John/i };

// This query is case-insensitive.  However, if the index on the 'name' field is case-sensitive,
// then this query might not use the index efficiently, leading to slower performance.
// The regex also might cause issues if the 'name' field has a very large number of characters. 

collection.find(query).toArray((err, docs) => {
  if (err) {
    console.error(err);
  }
  console.log(docs);
});
```