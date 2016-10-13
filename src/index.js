const __UPDATE_HISTORY__ = '__UPDATE_HISTORY__';

export const createModule = (history) => {
  const background = ({dispatch}) => {
    return history.listen(location => {
      dispatch({
        type: __UPDATE_HISTORY__,
        location
      });
    });
  }
  
  const location = (state = history.location, action) => {
    if (action.type === __UPDATE_HISTORY__) return action.location;
    return state;
  }
  
  return {
    backgrounds: [
      background,
    ],
    reducers: {
      location,
    },
    constants: {
      history,
      push: history.push,
    }
  };
}