
// lưu API
var courseApi = "http://localhost:3000/products";

function start() {
    getCourses(renderCourses);
    handleCreateform();
}

start();

// function
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCourses = document.querySelector("#list-courses");
    var htmls = courses.map(function (courses) {
        return `
                <h3>${courses.name}</h3>
                <h3>${courses.price}</h3>
        `;
    });
    listCourses.innerHTML = htmls.join("");
}

function handleCreateform() {
    var createBtn = document.querySelector("#create");
    createBtn.onclick = function () {
        var name = document.querySelector('input[name ="name"]').value;
        var price = document.querySelector('input[name ="price"]').value;

        var formData = {
            name: name,
            price: price
        }
        createCourses(formData);
    }
}

function createCourses(data, callback) {
    var options = {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            authorization: 'Bearer 123abc456def'
        },
        body: JSON.stringify(data)
    };
    fetch(courseApi, options)
        .then(function (response) {
            response.json();
        })
        .then(callback);
}