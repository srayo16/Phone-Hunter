 // btn part
 
 let btn = () =>{
  document.getElementById('spin').style.display = 'block';
  document.getElementById('invite').style.display = 'none';
   let remove = document.getElementById('searchshow');
   remove.textContent = '';
    let input = document.getElementById('input-feild');
    let inputReal = input.value;
    if(input.value === '' ){
      document.getElementById('warAlert').style.display = "block";
      document.getElementById('noData').style.display = 'none';
      document.getElementById('spin').style.display = 'none';
    }
    else{
    document.getElementById('warAlert').style.display = "none";
    document.getElementById('noData').style.display = 'none';
    let url = `https://openapi.programming-hero.com/api/phones?search=${inputReal}`;
    fetch(url)
    .then(res=>res.json())
    .then(data => searchresult(data.data.slice(0,20)))
    input.value = '';
    }
 }
   
 let searchresult = datas =>{
    document.getElementById('spin').style.display = 'none';
    document.getElementById('noData').style.display = 'none';
    let searchresult = document.getElementById('searcharea');
    searchresult.textContent = '';
    ;
    // new element

    if(datas.length == 0 ){
      document.getElementById('spin').style.display = 'none';
      document.getElementById('noData').style.display = 'block';
    }

    else{
      document.getElementById('spin').style.display = 'none';
      document.getElementById('noData').style.display = 'none';
      datas.forEach(data =>{
        let div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML =  `
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
 }

 // btn part end

 // details tap start
 let IDphone = detail =>{
  document.getElementById('spin').style.display = 'block';
  document.getElementById('warAlert').style.display = "none";
  document.getElementById('noData').style.display = 'none';
    let url = `https://openapi.programming-hero.com/api/phone/${detail}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.data))
}

 let showDetails = phone => {
  document.getElementById('spin').style.display = 'none';
  document.getElementById('noData').style.display = 'none';
    let searchShow = document.getElementById('searchshow');
    searchShow.textContent = '';
    let div = document.createElement('div');
    div.classList.add('col');
    if(!phone.others){
      div.innerHTML = `<div class="card img-fluid w-75 p-3">
      <img src="${phone.image}" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">${phone.name}</h5>
        <p class="card-text">Realease Date: ${phone.releaseDate ? phone.releaseDate: 'Coming soon'} </p>
        <p class="card-text">Main features: Chipset: ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet: 'Not available!'} <br>Display Size: ${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize: 'Not available!' } <br>Memory: ${phone.mainFeatures.memory ? phone.mainFeatures.memory: 'Not available!' } </p>
        <p class="card-text">Sensors: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors: 'Not available!' }</p>
        <p class="card-text">Others: Not available!</p>
        </div>
      </div>`;
      searchShow.appendChild(div);
    }
    else{
      div.innerHTML = `<div class="card img-fluid w-75 p-3">
    <img src="${phone.image}" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">${phone.name}</h5>
      <p class="card-text">Realease Date: ${phone.releaseDate ? phone.releaseDate: 'Coming soon'} </p>
      <p class="card-text">Main features: Chipset: ${phone.mainFeatures.chipSet ? phone.mainFeatures.chipSet: 'Not available!'} <br>Display Size: ${phone.mainFeatures.displaySize ? phone.mainFeatures.displaySize: 'Not available!' } <br>Memory: ${phone.mainFeatures.memory ? phone.mainFeatures.memory: 'Not available!' } </p>
      <p class="card-text">Sensors: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors: 'Not available!' }</p>
          <p class="card-text">Others: Bluetooth: ${phone.others.Bluetooth ? phone.others.Bluetooth: 'Not available!' } , GPS: ${phone.others.GPS ? phone.others.GPS: 'Not available!' } , NFC: ${phone.others.NFC ? phone.others.NFC: 'Not available!' } , Radio: ${phone.others.Radio ? phone.others.Radio: 'Not available!' } , USB: ${phone.others.USB ? phone.others.USB: 'Not available!' } , WLAN: ${phone.others.WLAN ? phone.others.WLAN: 'Not available!' }</p>
      </div>
      </div>`;
    }
  searchShow.appendChild(div);
 } 


// details tap end