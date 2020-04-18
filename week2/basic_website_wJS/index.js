var nav = document.createElement("nav")
nav.style.textAlign = "Center"

var linkOne = document.createElement("a")
linkOne.setAttribute("href", "#")
linkOne.textContent = "Home "
nav.appendChild(linkOne);

var linkTwo = document.createElement("a")
linkTwo.setAttribute("href", "#")
linkTwo.textContent = "About "
nav.appendChild(linkTwo);

var linkThree = document.createElement("a")
linkThree.setAttribute("href", "#")
linkThree.textContent = "Contact"
nav.appendChild(linkThree);
document.body.append(nav);

var header = document.createElement("h1")
header.textContent = "Welcome to my website"
header.style.textAlign ="center"
header.style.color = "hotpink"
document.body.append(header);

var para = document.createElement("p")
para.textContent = "This is my first mini website created only with Javascript. Below are the resources I used to complete this project."
para.style.textAlign = "center"
document.body.append(para);

var orderList = document.createElement("ul")
orderList.style.textAlign = "center"
orderList.style.margin = 2
orderList.style.padding = 0

var firstList = document.createElement("li")
firstList.textContent = "Scrimba"
orderList.appendChild(firstList);

var secondList = document.createElement("li")
secondList.textContent = "W3Schools"
orderList.appendChild(secondList);

var thirdList = document.createElement("li")
thirdList.textContent = "Stack Overflow"
orderList.appendChild(thirdList);
document.body.append(orderList);

var foot = document.createElement("footer")
foot.textContent = "Creator: Kelly Compton"
foot.style.textAlign = "center"
document.body.append(foot);