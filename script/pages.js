// PAGES
let pageOne = true;
let pageTwo = false;
let pageThree = false;
let pageFour = false;
let pageFive = false;
let pageSix = false;
let pageSeven = false;
let pageEight = false;
let pageNine = false;
let pageTen = false;
let pageEleven = false;
let pageTwelve = false;
let pageThirteen = false;
let pageFourteen = false;
let pageFifteen = false;
let pageSixteen = false;
let pageSeventeen = false;
let pageEighteen = false;
let pageNineteen = false;
let pageTwenty = false;
let pageTwentyOne = false;
let pageTwentyTwo = false;
let pageTwentyThree = false;
let pageTwentyFour = false;
let pageTwentyFive = false;
let pageTwentySix = false;
let pageTwentySeven = false;
let pageTwentyEight = false;
let pageTwentyNine = false;

let pageNumber = document.querySelector('#pageNumber');

// _______________________________________________________PREV BUTTON________________________________________________________
btnPrev.addEventListener('click', () => {

  if(pageOne){
    alert("No previous page");
    console.log("Your alredy on page one")
    return
  }
  else if(pageTwo){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=1&_limit=7'
    pageTwo = false;
    pageOne = true;
    todos = []
    pageNumber.innerText = 'Page 1'
    console.log("page one")
    return getTodo()
  }
  else if(pageThree){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=2&_limit=7'
    pageThree = false;
    pageTwo = true;
    todos = []
    pageNumber.innerText = 'Page 2'
    console.log("page two")
    return getTodo()
  }
  else if(pageFour){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=3&_limit=7'
    pageFour = false;
    pageThree = true;
    todos = []
    pageNumber.innerText = 'Page 3'
    console.log("page three")
    return getTodo()
  }
  else if(pageFive){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=4&_limit=7'
    pageFive = false;
    pageFour = true;
    todos = []
    pageNumber.innerText = 'Page 4'
    console.log("page four")
    return getTodo()
}
  else if(pageSix){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=5&_limit=7'
    pageSix = false;
    pageFive = true;
    todos = []
    pageNumber.innerText = 'Page 5'
    console.log("page five")
    return getTodo()
    }
  else if(pageSeven){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=6&_limit=7'
    pageSeven = false;
    pageSix = true;
    todos = []
    pageNumber.innerText = 'Page 6'
    console.log("page six")
    return getTodo()
    }
  else if(pageEight){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=7&_limit=7'
    pageEight = false;
    pageSeven = true;
    todos = []
    pageNumber.innerText = 'Page 7'
    console.log("page seven")
    return getTodo()
    }
  else if(pageNine){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=8&_limit=7'
    pageNine = false;
    pageEight = true;
    todos = []
    pageNumber.innerText = 'Page 8'
    console.log("page eight")
    return getTodo()
    }
  else if(pageTen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=9&_limit=7'
    pageTen = false;
    pageNine = true;
    todos = []
    pageNumber.innerText = 'Page 9'
    console.log("page nine")
    return getTodo()
    }
  else if(pageEleven){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=10&_limit=7'
    pageEleven = false;
    pageTen = true;
    todos = []
    pageNumber.innerText = 'Page 10'
    console.log("page ten")
    return getTodo()
    }
    else if(pageTwelve){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=11&_limit=7'
      pageTwelve = false;
      pageEleven = true;
      todos = []
      pageNumber.innerText = 'Page 11'
      console.log("page 11")
      return getTodo()
    }
    else if(pageThirteen){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=12&_limit=7'
      pageThirteen = false;
      pageTwelve = true;
      todos = []
      pageNumber.innerText = 'Page 12'
      console.log("page 12")
      return getTodo()
      }
    else if(pageFourteen){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=13&_limit=7'
      pageFourteen = false;
      pageThirteen = true;
      todos = []
      pageNumber.innerText = 'Page 13'
      console.log("page 13")
      return getTodo()
    }
    else if(pageFifteen){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=14&_limit=7'
      pageFifteen = false;
      pageFourteen = true;
      todos = []
      pageNumber.innerText = 'Page 14'
      console.log("page 14")
      return getTodo()
    }
    else if(pageSixteen){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=15&_limit=7'
      pageSixteen = false;
      pageFifteen = true;
      todos = []
      pageNumber.innerText = 'Page 15'
      console.log("page 15")
      return getTodo()
    }
    else if(pageSeventeen){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=16&_limit=7'
      pageSeventeen = false;
      pageSixteen = true;
      todos = []
      pageNumber.innerText = 'Page 16'
      console.log("page 16")
      return getTodo()
  }
    else if(pageEighteen){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=17&_limit=7'
      pageEighteen = false;
      pageSeventeen = true;
      todos = []
      pageNumber.innerText = 'Page 17'
      console.log("page 17")
      return getTodo()
      }
    else if(pageNineteen){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=18&_limit=7'
      pageNineteen = false;
      pageEighteen = true;
      todos = []
      pageNumber.innerText = 'Page 18'
      console.log("page 18")
      return getTodo()
      }
    else if(pageTwenty){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=19&_limit=7'
      pageTwenty = false;
      pageNineteen = true;
      todos = []
      pageNumber.innerText = 'Page 19'
      console.log("page 19")
      return getTodo()
      }
    else if(pageTwentyOne){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=20&_limit=7'
      pageTwentyOne = false;
      pageTwenty = true;
      todos = []
      pageNumber.innerText = 'Page 20'
      console.log("page 20")
      return getTodo()
      }
    else if(pageTwentyTwo){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=21&_limit=7'
      pageTwentyTwo = false;
      pageTwentyOne= true;
      todos = []
      pageNumber.innerText = 'Page 21'
      console.log("page 21")
      return getTodo()
      }
    else if(pageTwentyThree){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=22&_limit=7'
      pageTwentyThree = false;
      pageTwentyTwo = true;
      todos = []
      pageNumber.innerText = 'Page 22'
      console.log("page 22")
      return getTodo()
      }
    else if(pageTwentyFour){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=23&_limit=7'
      pageTwentyFour = false;
      pageTwentyThree= true;
      todos = []
      pageNumber.innerText = 'Page 23'
      console.log("page 23")
      return getTodo()
      }
    else if(pageTwentyFive){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=24&_limit=7'
      pageTwentyFive = false;
      pageTwentyFour= true;
      todos = []
      pageNumber.innerText = 'Page 24'
      console.log("page 24")
      return getTodo()
      }
    else if(pageTwentySix){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=25&_limit=7'
      pageTwentySix = false;
      pageTwentyFive= true;
      todos = []
      pageNumber.innerText = 'Page 25'
      console.log("page 25")
      return getTodo()
      }
    else if(pageTwentySeven){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=26&_limit=7'
      pageTwentySeven = false;
      pageTwentySix= true;
      todos = []
      pageNumber.innerText = 'Page 26'
      console.log("page 26")
      return getTodo()
      }
    else if(pageTwentyEight){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=27&_limit=7'
      pageTwentyEight = false;
      pageTwentySeven= true;
      todos = []
      pageNumber.innerText = 'Page 27'
      console.log("page 25")
      return getTodo()
      }
    else if(pageTwentyNine){
      PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=28&_limit=7'
      pageTwentyNine = false;
      pageTwentyEight= true;
      todos = []
      pageNumber.innerText = 'Page 28'
      console.log("page 26")
      return getTodo()
      }
})

