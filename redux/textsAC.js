const TEXT_CREATE='TEXT_CREATE';
const TEXT_CONTENT_EDIT='TEXT_CONTENT_EDIT';

const text_create=function(textid, text) {
  return {
    type: TEXT_CREATE,
    textid:textid,
    text:text
  };
}

const textContent_edit=function(textid,text) {
  return {
    type: TEXT_CONTENT_EDIT,
    textid:textid,
    text:text,
  };
}

export {
    text_create,TEXT_CREATE,
    textContent_edit,TEXT_CONTENT_EDIT,
}
