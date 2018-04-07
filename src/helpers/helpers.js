/*
  These are helper functions I created to help me automate some things
 */

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
    if (i === splitStr.length - 1) {
      bullets.push(bullet);
    }
  }

  console.log(bullets);
}

/**
 * Convert acronym list to JSON
 */
function convertAcronymList(str) {
  const splitStr = str.split('\n');
  const acronyms = [];
  for (let i = 0; i < splitStr.length; i += 2) {
    const acronym = {
      acronym: splitStr[i].trim(),
      full: splitStr[i+1]
    };
    acronyms.push(acronym);
  }

  console.log(JSON.stringify(acronyms));
}
