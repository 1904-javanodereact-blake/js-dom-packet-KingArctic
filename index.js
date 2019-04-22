// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
function getUSA() {
    const usa = document.getElementsByTagName("*");
    for (let i = 0; i < usa.length; i++) {
        if (usa[i].textContent == "USA")
            console.log(usa[i].textContent);
    }
}
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    const theTable = document.getElementsByTagName("table")[0].rows;
    let salesPeople = 'Sales: ';
    for (let i = 0; i < theTable.length; i++) {
        if (theTable[i].cells[1].textContent == "Sales")
            salesPeople += theTable[i].cells[0].textContent += ', ';
    }
    console.log(salesPeople);
}
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    const anchors = document.getElementsByTagName("a");
    for (let i = 0; i < anchors.length; i++) {
        for (let j = 0; j < anchors[i].children.length; j++) {
            if (anchors[i].children[j].localName === 'span') {
                console.log(anchors[i].children[j].textContent);
            }
        }
    }
}
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'hobbies' select element.
// Print the value and the contents.
function getHobbies() {
    const hobbies = document.getElementsByTagName("select");
    for (let i = 0; i < hobbies.length; i++) {
        if (hobbies[i].name == 'hobbies') {
            for (let j = 0; j < hobbies[i].children.length; j++) {
                if (hobbies[i].children[j].defaultSelected == true)
                    console.log(hobbies[i].children[j].textContent);
            }
        }
    }
}
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.
function getCustomAttribute() {
    const customs = document.querySelectorAll("[data-customAttr]");
    console.log(customs);
    for (let i = 0; i < customs.length; i++) {
        console.log(customs[i].getAttribute("data-customAttr"));
        console.log(customs[i].localName);
    }
}
// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element
function sumEvent() {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    const sum = document.getElementById("sum").parentElement;
    num1.value = 0;
    num2.value = 0;
    num1.addEventListener("input", function () {
        sum.textContent = `Sum: ${(+num1.value + +num2.value)}`
    });
    num2.addEventListener("input", function () {
        sum.textContent = `Sum: ${(+num1.value + +num2.value)}`
    });
}
// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
function skillsEvent() {
    const skills = document.getElementsByName("skills");
    skills[0].addEventListener("change", function () {
        alert(`Are you sure ${skills[0].value} is one of your skills?`);
    });
}
// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
function favoriteColorEvent() {
    const colors = document.getElementsByName("favoriteColor");
    for (let i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", function () {
            alert(`So you like ${colors[i].value} more than ${colors[i].style.backgroundColor}`)
            for (let j = 0; colors.length; j++) {
                colors[j].style.backgroundColor = `${colors[i].value}`;
            }
        })
    }
}
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.
function hoverEmployee() {
    const employees = document.querySelectorAll(".empName");
    for (let i = 0; i < employees.length; i++) {
        employees[i].parentElement.addEventListener("mouseover", function () {
            employees[i].hidden = !employees[i].hidden;
        })
    }
}
// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.
function getTime() {
    const time = new Date();
    const hours = (time.getHours() < 10 ? '0' : '') + time.getHours();
    const minutes = (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
    const seconds = (time.getSeconds() < 10 ? '0' : '') + time.getSeconds();
    if (hours > 12) {
        document.getElementById("currentTime").textContent = `${hours - 12}:${minutes}:${seconds} pm`;
    }
    else {
        document.getElementById("currentTime").textContent = `${hours - 12}:${minutes}:${seconds} pm`;
    }
}
// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.
function delayEvent() {
    const delay = document.getElementById("helloWorld");
    delay.addEventListener("click", function () {
        console.log(`clicked`);
        setTimeout(function () {
            //delay.setAttribute("color", rgb_number(Math.random() * 255,Math.random() * 255,Math.random() * 255));
            delay.style.color = `RGB(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        }, 3000);
        console.log(delay.style.color);
    });
}
// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
function walkTheDom(node) {
    console.log(node);
    for (let i = 0; i < node.children.length; i++) {
        walkTheDom(node.children[i]);
    }
}