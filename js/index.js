// btn part

let btn = () =>{
    let input = document.getElementById('input-feild');
    let inputReal = input.value;
    input.value = '';
    let url = `https://openapi.programming-hero.com/api/phones?search=${inputReal}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => searchresult(data.data))
}

let searchresult = datas =>{
    console.log(datas);
    let searchresult = document.getElementById('searcharea');
    searchresult.textContent = '';
    // new element
    datas.forEach(data =>{
        console.log(data);
    let div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
      <img src="${data.image}" class="card-img-top img-fluid w-75 p-3" alt="">
      <div class="card-body">
        <h5 class="card-title">${data.phone_name}</h5>
        <p class="card-text">${data.brand}</p>
      </div>
    </div>
  `;
    searchresult.appendChild(div);
})
    
  
}