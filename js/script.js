
var body = [...document.getElementsByClassName("body")]
var headerBlock = [...document.getElementsByClassName("headerBlock"), ...document.getElementsByClassName("headerBLock")]

var auth = document.getElementById('auth')

var inputs = [...document.getElementsByTagName("input"), ...document.getElementsByTagName("textarea")]

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

var rangeBalance = 0
var currentFiles = []
var previewPict = []

addPostArticle.addEventListener('input', () => {
  if (addPostArticle.value.length > 0) {
    addPostArticleLabel.innerHTML = 'Ваш Заголовок:'
  } else {
    addPostArticleLabel.innerHTML = 'Тема сообщения:'
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

// Function Helper
function addRemoveFunc(addEl, removeEl, classF) {
  addEl.classList.add(classF)
  removeEl.classList.remove(classF)
}

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
  addRemoveFunc(addPostBody, authBody, 'd__none')
  addRemoveFunc(addPostHeader, authHeader, 'd__none')
  addRemoveFunc(menuProfile, menuArrow, "d__none")
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
  }
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
              img.setAttribute('src', e.target.result)
              previewPict.push(img)
              console.log(previewPict)
          };
      })(f);
      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
  }
}
/*
imagesAddPost.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(e.target)
  previewPict.forEach(elem => {
    if (elem.getAttribute('title') === e.target.getAttribute('href')) {
      imagesAddPost.insertBefore(elem, null)
    }
  })
})

chooseFile.addEventListener('change', handleFileSelect, false);
*/