const playListId = 'PLG49S3nxzAnmlC1ZsppuM7yleDuYCMHrv';
const myApiKey = 'AIzaSyCga-4roh6dko0Kgn0qb88wxhNB-frW_F4';
const playListItems = [];


makePlaylistItemsRequest(playListId, 50)
  .then(() => getAllResources(playListItems));

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

