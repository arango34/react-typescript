const reducer = (
  state: { count2: number; list: number[] },
  action: { type: string; payload?: {} }
) => {
  switch (action.type) {
    case 'INCREASE': {
      const length = state.list.length + 1;

      const newList = [...state.list, length];

      return { count2: length, list: newList };
    }
    case 'DECREASE': {
      const length = state.list.length - 1;

      const newList = state.list.slice(0, length);

      return { count2: length, list: newList };
    }
  }
};

export default reducer;
