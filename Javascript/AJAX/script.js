window.addEventListener("load", initEvents);

function initEvents() {
    ul = document.querySelector("#list");
    document.querySelector("#btn").addEventListener("click", loadData);
    // document.querySelector("#box_1").addEventListener("keyup", loadData);

}

function loadData() {
    var xhttp = new XMLHttpRequest();
    ul.innerHTML = '';
    xhttp.onreadystatechange = function() {
        // console.log(this.readyState, this.status);
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            obj = JSON.parse(this.responseText);
            // images = obj.data[1].images;
            obj.data.forEach(function(x) {
                var li = document.createElement("li");
                var img = document.createElement('img');
                img.src = x.images.downsized_medium.url;
                li.appendChild(img);
                ul.appendChild(li);
            })
        }
    }
    var val = document.querySelector("#box_1").value;
    console.log(val);
    xhttp.open('get', 'http://api.giphy.com/v1/gifs/search?q=' + val + '&api_key=bc56161131654faeb550630b83e0c977&limit=5');
    xhttp.send();
}