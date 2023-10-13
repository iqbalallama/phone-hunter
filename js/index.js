const dataFetch = (search) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => display(data.data))
}
const display = (data) =>{
    const searchBody= document.getElementById('search-body');
    searchBody.textContent = '';
    data.forEach(dt => {
        console.log(dt)
        const div = document.createElement('div');
        div.classList =`card w-96 bg-base-100 shadow-xl`;
        div.innerHTML = `
        <figure><img src="${dt.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Name: ${dt.phone_name
          }</h2>
          <p>Model: ${dt.slug}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
        `
        searchBody.appendChild(div)
    });
}
const searchBtn =()=>{
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value ;
    dataFetch(searchText)
    inputField.value = ''
}
