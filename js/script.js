
var body = [...document.getElementsByClassName("body")]
var headerBlock = [...document.getElementsByClassName("headerBlock"), ...document.getElementsByClassName("headerBLock")]

var auth = document.getElementById('auth')
var prevModal = document.getElementById('prevModal')
var prevImg = document.getElementById('prevImg')
var prev = document.getElementById('prev')
var multiPrev = document.getElementById('multiPrev')
var prevDelBtn = document.getElementById('prevDelBtn')
var prevDeleteBlock = document.getElementById('prevDeleteBlock')
var prevDesDelBtn = document.getElementById('prevDesDelBtn')
var prevTimerDelete = document.getElementById('prevTimerDelete')
var prevPushComment = document.getElementById('prevPushComment')
var prevCommentForm = document.getElementById('prevCommentForm')
var prevCloseBtn = document.getElementById('prevCloseBtn')
var prevFire = document.getElementById('prevFire')

var multiPrevItems = document.getElementById('multiPrevItems')

var inputs = [...document.getElementsByTagName("input"), ...document.getElementsByTagName("textarea")]

var photoImgAva = document.getElementById('photoImgAva')
var photoImgAvaBlock = document.getElementById('photoImgAvaBlock')
var choosePhotoBtn = document.getElementById('choosePhotoBtn')

var authBtn = document.getElementById('authBtn')
var regBtn = document.getElementById('regBtn')
var addPostBtn = document.getElementById('addPost__submit')
var closeBtn = document.getElementById('menu__closeBtn')

var authBody = document.getElementById('auth__body')
var regBody = document.getElementById('reg__body')
var authorBody = document.getElementById('author__body')
var authErrorBody = document.getElementById('authError__body')
var addPostBody = document.getElementById('addPost__body')

var authorHeader = document.getElementById('author__header')
var authHeader = document.getElementById('auth__header')
var authErrorHeader = document.getElementById('authError__header')
var addPostHeader = document.getElementById('addPost__header')

var authorMenu = document.getElementById('author__menuBtn')
var authMenu = document.getElementById('auth__menuBtn')

var inputPassword = document.getElementById('inputPassword')
var passwordVisability = document.getElementById('passwordVisability')
var inputLogin = document.getElementById('inputLogin')
var chooseFile = document.getElementById('addPost__chooseFile')

var addPostArticle = document.getElementById('addPost__nameArticle')
var addPostArticleLabel = document.getElementById('addPost__nameArticleLabel')

var textArea = document.getElementById('addPost__textarea')

var imagesAddPost = document.getElementById("addPost__images")

var headers = document.getElementById("headers")
var bodys = document.getElementById("bodys")

var menuArrow = document.getElementById('menu__arrorCom')
var menuProfile = document.getElementById('menu__profile')

var prevNameFile = document.getElementById('prevNameFile')
var prevExtFile = document.getElementById('prevExtFile')
var prevProgrammFile = document.getElementById('prevProgrammFile')
var prevWeightFile = document.getElementById('prevWeightFile')

var rangeBalance = 0
var currentFiles = []
var previewPict = []

// Function Helper
function addRemoveFunc(addEl, removeEl, classF) {
  addEl.classList.add(classF)
  removeEl.classList.remove(classF)
}

addPostArticle.addEventListener('input', () => {
  if (addPostArticle.value.length > 0) {
    addPostArticleLabel.innerHTML = 'Ваш Заголовок:'
    addPostArticle.classList.add('noneLock')
  } else {
    addPostArticleLabel.innerHTML = 'Тема сообщения:'
    addPostArticle.classList.remove('noneLock')
  }
})

chooseFile.addEventListener('change', () => {
  demoFiles(rangeBalance)
})

window.addEventListener('resize', () => {
  var rangeBalanceCopy = rangeBalance

  // if portion number is change
  if (rangeBalanceCopy != rangeBalanceFunc()) {
    demoFiles(rangeBalance)
  }
})

function rangeBalanceFunc() {
  var wndWidth = window.innerWidth
  var rangeBalance2 = rangeBalance
  // get the portion number from windowWidth
  if (wndWidth > 700) {
    rangeBalance = 10
  } else if (wndWidth < 700 && wndWidth > 600) {
    rangeBalance = 7
  } else if (wndWidth < 600 && wndWidth > 410) {
    rangeBalance = 4
  } else if (wndWidth < 410 && wndWidth > 340) {
    rangeBalance = 2
  } else if (wndWidth < 340) {
    rangeBalance = 1
  }
  return rangeBalance
}

