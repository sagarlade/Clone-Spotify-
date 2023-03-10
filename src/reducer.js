

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: "BQDBb7cOzFAsx2L4DdAhLcC_rLGyPE1QRJKH2aYlBygmZLzKcZpEaGQfFlgajuJUvGycfyUyqbt8KhEHQ1tNcabboY1NVY0p7m_ngKbItOM3LU4xFU7qC2RtsoVF3rmK8W4hHZ12Q_yNk2uGmn11sOFXCWqX4nVArK--ezwYk0JQ0-G6m9TQfs6OSfCzR6dzKtukNQ8GOUCeV6s14Z3eeg",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
