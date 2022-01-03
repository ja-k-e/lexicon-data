# Lexicon Data

constraints: An array of constraints for submissions.
topics: An array of arrays of topics, grouped by general categories.

```js
import data from "lexicon-data";

const { topics, constraints } = data;

const group = topics[Math.floor(Math.random() * topics.length)];
const topic = group[Math.floor(Math.random() * group.length)];
```
