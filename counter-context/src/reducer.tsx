export const initialState: { count: number; countLog: number[] } = {
  count: 0,
  countLog: [],
};

export const reducer = (
  state = initialState!,
  action: { type: string; payload?: { property: any } }
) => {
  switch (action.type) {
    case 'INCREASE': {
      const newLog = state.countLog.length + 1;
      return { count: state.count + 1, countLog: [...state.countLog, newLog] };
    }
    case 'DECREASE': {
      const newLog = state.countLog.slice(0, state.countLog.length - 1);

      return { count: state.count - 1, countLog: newLog };
    }
    default: {
      return state;
    }
  }
};
