function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    class Book {
      constructor(title, author, pages, read) {
          this.title = title;
          this.author = author;
          this.pages = pages;
          this.read = read;
      }
    }
  }
  
  const libraryTable = document.querySelector("#library-table");
  const library = [];
  function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    library.push(newBook);
  }
  
  function render() {
    for (i = libraryTable.rows.length - 1; i > 0; i--) {
        libraryTable.deleteRow(i);
    }
    for (i = 0; i < library.length; i++) {
        const newEntryRow = libraryTable.insertRow(1);
        const titleCell = newEntryRow.insertCell(0);
        const authorCell = newEntryRow.insertCell(1);
        const pagesCell = newEntryRow.insertCell(2);
        const readCell = newEntryRow.insertCell(3);
        const deleteCell = newEntryRow.insertCell(4);
        const changeStatus = newEntryRow.insertCell(4);
        titleCell.textContent = library[i].title;
        authorCell.textContent = library[i].author;
        pagesCell.textContent = library[i].pages;
        readCell.textContent = library[i].read;
        deleteCell.innerHTML = "<button onclick='deleteBook(event)' > Delete </button>"
        changeStatus.innerHTML = "<button onclick='changeStatus(event)' > Change Status </button>"
        newEntryRow.dataset.id = `${i}`
    }
  }
  
    function deleteBook(event){
        const td = event.target.parentNode;
        const tr = td.parentNode ;
        const arrayIndex = +tr.dataset.id
        libraryTable.deleteRow((arrayIndex + 1))
        library.splice(arrayIndex,1)
        render()
  
    }
    function changeStatus(event){
        const td = event.target.parentNode;
        const tr = td.parentNode ;
        const arrayIndex = +tr.dataset.id
  
        if (library[arrayIndex].read == false){
            library[arrayIndex].read = true
            render()
        }else{
            library[arrayIndex].read = false
            render()
        }
    }
  
  function getFromForm() {
    const titleForm = document.querySelector("#title").value;
    const authorForm = document.querySelector("#author").value;
    const pagesForm = +document.querySelector("#pages").value;
    const readForm = document.querySelector("#read").checked;
    return [titleForm, authorForm, pagesForm, readForm];
  
  }
  const bookForm = document.querySelector("#book-form");
  const submit = document.querySelector("#submit-btn");
  submit.addEventListener("click", (event) => {
    addBookToLibrary(getFromForm()[0], getFromForm()[1], getFromForm()[2], getFromForm()[3]);
    render();
    event.preventDefault();
    closeForm();
  })
  
  