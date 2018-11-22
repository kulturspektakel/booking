// @flow

import type {TableRow} from './Core.js';

export default {
  slackClientID: process.env.REACT_APP_SLACK_CLIENT_ID,
  slackClientSecret: process.env.REACT_APP_SLACK_CLIENT_SECRET,
  googleSheet: process.env.REACT_APP_GOOGLE_SHEET,
  googleAPIKey: process.env.REACT_APP_GOOGLE_API_KEY,
  slackChannel: 'C3U99AB54',
  slackOldestMessage: 1535660000,
  slackBotID: 'B3TGP9TKM',
  genres: {
    'Pop / Indie-Rock': '/rock.svg',
    'Hardrock / Metal / Punk': '/metal.svg',
    'Folk / Singer/ Songwriter': '/acoustic.svg',
    'Elektro / Hip Hop': '/hip_hop.svg',
    DJ: '/indie.svg',
    'Reggae / Ska': 'hippie.svg',
    'andere Musikrichtung': 'vocal.svg',
  },
  ratings: {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
  },
  stars: ['', '★☆☆☆', '★★☆☆', '★★★☆', '★★★★'],
  colMapping: ([
    'timestamp',
    'email',
    'bandname',
    'musikrichtung',
    'genre',
    'wohnort',
    'facebook',
    'demo',
    'website',
    'beschreibung',
    'name',
    'handy',
    'woher',
    'aufmerksam',
    'anreise',
    'entfernung',
    'likes',
  ]: Array<$Keys<TableRow>>),
};
