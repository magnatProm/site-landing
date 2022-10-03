const cars=[
    {
      "img":'img/car.png',
      "header":'Lorem ipsum dolor sit amet',
      "header_min":'Mercedes maybach s600',
      "text":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut eu tellus cursus faucibus duis hendrerit volutpat neque. Eget integer a amet iaculis. Nullam elit',
      "id":1,
  },
    {
      "img":'img/header_image.png',
      "header":'Lorem ipsum dolor sit amet',
      "header_min":'Mercedes maybach s600',
      "text":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut eu tellus cursus faucibus duis hendrerit volutpat neque. Eget integer a amet iaculis. Nullam elit',
      "id":1,
  },
    {
      "img":'img/car.png',
      "header":'Lorem ipsum dolor sit amet',
      "header_min":'Mercedes maybach s600',
      "text":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut eu tellus cursus faucibus duis hendrerit volutpat neque. Eget integer a amet iaculis. Nullam elit',
      "id":1,
  },
    {
      "img":'img/header_image.png',
      "header":'Lorem ipsum dolor sit amet',
      "header_min":'Mercedes maybach s600',
      "text":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut eu tellus cursus faucibus duis hendrerit volutpat neque. Eget integer a amet iaculis. Nullam elit',
      "id":1,
  },
    {
      "img":'img/header_image.png',
      "header":'Lorem ipsum dolor sit amet',
      "header_min":'Mercedes maybach s600',
      "text":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut eu tellus cursus faucibus duis hendrerit volutpat neque. Eget integer a amet iaculis. Nullam elit',
      "id":1,
  },
  {
    "img":'img/header_image.png',
    "header":'Lorem ipsum dolor sit amet',
    "header_min":'Mercedes maybach s600',
    "text":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut eu tellus cursus faucibus duis hendrerit volutpat neque. Eget integer a amet iaculis. Nullam elit',
    "id":1,
},
{
  "img":'img/header_image.png',
  "header":'Lorem ipsum dolor sit amet',
  "header_min":'Mercedes maybach s600',
  "text":'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut eu tellus cursus faucibus duis hendrerit volutpat neque. Eget integer a amet iaculis. Nullam elit',
  "id":1,
},
  ]
  
  
  cars.forEach(function (item) {
  
    document.querySelector('.slider__carousel').insertAdjacentHTML("afterbegin",
       `
       <div class="card slider__box" data-numder="${item.id}">
       <img src="${item.img}" alt="img">
       <div class="info">
           <div class="card__name">
               <h5 class="card__subtitle slider__subtitle">${item.header}</h5>
               <p>${item.header_min}</p>
           </div>
           <p>${item.text}</p>
       </div>
   </div>
       `);
  });