let BASE_URL = "https://jsonplaceholder.typicode.com/todos/";
let PAGE_URL = "https://jsonplaceholder.typicode.com/todos?_page=1&_limit=7";
const textInput = document.querySelector('.textInput');
const submit = document.querySelector('.btnSubmit');
const todoList = document.querySelector('#output');
const formError = document.querySelector('.form-error');
const btnChangeStatus = document.querySelector('#btnChangeStatus');
const modalWrapper = document.querySelector('.modal-wrapper');
const btnCloseModal = document.querySelector('.btnCloseModal');
const btnPrev = document.querySelector('.btnPrev');
const btnNext = document.querySelector('.btnNext');
let todos = [];
const fullTodoArray = [];

// Eftersom async await metoden kändes lätt och fetch metoden kändes snäppet svårare att förstå,
// Så valde jag att jobba framförallt med fetch för att komma till en nivå då det kändes lika lätt.
// Jag valde att experimentera lite med det på olika sätt för att öka min förståelse om du undrar varför det ser lite olika ut på olika ställen.,
// och känner att jag behärskar båda metoderna tillräckligt bra för att inte ha några större problem med någon av dem i framtiden.
// Jag kommer dock antagligen mestadels använda async await framöver.