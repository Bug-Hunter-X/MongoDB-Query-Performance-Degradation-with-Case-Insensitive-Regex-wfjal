# MongoDB Query Performance Degradation with Case-Insensitive Regex

This repository demonstrates a potential performance issue in MongoDB queries involving case-insensitive regular expressions and the impact on index usage.  Inefficient query patterns can significantly impact application speed, especially with large datasets.

The `bug.js` file contains the problematic code, while `bugSolution.js` offers improved alternatives.

## Bug
The original query uses a case-insensitive regular expression to search for names containing "John".  If the 'name' field has a case-sensitive index, the query might not efficiently utilize the index, resulting in a full collection scan. The regex itself can also cause performance problems with very large strings.