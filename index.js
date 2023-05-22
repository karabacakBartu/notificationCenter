const products = [
  {
    title: "Sehpa",
    image:
      "https://st.myideasoft.com/idea/dq/03/myassets/products/338/8681285914668-1.jpg?revision=1674723277",
    description: "sehpa açıklaması",
    link: "https://www.google.com/search?q=sandalye&tbm=isch&ved=2ahUKEwiwlLjei4n_AhUphP0HHUuxCx0Q2-cCegQIABAA&oq=sandalye&gs_lcp=CgNpbWcQAzIKCAAQigUQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCAAQigUQQzIICAAQgAQQsQMyBQgAEIAEMgcIABCKBRBDMgUIABCABDIFCAAQgAQ6BAgjECdQgDJY1T1gpj5oAHAAeACAAXOIAZIHkgEDMy42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=KnZrZLDXDqmI9u8Py-Ku6AE&bih=904&biw=1920#imgrc=9Tqp4D0Vdj4W8M",
    visited: true,
    isNew: true,
  },
  {
    title: "Masa",
    image:
      "https://neslive.com/image/cache/catalog/yeni_firmalar/nills/viera-yuvarlak-masa/viera-yuvarlak-masa-1515-1019x665.jpg",
    description: "Masa açıklaması",
    link: "https://www.trendyol.com/masa-x-c1112",
    visited: true,
    isNew: true,
  },
  {
    title: "Sandalye",
    image:
      "https://st1.myideasoft.com/shop/bo/48/myassets/products/933/efes.jpg?revision=1654699746",
    description: "Sandalye açıklaması",
    link: "https://www.google.com/search?q=sandalye&tbm=isch&ved=2ahUKEwiwlLjei4n_AhUphP0HHUuxCx0Q2-cCegQIABAA&oq=sandalye&gs_lcp=CgNpbWcQAzIKCAAQigUQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCAAQigUQQzIICAAQgAQQsQMyBQgAEIAEMgcIABCKBRBDMgUIABCABDIFCAAQgAQ6BAgjECdQgDJY1T1gpj5oAHAAeACAAXOIAZIHkgEDMy42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=KnZrZLDXDqmI9u8Py-Ku6AE&bih=904&biw=1920#imgrc=9Tqp4D0Vdj4W8M",
    visited: true,
    isNew: false,
  },
  {
    title: "Lamba",
    image: "https://files.bundesign.com/dosyalar/2020/02/tel-armut-lamba.jpg",
    description: "Sandalye açıklaması",
    link: "https://www.google.com/search?q=sandalye&tbm=isch&ved=2ahUKEwiwlLjei4n_AhUphP0HHUuxCx0Q2-cCegQIABAA&oq=sandalye&gs_lcp=CgNpbWcQAzIKCAAQigUQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCAAQigUQQzIICAAQgAQQsQMyBQgAEIAEMgcIABCKBRBDMgUIABCABDIFCAAQgAQ6BAgjECdQgDJY1T1gpj5oAHAAeACAAXOIAZIHkgEDMy42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=KnZrZLDXDqmI9u8Py-Ku6AE&bih=904&biw=1920#imgrc=9Tqp4D0Vdj4W8M",
    visited: false,
    isNew: true,
  },
  {
    title: "Yorgan",
    image: "https://cdn.ikea.com.tr/urunler/2000_2000/PE786375.jpg",
    description: "Yorgan açıklaması",
    link: "https://www.google.com/search?q=sandalye&tbm=isch&ved=2ahUKEwiwlLjei4n_AhUphP0HHUuxCx0Q2-cCegQIABAA&oq=sandalye&gs_lcp=CgNpbWcQAzIKCAAQigUQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCAAQigUQQzIICAAQgAQQsQMyBQgAEIAEMgcIABCKBRBDMgUIABCABDIFCAAQgAQ6BAgjECdQgDJY1T1gpj5oAHAAeACAAXOIAZIHkgEDMy42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=KnZrZLDXDqmI9u8Py-Ku6AE&bih=904&biw=1920#imgrc=9Tqp4D0Vdj4W8M",
    visited: false,
    isNew: true,
  },
  {
    title: "Ayakkabı",
    image:
      "https://st-vans.mncdn.com/mnresize/1500/1500/Content/media/ProductImg/original/637639372726016847.jpg",
    description: "Ayakkabı açıklaması",
    link: "https://www.google.com/search?q=sandalye&tbm=isch&ved=2ahUKEwiwlLjei4n_AhUphP0HHUuxCx0Q2-cCegQIABAA&oq=sandalye&gs_lcp=CgNpbWcQAzIKCAAQigUQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCAAQigUQQzIICAAQgAQQsQMyBQgAEIAEMgcIABCKBRBDMgUIABCABDIFCAAQgAQ6BAgjECdQgDJY1T1gpj5oAHAAeACAAXOIAZIHkgEDMy42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=KnZrZLDXDqmI9u8Py-Ku6AE&bih=904&biw=1920#imgrc=9Tqp4D0Vdj4W8M",
    visited: true,
    isNew: true,
  },
  {
    title: "Çorap",
    image:
      "https://img-dagi.mncdn.com/mnpadding/1200/1800/FFFFFF/media/catalog/product/f/f/ff8e7db34d8a7f072fd7359fae2ff0f9e2ca11ee0ec359d4153c69b8d8e65f1f.jpeg?abc",
    description: "Çorap açıklaması",
    link: "https://www.google.com/search?q=sandalye&tbm=isch&ved=2ahUKEwiwlLjei4n_AhUphP0HHUuxCx0Q2-cCegQIABAA&oq=sandalye&gs_lcp=CgNpbWcQAzIKCAAQigUQsQMQQzIICAAQgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIHCAAQigUQQzIICAAQgAQQsQMyBQgAEIAEMgcIABCKBRBDMgUIABCABDIFCAAQgAQ6BAgjECdQgDJY1T1gpj5oAHAAeACAAXOIAZIHkgEDMy42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=KnZrZLDXDqmI9u8Py-Ku6AE&bih=904&biw=1920#imgrc=9Tqp4D0Vdj4W8M",
    isNew: true,
    visited: false,
  },
];

