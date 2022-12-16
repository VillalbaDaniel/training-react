export const initialState = { text: "Hello World" };

export const stringReducer = (state, action) => {
  if (action.type === "SET") {
    return { ...state, text: action.payload };
  } else {
    throw new Error("No action available");
  }
};