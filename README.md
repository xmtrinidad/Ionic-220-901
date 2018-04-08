# 220-901 Exam Objectives

Converting the [CompTIA 220-901 Exam Objectives PDF](https://certification.comptia.org/docs/default-source/exam-objectives/comptia-a-220-901-exam-objectives.pdf) into a responsive web format using Ionic.

## Update 4/8

Published on Play Store: <https://play.google.com/store/apps/details?id=com.xmtrinidad.a220_901>

---

This project is a replica to a similar Ionic app I did for the N10-007 exam objectives, but with a different data structure and with helper functions I created to automate some tasks.  I'll highlight these changes below for future reference.


## Helper Functions

In previous versions of this application, I copy and pasted information from the pdf to create objects.  My intention for this one was to save time by utilizing the YouTube api to make the objects I use to display resources.  Below are the helper functions I made that utilize the API data.

```javascript
/**
API Key removed for security reasons
**/
const playListId = 'PLG49S3nxzAnmlC1ZsppuM7yleDuYCMHrv';
const myApiKey = 'MY_KEY';
const playListItems = [];

makePlaylistItemsRequest(playListId, 50)
  .then(() => getAllResources(playListItems));

/**
 * Fetch playlist data from YouTube api
 * On complete, get all resources
 */
function makePlaylistItemsRequest(id, max, pageToken = "") {
  const fetchURL = `https://content.googleapis.com/youtube/v3/playlistItems?playlistId=${id}&maxResults=${max}&part=snippet,contentDetails&pageToken=${pageToken}&key=${myApiKey}`;

  return fetch(fetchURL)
    .then((response) => {
      return response.json();
    })
    .then( (myJson) => {
      console.log(myJson);
      playListItems.push(...myJson.items);
      if (myJson.nextPageToken === undefined) {
        return;
      } else {
        return makePlaylistItemsRequest(playListId, 50, myJson.nextPageToken);
      }
    });

}

function getResourcesByObjectiveNumber(items, id) {
  const filtered = items.filter(item => getStrId(item.snippet.title) === id);
  const resources = [];
  filtered.forEach(video => {

    const title = video.snippet.title;
    const description = video.snippet.description.split("\n- - - - -\n")[1];
    const img = video.snippet.thumbnails.high.url;
    const vidId = video.contentDetails.videoId

    const resource = {
      objectiveNumber: Number(id),
      title: title.substr(0, title.indexOf('-') - 1),
      description: description,
      img: img,
      link: `https://www.youtube.com/watch?v=${vidId}`
    };
    resources.push(resource);
  });
  console.log(resources);
}

/**
 * Construct resource object from playlist data
 * @param items
 */
function getAllResources(items) {
  const resources = [];
  items.forEach(video => {

    const title = video.snippet.title;
    const description = video.snippet.description.split("\n- - - - -\n")[1];
    const img = video.snippet.thumbnails.high.url;
    const vidId = video.contentDetails.videoId

    const resource = {
      objectiveNumber: getStrId(video.snippet.title),
      title: title.substr(0, title.indexOf('-') - 1),
      description: description,
      img: img,
      link: `https://www.youtube.com/watch?v=${vidId}`
    };
    resources.push(resource);
  });
  console.log(resources);
}
/**
 * Extract the id from video title, which should be in format
 * Video Title - CompTIA A+ 220-901 - id
 * @param {String} strTitleWithId - the video title string
 */
function getStrId(strTitleWithId) {
  return strTitleWithId.substr(strTitleWithId.lastIndexOf('-') + 2);
}
```

The function below takes a copy of the bullets from the pdf and transforms it into a *bullet* object in the form:
```javascript
bullet = {
   title: 'My Title',
   subBullets: []
 };
```

```javascript
/**
 * Convert bulleted list into object to display for web
 * @param {String} str - the list
 */
function makeBullets(str) {
  const splitStr = str.split('\n');
  const bullets = [];
  let bullet = {
    title: splitStr[0],
    subBullets: []
  };

  for (let i = 1; i < splitStr.length; i++) {
    if (splitStr[i][0] === '-') {
      bullet.subBullets.push(splitStr[i]);
      // Check if last index
      if (i === splitStr.length - 1) {
        bullets.push(bullet);
      }
      continue;
    }
    bullets.push(bullet);
    bullet = {
      title: splitStr[i],
      subBullets: []
    };
    // Check if last index
    if (i === splitStr.length - 1) {
      bullets.push(bullet);
    }
  }
  console.log(bullets);
}
```
