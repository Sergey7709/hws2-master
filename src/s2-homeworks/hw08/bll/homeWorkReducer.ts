import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  switch (action.type) {
    case "sort": {
      // by name
      const sortedUsers = state.sort((a, b) => a.name.localeCompare(b.name));
      return action.payload === "up" ? sortedUsers : sortedUsers.reverse();
      // need to fix
    }
    case "check": {
      return state.filter((user) => user.age > action.payload).reverse();
      // need to fix
    }
    default:
      return state;
  }
};
