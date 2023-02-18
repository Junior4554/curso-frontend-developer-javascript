
const mail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamMobile = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.product-detail');
const imgcarritoIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');


mail.addEventListener('click', deskTopMenu);
menuHamMobile.addEventListener('click', MenuHamMobile);
imgcarritoIcon.addEventListener('click', mostrarCarrito);




function mostrarCarrito(){
    const ismenuMobileOpen = menuMobile.classList.contains('inactive');
    const isDestopMenu = desktopMenu.classList.contains('inactive');
    if (ismenuMobileOpen && isDestopMenu) {
        menuCarritoIcon.classList.toggle('inactive');
    }
    else{
        desktopMenu.classList.add('inactive')
        menuMobile.classList.add('inactive');
        menuCarritoIcon.classList.toggle('inactive');
    }
}

function MenuHamMobile(){
    const ismenuCarritoOpen = menuCarritoIcon.classList.contains('inactive');
    if(ismenuCarritoOpen){
        menuMobile.classList.toggle('inactive');
    }else{
        menuCarritoIcon.classList.add('inactive');
        menuMobile.classList.toggle('inactive');
    }

}

function deskTopMenu(){
    const isMenuCarrito = menuCarritoIcon.classList.contains('inactive');
    if (isMenuCarrito){
        desktopMenu.classList.toggle('inactive');
    }else{
       menuCarritoIcon.classList.add('inactive');
       desktopMenu.classList.toggle('inactive');
    }
}

const productList = [];
productList.push(
    {
        nombre : 'Bicke',
        precio : '120',
        img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        nombre : 'Pantalla',
        precio : '126',
        img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        nombre : 'moto',
        precio : '12600',
        img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        nombre : 'carro',
        precio : '1260052',
        img : 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
);
/*

 */
cargarElemento(productList);


function cargarElemento(productos){
    for (producto of productos){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        img.setAttribute('src', producto.img);
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');

        const productInfoPre = document.createElement('P');
        productInfoPre.innerText = '$' + producto.precio;
        const productInfoDes = document.createElement('P');

        productInfoDiv.appendChild(productInfoPre);
        productInfoDiv.appendChild(productInfoDes);

        productInfoDes.innerText = producto.nombre;
        const  figureProductInfo = document.createElement('figure');
        const imgProductFigure = document.createElement('img')
        imgProductFigure.setAttribute('src',
            './icons/bt_add_to_cart.svg');
        figureProductInfo.appendChild(imgProductFigure);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(figureProductInfo);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        cardsContainer.appendChild(productCard)


    }

}
