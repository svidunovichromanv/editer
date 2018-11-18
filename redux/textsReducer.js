import { TEXT_CREATE, TEXT_CONTENT_EDIT } from './textsAC';

const initState={
  texts: {},
}

// в редьюсере state - это не весь state Redux, а только тот раздел state,
// за который отвечает данный редьюсер

function textsReducer(state=initState,action) {
  switch (action.type) {

    case TEXT_CREATE: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        texts:{...state.texts,
          [action.textid]:[action.text]
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }
    
    case TEXT_CONTENT_EDIT: {
      console.log('action:',action);
      console.log('state до обработки редьюсером:',state);
      let newState={...state,
        texts:{...state.texts,
          [action.textid]:[action.text]
        }
      };
      console.log('state после обработки редьюсером:',newState);
      return newState;
    }

    default:
      return state;
  }
}

export default textsReducer;
