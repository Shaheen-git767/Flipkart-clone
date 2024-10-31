let sample_data = [
    {
        Brand:"ARROW",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/i/s/-original-imaghgchxvgkactc.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"758/-",
        actualprice:"2,299/-"
    },
    {
        Brand:"ADIDAS",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/p/c/40-arfkosh0024-arrow-original-imagszket7qcdbze.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,329/-",
        actualprice:"1,799/-"
    },
    {
        Brand:"PUMA",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/r/x/d/50-anaesh1035-arrow-newyork-original-imagg48fqgxezpnk.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"1,286/-",
        actualprice:"2,499/-"
    }, {
        Brand:"ONE8",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/2/z/o/46-ares02011a-arrow-sport-original-imagknbgg4dcqvvv.jpeg?q=70",
        names:"Men Slim Self Shirt",
        price:"1,758/-",
        actualprice:"2,099/-"
    },
    {
        Brand:"NIKE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558/-",
        actualprice:"1,399/-"
    },
    {
        Brand:"REEBOK",
        img_src:"https://rukminim2.flixcart.com/image/612/612/l4oi4cw0/track-pant/6/d/9/l-wr-102a-wolf-runner-original-imagfgupunq3tdkg.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558/-",
        actualprice:"1,399/-"
    },
    {
        Brand:"GUCCI",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/9/z/c/-original-imagg9zwzngacvry.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"5578/-",
        actualprice:"10,399/-"
    },
    {
        Brand:"PEPPE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/4/f/-original-imagsfejwcyfa4yx.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"2,038/-",
        actualprice:"2,899/-"
    },
    {
        Brand:"CALVIN KLIEN",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558/-",
        actualprice:"1,399/-"
    },
    {
        Brand:"ADIDAS",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/s/3/j/m-22mo116-2-moca-by-monte-carlo-original-imagkhz8pfsa7eyp.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558/-",
        actualprice:"1,399/-"
    },
    {
        Brand:"ARROW",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/n/m/e/m-int-ts-203-f-ns1-r-l-bk-integriti-original-imaggaqsqaqj5pyu.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558/-",
        actualprice:"1,399/-"
    },
    {
        Brand:"MASAN",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/e/v/f/l-137bk-w-torofy-original-imagn3ahwsythazd.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"558/-",
        actualprice:"1,399/-"
    },
    {
        Brand:"POLO",
        img_src:"https://rukminim2.flixcart.com/image/612/612/kixgtjk0-0/track-pant/c/e/r/30-payjama-0028-acton-wilmer-original-imafyhddnjykahke.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"3433/-",
        actualprice:"6789/-"
    },
    {
        Brand:"VERSACE",
        img_src:"https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/k/1/w/m-r-tp-b-s-roshni-original-imag9cgwbugae7fk-bb.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"557/-",
        actualprice:"1,039/-"
    },
    {
        Brand:"MASAN",
        img_src:"https://rukminim2.flixcart.com/image/612/612/l547yq80/track-pant/i/q/y/m-solid-sports-men-military-blue-track-pants-mildtouch-original-imagfvbpyzzfukbh.jpeg?q=70",
        names:"Men Slim Fit Self",
        price:"2020/-",
        actualprice:"4500/-"
    },
    
    

];


localStorage.setItem("productsdata", JSON.stringify(sample_data));

let collection = JSON.parse(localStorage.getItem("productsdata")) || [];

Product();

function Product(){

    collection.map((element)=>{
        
        let box = document.createElement("div");

        let innerbox = document.createElement("div")
    let price1 = document.createElement("span");
     price1.innerHTML = element.price
    let price2 = document.createElement("span");
    price2.innerHTML = element.actualprice
    price2.className = "cutprice"
    

    innerbox.append(price1);
    innerbox.append(price2);
    innerbox.className = "innerbox"
  let avatar = document.createElement("img");
  avatar.src = element.img_src;
  avatar.className = "avatar"
  let brand = document.createElement("p");
  brand.className = "brand"
  brand.innerHTML = element.Brand;
   box.append(avatar,brand,innerbox);
   document.getElementById("collection").append(box);

    })
}