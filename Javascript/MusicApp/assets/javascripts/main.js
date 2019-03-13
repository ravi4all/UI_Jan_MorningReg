window.addEventListener("load", initEvents);

function initEvents() {
    var ul = document.querySelector("#songsList");
    songsList.forEach(function(obj) {
        var li = document.createElement("li");
        var span_1 = document.createElement("span");
        var img = document.createElement("img");
        span_1.innerHTML = obj.song_name;
        img.setAttribute("src", obj.song_thumb);
        span_1.setAttribute("title", obj.song_id);
        li.appendChild(img);
        li.appendChild(span_1);
        ul.appendChild(li);
        span_1.addEventListener("click", playSong);
    })
}

function playSong() {
    // event.srcElement
    // console.log(event.srcElement.title);
    var song_id = event.srcElement.title;
}