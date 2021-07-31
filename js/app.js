const form = document.querySelector('#my-form');
form.addEventListener('submit', function (e){
    e.preventDefault()
    const formData = new FormData(e.target)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'post',
    })
        .then(function (response ){
            return response.json();
        })
        .then(function(json){
            console.log(json)
        })
});