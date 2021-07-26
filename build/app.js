const form = document.querySelector('#my-form');
form.addEventListener('submit', function (e){
    e.preventDefault()
    console.log(e)
    const formData = new FormData(e.target)
    fetch('https://jsonplaceholder.typicode.com/comments?postID=1')
        .then(function (response ){
            return response.json();
        })
        .then(function(json){
            console.log(json)
        })
});