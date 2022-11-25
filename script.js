function Fun1() {
    document.body.style.backgroundColor = "grey";
  }
  function Fun2() {
    document.body.style.backgroundColor = "pink";
  }
  function Fun3() {
    document.body.style.backgroundColor = "orange";
  }
  function Fun4() {
    document.body.style.backgroundColor = "red";
  }
  function Fun5() {
    document.body.style.backgroundColor = "brown";
  }
const form = document.querySelector('form');
const list = document.getElementById('list');


function getMovies(searchText) {

    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    
    const url = `https://api.tvmaze.com/search/shows?q=${searchText}`;

    axios.get(url)
        .then((res) => {

            for (let item of res.data) {
                if (item.show.image) {
                    const image = document.createElement('img');
                    
                    image.src = item.show.image.medium;

                    image.style.margin = '10px';

                    list.append(image);
                }
              
            }

            
        })
        .catch((err) => {
            console.log(err);
        })


}





form.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const inpText = form.elements[0].value;

    getMovies(inpText);

    form.elements[0].value = "";

})