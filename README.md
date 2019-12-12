# WatchList Client

---

### WatchList Client handles the front-end for the WatchList application.  This WatchList application allows the users to sign up and create a watch list of TvShows.  Users can pick from the most popular shows on The Movied Database or search for a show.  


GitHub for Back-end: `https://github.com/stennity8/watchlist-api.git`

Netlify link: `https://watch-list.netlify.com/`

---

### Installation

- To run this app on a local server:

1. Fork this repo and then clone to your local environment using `https://github.com/stennity8/watchlist-client.git` <br> for SSH or `git@github.com:stennity8/watchlist-client.git` for HTTPS
2. `cd` into the newly created `watchlist-client` folder.
3. Run `npm install`
4. Create a file named: `api_keys.js` in the src folder.  Withing that file add your api key for the TMDB API:
  `export const TMDB_KEY = '<<YOUR API KEY>>'`
5. Make sure the that you have the WatchList API running on http://localhost:3001/
6. Run `npm start`

### Contributing

- If you are interested in contributing to this app please feel free to submit a pull request.

### Authors

© 2019 by stennity8

### License

This project is licensed under the MIT License:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE

# Note:
"This product uses the TMDb API but is not endorsed or certified by TMDb."