function demoFiles(rangeBalance) {
  // clear the count & div
  var fileCount = 0
  imagesAddPost.innerHTML = ""
  rangeBalance = rangeBalanceFunc()

  // push choosen elem in massive
  for (var i = 0; i < chooseFile.files.length; i++) {
    if (!currentFiles.includes(chooseFile.files[i])) {
      currentFiles.push(chooseFile.files[i])
    }
  }

  // display portion of elem from mass
  for (var i = 0; i < currentFiles.length; i++) {
    fileCount += 1
    if (fileCount < rangeBalance) {
      var file = document.createElement("a")
      file.setAttribute('href', currentFiles[i].name)
      file.classList.add("addPostFile")
      imagesAddPost.append(file)
    }
  }

  // display balance from portion elem
  if (fileCount > rangeBalance) {
    var balance = document.createElement("a")
    balance.innerText = `+${currentFiles.length - rangeBalance}`
    balance.setAttribute('id', 'addPost__balance')
    balance.classList.add("addPost__balance")
    balance.setAttribute('onclick', 'multiPrevOpen()')
    imagesAddPost.append(balance)
  }
}

textArea.addEventListener("input", () => {
  if (textArea.value != '') {
    textArea.classList.add("textAreaNoneBgc")
  } else {
    textArea.classList.remove("textAreaNoneBgc")
  }
})

function authClick() {
  addRemoveFunc(authBtn, regBtn, 'activeBtn')
  addRemoveFunc(regBody, authBody, 'd__none')
}

function regClick() {
  addRemoveFunc(regBtn, authBtn, 'activeBtn')
  addRemoveFunc(authBody, regBody, 'd__none')
}

function authOk() {
  if (inputLogin.value !== '' && inputPassword.value != '') {
    addRemoveFunc(authBody, authorBody, 'd__none')
    addRemoveFunc(authHeader, authorHeader, 'd__none')
    addRemoveFunc(authErrorHeader, authorHeader, 'd__none')
    addRemoveFunc(authMenu, authorMenu, 'd__none')
  } else {
    addRemoveFunc(authHeader, authErrorHeader, 'd__none')
  }
  if (!headers.classList.contains("headersMoreHeight")) {
    headers.classList.add("headersMoreHeight")
    bodys.classList.add("bodysLessHeight")
  }
}

function addPostSubmit() {
  var loginForm = confirm('Благодарим за отправку поста, не хотите ли зарегестрироваться?')
  if (loginForm) {
    addRemoveFunc(addPostBody, authBody, 'd__none')
    addRemoveFunc(addPostHeader, authHeader, 'd__none')
    addRemoveFunc(menuProfile, menuArrow, "d__none")
  }

  inputs.forEach(element => {
    if (element.value.length > 0 && element.type != 'checkbox') {
      element.value = ""
    }
  })
  textArea.classList.remove("textAreaNoneBgc")
  addPostArticleLabel.innerHTML = 'Тема сообщения:'
  addPostArticle.classList.remove('noneLock')
  currentFiles = []
  imagesAddPost.innerHTML = ""
}


function commentForm() {
  body.forEach(element => {
    if (!element.classList.contains('d__none')) {
      element.classList.add('d__none')
    }
  })
  headerBlock.forEach(element => {
    if (!element.classList.contains('d__none')) {
      element.classList.add('d__none')
    }
  })
  if (headers.classList.contains("headersMoreHeight")) {
    headers.classList.remove("headersMoreHeight")
    bodys.classList.remove("bodysLessHeight")
  }
  if (!authorMenu.classList.contains('d__none')) {
    authorMenu.classList.add('d__none')
    authMenu.classList.remove('d__none')
  }
  menuArrow.classList.add('d__none')
  menuProfile.classList.remove('d__none')
  addPostHeader.classList.remove('d__none')
  addPostBody.classList.remove('d__none')
}

function isCleanField() {
  var clean = true
  inputs.forEach(element => {
    if (element.value.length > 0 && element.type != 'checkbox') {
      clean = false
    }
  })
  return clean
}

