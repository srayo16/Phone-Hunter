 // btn part
 
 let btn = () =>{
    let input = document.getElementById('input-feild');
    let inputReal = input.value;
    
    if(input.value === '' ){
      // alert('Please vai!');
      document.getElementById('warAlert').style.display = "block";
    }
    else{
      document.getElementById('warAlert').style.display = "none";
    let url = `https://openapi.programming-hero.com/api/phones?search=${inputReal}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => searchresult(data.data))
    input.value = '';
    }
 }
 
 let searchresult = datas =>{
    // console.log(datas);
    let searchresult = document.getElementById('searcharea');
    searchresult.textContent = '';
    // new element
    datas.forEach(data =>{
        // console.log(data);
    let div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
    <div class="card">
      <img src="${data.image}" class="card-img-top img-fluid w-75 p-3" alt="">
      <div class="card-body">
        <h5 class="card-title">${data.phone_name}</h5>
        <p class="card-text">${data.brand}</p>
        <button class="btn btn-primary" onclick="IDphone('${data.slug}')" type="submit">Details</button>
      </div>
    </div>
  `;
    searchresult.appendChild(div);
 }) 
 }

 // btn part done

 // details tap start
 let IDphone = detail =>{
    let url = `https://openapi.programming-hero.com/api/phone/${detail}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.data))
}

 let showDetails = phones => {
    console.log(phones);
    let searchShow = document.getElementById('searchshow');
    searchShow.textContent = '';
    
    // phones.forEach(phone => {
    let div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `<div class="card img-fluid w-75 p-3">
    <img src="${phones.image}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${phones.name}</h5>
      <p class="card-text">${phones.releaseDate}</p>
      <p class="card-text">Main features: ${phones.mainFeatures.chipSet} <br> ${phones.mainFeatures.displaySize} <br> ${phones.mainFeatures.memory} </p>
      <p class="card-text">Sensors: ${phones.mainFeatures.sensors}</p>
      <p class="card-text">Others: ${phones.others.Bluetooth} , ${phones.others.GPS} , ${phones.others.NFC} , ${phones.others.Radio} , ${phones.others.USB} , ${phones.others.WLAN}</p>
    </div>
  </div>`;
  searchShow.appendChild(div);
    // })
 } 