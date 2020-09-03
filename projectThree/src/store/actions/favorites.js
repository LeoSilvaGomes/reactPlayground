export const addFavoriteRequest = (repository) => ({
  type: "ADD_FAVORITE_REQUEST",
  payload: { repository },
});

// REQUEST -> SAGA -> CHAMADA A API -> SUCESS

export const addFavoriteSucess = (data) => ({
  type: "ADD_FAVORITE_SUCESS",
  payload: { data },
});