function cleanField() {
  if (!isCleanField()) {
    var isCleanAll = confirm('Очистить поля?')
    if (isCleanAll) {
      inputs.forEach(element => {
        if (element.value.length > 0 && element.type != 'checkbox') {
          element.value = ""
        }
      })
      textArea.classList.remove("textAreaNoneBgc")
      addPostArticleLabel.innerHTML = 'Тема сообщения:'
      addPostArticle.classList.remove('noneLock')
      currentFiles = []
      imagesAddPost.innerHTML = ""
    }
  }
}

function authForm() {
  addRemoveFunc(addPostBody, authBody, 'd__none')
  addRemoveFunc(addPostHeader, authHeader, 'd__none')
  addRemoveFunc(menuProfile, menuArrow, 'd__none')
  if (!authBtn.classList.contains('activeBtn')) {
    addRemoveFunc(authBtn, regBtn, 'activeBtn')
  }
}

function closeForm() {
  if (!isCleanField()) {
    var confirmClose = confirm("Точно хотите выйти?")
    if (confirmClose) {
      auth.classList.add('d__none')
    }
  } else {
    auth.classList.add('d__none')
  }
}

function handleFileSelectPhoto(evt) {
  var files = evt.target.files[0]; // FileList object
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function (theFile) {
    return function (e) {
      // Render thumbnail.
      var img = document.createElement('img')
      img.classList.add('photoImgAva')
      img.setAttribute('title', theFile.name)
      img.setAttribute('id', 'photoImgAva')
      img.setAttribute('src', e.target.result)
      photoImgAvaBlock.innerHTML = ""
      photoImgAvaBlock.insertBefore(img, null)
    };
  })(files);
  // Read in the image file as a data URL.
  reader.readAsDataURL(files);
}

