# lexicon-topics

An array of arrays of topics, grouped by general categories.

```js
import topics from "lexicon-topics";

const randomGroup = topics[Math.floor(Math.random() * topics.length)];
const randomTopic = randomGroup[Math.floor(Math.random() * randomGroup.length)];
```