// _______________________________________________________NEXT BUTTON________________________________________________________
btnNext.addEventListener('click', () => {

  if(pageOne){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=2&_limit=7'
    pageOne = false;
    pageTwo = true;
    todos = []
    pageNumber.innerText = 'Page 2'
    console.log("page 2")
    return getTodo()
  }
  else if(pageTwo){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=3&_limit=7'
    pageTwo = false;
    pageThree = true;
    todos = []
    pageNumber.innerText = 'Page 3'
    console.log("page 3")
    return getTodo()
  }
  else if(pageThree){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=4&_limit=7'
    pageThree = false;
    pageFour = true;
    pageNumber.innerText = 'Page 4'
    console.log("page 4")
    todos = []
    return getTodo()
  }
  else if(pageFour){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=5&_limit=7'
    pageFour = false;
    pageFive = true;
    todos = []
    pageNumber.innerText = 'Page 5'
    console.log("page 5")
    return getTodo()
  }
  else if(pageFive){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=6&_limit=7'
    pageFive = false;
    pageSix = true;
    todos = []
    pageNumber.innerText = 'Page 6'
    console.log("page 6")
    return getTodo()
  }
  else if(pageSix){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=7&_limit=7'
    pageSix = false;
    pageSeven = true;
    todos = []
    pageNumber.innerText = 'Page 7'
    console.log("page 7")
    return getTodo()
  }
  else if(pageSeven){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=8&_limit=7'
    pageSeven = false;
    pageEight = true;
    todos = []
    pageNumber.innerText = 'Page 8'
    console.log("page 8")
    return getTodo()
  }
  else if(pageEight){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=9&_limit=7'
    pageEight = false;
    pageNine = true;
    todos = []
    pageNumber.innerText = 'Page 9'
    console.log("page 9")
    return getTodo()
  }
  else if(pageNine){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=10&_limit=7'
    pageNine = false;
    pageTen = true;
    todos = []
    pageNumber.innerText = 'Page 10'
    console.log("page 10")
    return getTodo()
  }
  else if(pageTen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=11&_limit=7'
    pageTen = false;
    pageEleven = true;
    todos = []
    pageNumber.innerText = 'Page 11'
    console.log("page 11")
    return getTodo()
  }
  else if(pageEleven){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=12&_limit=7'
    pageEleven = false;
    pageTwelve = true;
    todos = []
    pageNumber.innerText = 'Page 12'
    console.log("page 12")
    return getTodo()
    }
  else if(pageTwelve){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=13&_limit=7'
    pageTwelve = false;
    pageThirteen = true;
    todos = []
    pageNumber.innerText = 'Page 13'
    console.log("page 13")
    return getTodo()
  }
  else if(pageThirteen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=14&_limit=7'
    pageThirteen = false;
    pageFourteen = true;
    todos = []
    pageNumber.innerText = 'Page 14'
    console.log("page 14")
    return getTodo()
  }
  else if(pageFourteen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=15&_limit=7'
    pageFourteen = false;
    pageFifteen = true;
    todos = []
    pageNumber.innerText = 'Page 15'
    console.log("page 15")
    return getTodo()
  }
  else if(pageFifteen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=16&_limit=7'
    pageFifteen = false;
    pageSixteen = true;
    todos = []
    pageNumber.innerText = 'Page 16'
    console.log("page 16")
    return getTodo()
  }
  else if(pageSixteen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=17&_limit=7'
    pageSixteen = false;
    pageSeventeen = true;
    todos = []
    pageNumber.innerText = 'Page 17'
    console.log("page 17")
    return getTodo()
  }
  else if(pageSeventeen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=18&_limit=7'
    pageSeventeen = false;
    pageEighteen = true;
    todos = []
    pageNumber.innerText = 'Page 18'
    console.log("page 18")
    return getTodo()
  }
  else if(pageEighteen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=19&_limit=7'
    pageEighteen = false;
    pageNineteen = true;
    todos = []
    pageNumber.innerText = 'Page 19'
    console.log("page 19")
    return getTodo()
  }
  else if(pageNineteen){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=20&_limit=7'
    pageNineteen = false;
    pageTwenty = true;
    todos = []
    pageNumber.innerText = 'Page 20'
    console.log("page 20")
    return getTodo()
  }
  else if(pageTwenty){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=21&_limit=7'
    pageTwenty = false;
    pageTwentyOne = true;
    todos = []
    pageNumber.innerText = 'Page 21'
    console.log("page 21")
    return getTodo()
  }
  else if(pageTwentyOne){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=22&_limit=7'
    pageTwentyOne = false;
    pageTwentyTwo = true;
    todos = []
    pageNumber.innerText = 'Page 22'
    console.log("page 22")
    return getTodo()
  }
  else if(pageTwentyTwo){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=23&_limit=7'
    pageTwentyTwo = false;
    pageTwentyThree = true;
    todos = []
    pageNumber.innerText = 'Page 23'
    console.log("page 23")
    return getTodo()
  }
  else if(pageTwentyThree){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=24&_limit=7'
    pageTwentyThree = false;
    pageTwentyFour = true;
    todos = []
    pageNumber.innerText = 'Page 24'
    console.log("page 24")
    return getTodo()
  }
  else if(pageTwentyFour){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=25&_limit=7'
    pageTwentyFour = false;
    pageTwentyFive = true;
    todos = []
    pageNumber.innerText = 'Page 25'
    console.log("page 25")
    return getTodo()
  }
  else if(pageTwentyFive){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=26&_limit=7'
    pageTwentyFive = false;
    pageTwentySix = true;
    todos = []
    pageNumber.innerText = 'Page 26'
    console.log("page 26")
    return getTodo()
  }
  else if(pageTwentySix){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=27&_limit=7'
    pageTwentySix = false;
    pageTwentySeven = true;
    todos = []
    pageNumber.innerText = 'Page 27'
    console.log("page 27")
    return getTodo()
  }
  else if(pageTwentySeven){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=28&_limit=7'
    pageTwentySeven = false;
    pageTwentyEight = true;
    todos = []
    pageNumber.innerText = 'Page 28'
    console.log("page 28")
    return getTodo()
  }
  else if(pageTwentyEight){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=29&_limit=7'
    pageTwentyEight = false;
    pageTwentyNine = true;
    todos = []
    pageNumber.innerText = 'Page 29'
    console.log("page 29")
    return getTodo()
  }
  else if(pageTwentyNine){
    PAGE_URL = 'http://jsonplaceholder.typicode.com/todos?_page=29&_limit=7'
    alert("No next page left");
    console.log("Your on the last page")
    return
  }
})