// Function preview photo
function handleFileSelect(evt) {
  var files = evt.target.files; // FileList object
  // Loop through the FileList and render image files as thumbnails.
  for (var i = 0, f; f = files[i]; i++) {
    // Only process image files.
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function (theFile) {
      return function (e) {
        // Render thumbnail.
        var img = document.createElement('img')
        img.classList.add('thumb')
        img.setAttribute('title', theFile.name)
        img.setAttribute('id', 'thumb')
        img.setAttribute('src', e.target.result)
        previewPict.push(img)
      };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
  }
}

function multiPrevOpen() {
  currentFiles.forEach(elem => {
    var li = document.createElement("li")
    li.classList.add('multiPrevItem')
    li.innerHTML = `<a class='addPostFile' href=${elem.name}></a><h3 class='multiPrevName'>${elem.name}</h3><button class='multiPrevCloseBtn'>X</button>`
    multiPrevItems.append(li)
  })
  if (document.getElementById('thumb')) {
    var img = document.getElementById('thumb')
    var throw123 = prevImg.removeChild(img)
  }
  prevImg.insertBefore(previewPict[0], null)
  prevNameFile.innerText = currentFiles[0].name
  prevExtFile.innerText = currentFiles[0].type
  prevWeightFile.innerText = Math.ceil(currentFiles[0].size / 1000) + ' Б.'
  prevModal.classList.remove('d__none')
  multiPrev.classList.remove('d__none')
  prev.classList.remove('d__none')
}

function authOpen() {
  prevModal.classList.add('d__none')
  multiPrev.classList.add('d__none')
  prev.classList.add('d__none')
  demoFiles(rangeBalance)
}

function previewInfoPict(e) {
  previewPict.forEach(elem => {
    if (elem.getAttribute('title') === e.target.getAttribute('href')) {
      prevNameFile.innerText = ''
      prevWeightFile.innerText = ''
      prevExtFile.innerText = ''
      if (document.getElementById('thumb')) {
        var img = document.getElementById('thumb')
        var throw123 = prevImg.removeChild(img)
      }
      prevImg.insertBefore(elem, null)
      currentFiles.forEach(file => {
        if (file.name === elem.getAttribute('title')) {
          prevNameFile.innerText = file.name
          prevExtFile.innerText = file.type
          prevWeightFile.innerText = Math.ceil(file.size / 1000) + ' КБ.'
        }
      })
    }
  })
}

imagesAddPost.addEventListener('click', e => {
  e.preventDefault()
  previewInfoPict(e)
  prevModal.classList.remove('d__none')
  prev.classList.remove('d__none')
})

multiPrevItems.addEventListener('click', e => {
  if (e.target.classList.contains('addPostFile')) {
    e.preventDefault()
    if (prev.classList.contains('d__none')) {
      prev.classList.remove('d__none')
    }
    previewPict.forEach(elem => {
      if (elem.getAttribute('title') === e.target.getAttribute('href')) {
        prevNameFile.innerText = ''
        prevWeightFile.innerText = ''
        prevExtFile.innerText = ''
        if (document.getElementById('thumb')) {
          var img = document.getElementById('thumb')
          var throw123 = prevImg.removeChild(img)
        }
        prevImg.insertBefore(elem, null)
        currentFiles.forEach(file => {
          if (file.name === elem.getAttribute('title')) {
            prevNameFile.innerText = file.name
            prevExtFile.innerText = file.type
            prevWeightFile.innerText = Math.ceil(file.size / 1000) + ' КБ.'
          }
        })
      }
    })
  } else if (e.target.classList.contains('multiPrevCloseBtn')) {
    var a = e.target.parentNode.querySelector('a')
    var newCurFile = currentFiles.filter(elem => {
      return (elem.name !== a.getAttribute('href'))
    })
    deleteFromFileColl(newCurFile)
    if (a.getAttribute('href') == document.getElementById('thumb').getAttribute('title')) {
      prev.classList.add('d__none')
    }
  }
})

chooseFile.addEventListener('change', handleFileSelect, false);

function deleteFromFileColl(newCurFile) {
  currentFiles = [...newCurFile]
  let dt = new DataTransfer()
  if (currentFiles.length > 0) {
    for (var i = 0; i < currentFiles.length; i++) {
      dt.items.add(currentFiles[i]);
    }
  }
  chooseFile.files = dt.files
  if (!multiPrev.classList.contains('d__none')) {
    multiPrevItems.innerHTML = ''
    currentFiles.forEach(elem => {
      var li = document.createElement("li")
      li.classList.add('multiPrevItem')
      li.innerHTML = `<a class='addPostFile' href=${elem.name}></a><h3 class='multiPrevName'>${elem.name}</h3><button class='multiPrevCloseBtn'>X</button>`
      multiPrevItems.append(li)
    })
  } else {
    authOpen()
  }
}

var sec = 30
function deleteDoc() {
  prevDeleteBlock.classList.remove('d__none')
  prevDelBtn.classList.add('d__none')
  prevTimerDelete.innerText = sec + ' сек'
  var secInterval = setInterval(() => {
    sec -= 1
    prevTimerDelete.innerText = sec + ' сек'
    if (sec === 0) {
      clearInterval(secInterval)
      sec = 30
    }
  }, 1000)
  var timerToClear = setTimeout(() => {
    var img = document.getElementById('thumb')
    var newCurFile = currentFiles.filter(elem => {
      return (elem.name !== img.getAttribute('title'))
    })
    deleteFromFileColl(newCurFile)
    prevDeleteBlock.classList.add('d__none')
    prevDelBtn.classList.remove('d__none')
    prev.classList.add('d__none')
  }, 30000)
  prevDesDelBtn.addEventListener('click', () => {
    clearTimeout(timerToClear)
    clearTimeout(secInterval)
    sec = 30
    prevDeleteBlock.classList.add('d__none')
    prevDelBtn.classList.remove('d__none')
  })
  prevCloseBtn.addEventListener('click', () => {
    clearTimeout(timerToClear)
    clearTimeout(secInterval)
    sec = 30
    prevDeleteBlock.classList.add('d__none')
    prevDelBtn.classList.remove('d__none')
  })
}

prevCommentForm.addEventListener('input', () => {
  if (prevCommentForm.value.length > 0) {
    prevPushComment.classList.remove('d__none')
  } else {
    prevPushComment.classList.add('d__none')
  }
})

function pushCommentImg() {
  prevPushComment.classList.add('d__none')
}

function parolVisab() {
  if (inputPassword.getAttribute('type') == 'password') {
    passwordVisability.classList.add('view');
    inputPassword.setAttribute('type', 'text');
  } else {
    passwordVisability.classList.remove('view');
    inputPassword.setAttribute('type', 'password');
  }
  return false;
}

choosePhotoBtn.addEventListener('change', handleFileSelectPhoto, false);
