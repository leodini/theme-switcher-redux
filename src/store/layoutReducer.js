const INITIAL_STATE = {
  theme: "theme-dark",
};

export const Types = {
  lightTheme: "LIGHT_THEME",
  darkTheme: "DARK_THEME",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.darkTheme:
      return { ...state, theme: "theme-dark" };
    case Types.lightTheme:
      return { ...state, theme: "theme-light" };
    default:
      return state;
  }
};

export const Creator = {
  lightTheme: () => ({ type: Types.lightTheme }),
  darkTheme: () => ({ type: Types.darkTheme }),
};
