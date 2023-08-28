const initState = {
  themeId: 1,
};

export type ThemeReducerType = {
  themeId: number;
};

export type SetStateActionType = {
  type: "SET_THEME_ID";
  id: number;
};

export const themeReducer = (
  state = initState,
  action: SetStateActionType
): ThemeReducerType => {
  // fix any
  switch (action.type) {
    // дописать
    case "SET_THEME_ID": {
      return {
        ...state,
        themeId: action.id,
      };
    }

    default:
      return state;
  }
};

export const changeThemeId = (id: number): SetStateActionType => ({
  type: "SET_THEME_ID",
  id,
}); // fix any
