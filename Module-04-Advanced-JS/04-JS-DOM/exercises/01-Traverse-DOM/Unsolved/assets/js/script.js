// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');


// Change style by accessing style object's properties
articlesDiv.children[0].children[1].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';


console.log(articlesDiv.children[0].children);
console.log(headerDiv);