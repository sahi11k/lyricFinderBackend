 const SEARCH_URL = `https://api.musixmatch.com/ws/1.1/track.search?q_track=$QUERY&page_size=10&page=1&s_track_rating=desc&apikey=$API_KEY`;

 const TOP_TEN_SONGS_URL =
  "https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=$API_KEY";

 const FETCH_LYRICS_URL = `https://api.musixmatch.com/ws/1.1/track.lyrics.get?commontrack_id=$TRACK_ID&apikey=$API_KEY`;

 const FETCH_TRACK_URL = `https://api.musixmatch.com/ws/1.1/track.get?commontrack_id=$TRACK_ID&apikey=$API_KEY`;

 const API_KEY = "46a908cae9e6fe663a1fe8ef339f08f6";


module.exports = {
    SEARCH_URL,
    TOP_TEN_SONGS_URL,
    FETCH_LYRICS_URL,
    API_KEY,
    FETCH_TRACK_URL
}