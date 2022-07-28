const queryString = new URLSearchParams(window.location.search);
const nameText = queryString.get('input-text');

// const inputTextObjects = document.getElementsByName('input-text');
// const inputTextObject = inputTextObjects[0];
const inputTextObject = document.getElementsByName('input-text')[0];
inputTextObject.value = nameText;
// const inputHiddens = queryString.getAll('input-hidden');
// const inputHidden = inputHiddens[0];
const inputHidden = queryString.getAll('input-hidden')[0];
inputTextObject.focus();
inputTextObject.blur();

const membersGet = sessionStorage.getItem('members');
const membersLogical = membersGet || '[]';
const members = JSON.parse(membersLogical);

const membersSet = function() {
  const membersSet = JSON.stringify(members);
  sessionStorage.setItem('members', membersSet);
};

const membersCreate = function(member) {
  members.push(member);
  membersSet();
  return 'Created';
}

const membersRead = function() {
  const tagPre = document.getElementById('tag-pre');
  for (let index in members) {
    tagPre.innerHTML += members[index] + '\n';;
  }
  return members;
}

const membersDelete = function(index) {
  members.splice(index, 1);
  membersSet();
  return 'Deleted';
}

const membersUpdate = function(index, member) {
  members[index] = member;
  membersSet();
  return 'Updated';
}

const membersSubmit = function(event, form) {
  const inputTextObject = form['input-text'];
  try {
    const evalReturn = eval(inputTextObject.value);
    console.log(evalReturn);
  } catch(error) {
    console.error(error);
    alert(error);
    event.preventDefault();
  }
}

membersRead();

