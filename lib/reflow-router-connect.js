'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var __UPDATE_HISTORY__ = '__UPDATE_HISTORY__';

var createModule = exports.createModule = function createModule(history) {
  var background = function background(_ref) {
    var dispatch = _ref.dispatch;

    return history.listen(function (location) {
      dispatch({
        type: __UPDATE_HISTORY__,
        location: location
      });
    });
  };

  var location = function location() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : history.location;
    var action = arguments[1];

    if (action.type === __UPDATE_HISTORY__) return action.location;
    return state;
  };

  return {
    backgrounds: [background],
    reducers: {
      location: location
    },
    constants: {
      history: history,
      push: history.push
    }
  };
};