var lastVisitedProducts = products.map(function (element) {
  if (element.visited) {
    return element;
  }
});

lastVisitedProducts = lastVisitedProducts.filter((elem) => !!elem);
lastVisitedProducts = lastVisitedProducts.slice(-3);

document.addEventListener("DOMContentLoaded", function () {
  const styleElement = document.createElement("style");
  styleElement.innerHTML = `
      #notificationContainer {
        width:300px;
        position: fixed;
        top: 50%;
        right: 20px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

      }
  
      #notificationButton {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #9B396A;
        border-radius: 50%;
        box-sizing: border-box;
        cursor: pointer;
        margin-bottom: 10px;
        position: relative;
        padding: 0.6rem;
    }
  
      #notificationCenter {
        width: 100%;
        background-color: #9B396A;
        text-align: right;
        display: none;
        transition: all 0.3s ease;
        max-height: 400px;
        border-radius: 10px;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-15%, -100%);
        overflow-y: auto;
      }
  
      #notificationMessage {
        position:relative;
        color:black;
        text-decoration: none;
        background-color: white;
        display: flex;
        align-items: flex-start;
        transition: all 0.3s ease;
        overflow-y: auto;
        border: 1px solid;
        border-color: #f2f2f2;
        padding: 10px;
      }

      #badge{
        position:absolute;
        top:5px;
        right:7px;
        background-color: #9B396A;
        color:white;
        padding:2px 8px;
        border-radius: 20px;
      }
  
      .productImage {
        width: 30%;
        max-height:70px;
        object-fit: cover;
        margin-right: 10px;
        object-fit: fill;
      }
  
      .productContent {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
  
      .productTitle {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 5px;
        align-self: flex-start;
      }
  
      .productDescription {
        font-size: 1.1rem;
        margin-bottom: 5px;
        align-self: flex-start;
      }
  
      #notificationTitle{
        font-size: 0.5rem;
        color:white;
        display:flex;
        padding-left:5px;
      }

      @media only screen and (max-width: 425px){
        .body{
            background:red;
        }
        #notificationCenter {
            width:400px;
          }
      }
    `;

  document.head.appendChild(styleElement);

  const body = document.querySelector("body");

  const notificationContainer = document.createElement("div");
  notificationContainer.id = "notificationContainer";
  body.appendChild(notificationContainer);

  const notificationButton = document.createElement("div");
  notificationButton.id = "notificationButton";
  notificationContainer.appendChild(notificationButton);

  const image = document.createElement("img");
  image.className = "notificationButton";
  image.style.width = "100%";
  image.src =
    "https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=bell";
  notificationButton.appendChild(image);

  /*Notification List*/
  const notificationCenter = document.createElement("div");
  notificationCenter.id = "notificationCenter";
  notificationContainer.appendChild(notificationCenter);

  /*Notification Title*/
  const notificationTitle = document.createElement("div");
  notificationTitle.id = "notificationTitle";
  notificationTitle.innerHTML = "<h1>DISCOVER OUR DEALS</h1>";
  notificationCenter.appendChild(notificationTitle);

  /*Production listing*/
  if (lastVisitedProducts.length > 2) {
    for (let i = 0; i < 3; i++) {
      const notificationCard = document.createElement("a");
      notificationCard.id = "notificationMessage";
      notificationCard.href = lastVisitedProducts[i].link;
      notificationCard.target = "target";

      if (lastVisitedProducts[i].isNew) {
        const newBadge = document.createElement("span");
        newBadge.textContent = "new";
        newBadge.id = "badge";
        notificationCard.appendChild(newBadge);
      }

      const productImage = document.createElement("img");
      productImage.classList.add("productImage");
      productImage.src = lastVisitedProducts[i].image;
      notificationCard.appendChild(productImage);

      const productContent = document.createElement("div");
      productContent.classList.add("productContent");

      const productTitle = document.createElement("div");
      productTitle.classList.add("productTitle");
      productTitle.textContent = lastVisitedProducts[i].title;
      productContent.appendChild(productTitle);

      const productDescription = document.createElement("div");
      productDescription.classList.add("productDescription");
      productDescription.textContent = lastVisitedProducts[i].description;
      productContent.appendChild(productDescription);

      notificationCard.appendChild(productContent);

      notificationCenter.appendChild(notificationCard);
    }
  }

  notificationButton.addEventListener("click", function () {
    if (notificationCenter.style.display === "none") {
      notificationCenter.style.display = "block";
      image.src =
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Cross_icon_%28white%29.svg/2048px-Cross_icon_%28white%29.svg.png";
    } else {
      notificationCenter.style.display = "none";
      image.src =
        "https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=bell";
    }
  });
});
