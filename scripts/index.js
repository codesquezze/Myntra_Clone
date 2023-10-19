let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr): [];
    displayItemsOnHomePage();
    displayBagIcon();
}


function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        bagItemCountElement.innerText = bagItems.length;
        bagItemCountElement.style.visibility = 'visible';
    }
    else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function addToBag(itemId) {
    bagItems.push(itemId);
// jb v page change krenge then phir se bagItem ka count zero na ho iske liye hm pehle localStorage me save kr lenge aur phir usko load hone pr retrive kr lenge.....it returns the string......retriveal is done in the onLoad() function...........
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}


function displayItemsOnHomePage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement){  // to load the bag and show count properly on bag.html page
        return;
    }
    let innerhtml = '';
    items.forEach(item => {
        innerhtml += `<div class="item-container">
        <img class="item-image" src="${item.item_image}" alt="item image">
        <div class="rating">${item.rating.stars} ⭐ | ${item.rating.noOfReviews}</div>
        <div class="company-name">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    })
    itemsContainerElement.innerHTML = innerhtml;
}
// simple function ko likhne k pehle v call kr skte h,,,,,but in case of arrow function ,,,, function should be called after declaration

