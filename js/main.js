/*Data*/
let data={
    product:[
        {
            id: 1111,
            image: "image/ibiza.png",
            name: "IBIZA",
            description: "'den başlayan fiyatlarla",
            amount: 193500,
            amountType:"TL",
            model:"Ibiza 1.3 Ecotech DSG",
            color: [
                {id:"31", name:"Rose Red", colorCode:"#B40F14", image:"image/color/ibiza/ibiza-red.png"},
                {id:"32", name:"Rose Blue", colorCode:"#1C1C1C", image:"image/color/ibiza/ibiza-blue.png"},
                {id:"33", name:"Rose Gray", colorCode:"#C8C8C8", image:"image/color/ibiza/ibiza-gray.png"}
            ],
            accessories: [
                {id:"11", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:7500},
                {id:"12", name: "Maintenance Program Upgrade", amountType:"TL", amount:1500},
                {id:"13", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:7500},
                {id:"14", name: "Maintenance Program Upgrade", amountType:"TL", amount:2500},
                {id:"15", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:7500},
                {id:"16", name: "Maintenance Program Upgrade", amountType:"TL", amount:1550},
                {id:"17", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:5505},
                {id:"18", name: "Maintenance Program Upgrade", amountType:"TL", amount:2500},
                {id:"19", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:7500},
                {id:"20", name: "Maintenance Program Upgrade", amountType:"TL", amount:1500},
                {id:"21", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:2000},
                {id:"22", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:2000},
                {id:"23", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:2000},
                {id:"24", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:2000},
                {id:"25", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL", amount:2000}
            ]
        },
        {
            id: 1112,
            image: "image/ibiza2.png",
            name: "Arona",
            description: "'den başlayan fiyatlarla",
            amount: 420500,
            amountType:"TL",
            model:"Arona 1.6 Style",
            color: [
                {id:"31", name:"Blue", colorCode:"#1C1C1C", image:"image/color/Arona/Arona-blue.png"},
                {id:"32", name:"Orange", colorCode:"#e7773d", image:"image/color/Arona/Arona-orange.png"}
            ],
            accessories: [
                {id:"11", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL",amount:7500},
                {id:"12", name: "Maintenance Program Upgrade", amountType:"TL",amount:1500},
                {id:"13", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL",amount:7500},
                {id:"14", name: "Maintenance Program Upgrade", amountType:"TL",amount:2500},
                {id:"15", name: "SEAT FREE SYNC PACK EASY JET", amountType:"TL",amount:7500},
                {id:"16", name: "Maintenance Program Upgrade", amountType:"TL",amount:1550}
            ]
        }
    ]
};

/*Data*/
const navbar = document.querySelector("nav");

function animation(){
    var controller = new ScrollMagic.Controller();
    const t1 = gsap.timeline({defaults: {ease: Expo.InOut}});
    t1.fromTo(".logo img", 0.5, {scale: 1.5}, {scale: 1});
    t1.fromTo(navbar, 0.7, {y: "-2rem", opacity:0}, {y: 0, opacity:1});
}
animation();


var productList=document.getElementsByClassName("productList")[0];
var carDetail=document.getElementsByClassName("carDetail")[0];
var carLink=document.getElementsByClassName("carLink")[0];
var sliderTabs=document.getElementsByClassName("tab-slider--tabs")[0];
var tabs=document.getElementsByClassName("tab-slider--container")[0];
var accList=document.getElementsByClassName("accList")[0];
var items=document.getElementsByClassName("items")[0];
var total=document.getElementById("total");


for(let getir in data){
    var gelen = data[getir];
    if(getir =="product"){
        for(products in gelen){

            let changedPrice = (Math.round(gelen[products]['amount'] * 100) / 100).toLocaleString();

            productList.innerHTML += `<div class="item-${gelen[products]['id']} col col-xs product d-flex align-items-center justify-content-center mt-3">
            <img src="${gelen[products]['image']}" class="rounded mx-auto d-block">
            <div class="productDetail"><i class="bi bi-check-lg"></i>
            <strong>${gelen[products]['name']}</strong>
            <div class="detail">
            <span><b>${changedPrice}</b> ${gelen[products]['amountType']}'${gelen[products]['description']} </span>
            <a href="#" data-id="${gelen[products]['id']}" class="btn selectButton"> SELECT </a></div></div></div>`;
        }
    }
}


$(document).ready(function(){  

    $('.productList .product').click(function() {
        var productId = $(this).data('id');
        if ($(this).hasClass("Active")) {
          $(this).removeClass("Active").find(".item-"+productId).slideUp();
        } else {
          $(".productList .product.Active .item-"+productId).slideUp();
          $(".productList .product.Active").removeClass("Active");
          $(this).addClass("Active").find(".item-"+productId).slideDown();
        }
        return false;
    });

    $(".selectButton").click(function(){
        
        $(".info .carDetail .row").remove();
        $(".info .carLink a").remove();
        var productId = $(this).data('id');
        $.each(data.product, function(key, value){
            if(productId == value.id){
                let changedPrice = (Math.round(value.amount * 100) / 100).toLocaleString();

                carDetail.innerHTML += `<span>NEW</span>
                <div class="row">
                    <div class="images col-lg-2 col-sm-4">
                        <img src="${value.image}" class="img-fluid" alt="${value.name}" />
                    </div>
                    <div class="col carPrice">
                        <strong>TOTAL</strong>
                        <span><b id="total">${changedPrice}</b> ${value.amountType}</span>
                    </div>
                </div>`;
                carLink.innerHTML += `<a href="#" data-id="${value.id}" id="colors"><span>COLORS</span><i class="bi bi-arrow-right"></i></a>`;
                total=document.getElementById("total");
                currentPrice += value.amount;
            }
            
        });


        $(".info").css("display","block");
    });

    $('.carLink').on('click', '#colors', function() {

        
        $(".productList").addClass("Passive");
        $("header nav ul li a.models").removeClass("active");
        $("header nav ul li a.colors").addClass("active");
        $("#colorsList").removeClass("Passive");

        var productId = $(".carLink a").data('id');
        $(".carLink").html('<a href="#" data-id="'+productId+'" id="accessories"><span>ACCESSORIES</span><i class="bi bi-arrow-right"></i></a>');

        
        $.each(data.product, function(key, value){
            if(productId == value.id){
                var productName = value.name;
                $('#colorsList').attr('data-id', productId);

                $.each(value.color, function(key, value){
                    $("li:first-child").addClass("active");
                    $(".tab-slider--body:first-child").removeAttr('style');
                    sliderTabs.innerHTML += `<li data-id="${value.id}" class="tab-slider--trigger" rel="tab${value.id}" style="background-color: ${value.colorCode};"><i class="bi bi-check-lg"></i></li>`;
                    tabs.innerHTML += `
                    <div id="tab${value.id}" class="tab-slider--body" style="display: none;">
                        
                        <div class="row">
                            <div class="col-12">
                                <div class="colorImage d-flex my-height justify-content-center align-items-end"> 
                                <span>${productName}</span>
                                    <img src="${value.image}" class="img-fluid" height="200px" alt="${productName} - ${value.name}"/> 
                                </div>
                            </div>
                        </div>
                    </div>`;
                });

            }
        });
    });


    $('.carLink').on('click', '#accessories', function() {
        var productId = $(".carLink a").data('id');
        var colorId = $(".tab-slider--trigger.active").data('id');
        $(".productList").addClass("Passive");
        $("#colorsList").addClass("Passive");
        $("#accessoriesList").removeClass("Passive");
        //$("header nav ul li a.models").removeClass("active");
        $("header nav ul li a.colors").removeClass("active");
        $("header nav ul li a.accessories").addClass("active");

        $.each(data.product, function(key, value){
            if(productId == value.id){
                $.each(value.accessories, function(key, value){
                    let changedPrice = (Math.round(value.amount * 100) / 100).toLocaleString();

                    accList.innerHTML += `
                    <div class="col-lg-3 col-sm-4 items" data-acc="${value.id}" data-amount="${value.amount}"  data-color="${colorId}">
                        <div class="itemData">
                            <span>${value.name}</span>
                            <strong>${changedPrice} ${value.amountType}</strong>
                            <div class="success"><i class="bi bi-check-lg"></i></div>
                        </div>
                    </div>
                    `;
                });
            }
        });
        $(".carLink").html('<a href="#" data-id="'+productId+'" id="summary"><span>SUMMARY</span><i class="bi bi-arrow-right"></i></a>');
    });


    var accessories = [];
    let currentPrice = 0;
    let changedPrice;

    $('.accList').on('click', '.items', function(e) {

        total = document.getElementById("total");
    
        $(this).toggleClass("Active");
        var accId = $(this).data('acc');
        var amounts = $(this).data('amount');

        changedPrice = (Math.round(currentPrice * 100) / 100).toLocaleString();

        if($(this)[0].classList.contains('Active') == true){
            currentPrice += amounts;
            changedPrice = (Math.round(currentPrice * 100) / 100).toLocaleString();
            total.innerHTML = changedPrice;
            accessories.push(accId);
        }else{
            currentPrice -= amounts;
            changedPrice = (Math.round(currentPrice * 100) / 100).toLocaleString();
            total.innerHTML = changedPrice;

            let newArr = [];
            accessories.filter(accessorie => {
                if(accessorie != accId){
                    newArr.push(accessorie);
                }
            });
            accessories = newArr;
        }
    });

    $('.carLink').on('click', '#summary', function() {
        var productId = $(".carLink a").data('id');
        var colorId = $(".items").data('color');
        

        $(".productList").addClass("Passive");
        $("#colorsList").addClass("Passive");
        $("#accessoriesList").addClass("Passive");
        $("#summaryPage").removeClass("Passive");
        //$("header nav ul li a.models").removeClass("active");
        $("header nav ul li a.colors").removeClass("active");
        $("header nav ul li a.accessories").removeClass("active");
        $("header nav ul li a.summary").addClass("active");


        var productImageContent=document.getElementsByClassName("productImage")[0];
        var colorContent=document.getElementById("colorContent");
        var modelContent=document.getElementById("modelContent");
        var accContent=document.getElementById("accContent");


        $.each(data.product, function(key, value){
            if(productId == value.id){
                var productName = value.name;
                var productModel = value.model;
                

                productImageContent.innerHTML += `<span>${productName}</span>`;
                modelContent.innerHTML += `<span> ${productModel} </span>`;


                $.each(value.color, function(key, value){
                    if(colorId == value.id){
                        var colorName = value.name;
                        var colorImage = value.image;
                        productImageContent.innerHTML += `<img src="${colorImage}" alt="${colorName}"/>`;
                        colorContent.innerHTML += `<span> ${colorName} </span>`;
                    }
                });

                $.each(value.accessories, function(key, value){
                    accessories.forEach(accessorie => {
                        if(accessorie == value.id){
                            accContent.innerHTML += `
                                <span>${value.name} + </span>
                            `;
                        }
                    });
                });
            }
        });
        

        $(".carLink").html('<a href="#" data-id="'+productId+'" id="buy"><span>BUY NOW</span><i class="bi bi-arrow-right"></i></a>');
    });

    

    
});