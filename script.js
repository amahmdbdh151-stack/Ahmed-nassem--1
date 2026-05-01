// بيانات المنتجات
const products = [
    {
        id: 1,
        name: "ساعة فاخرة ذهبية",
        price: 2499,
        originalPrice: 3299,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-watch-1-CUPc5T6pmFma5ArwSfVTYv.webp",
        rating: 4.8,
        reviews: 156
    },
    {
        id: 2,
        name: "كريم العناية الفاخر",
        price: 599,
        originalPrice: 799,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-skincare-1-Tnv2FuRaYmFGPQDwtEVU4o.webp",
        rating: 4.9,
        reviews: 234
    },
    {
        id: 3,
        name: "سوار ذهبي فاخر",
        price: 1899,
        originalPrice: 2299,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-bracelet-1-V9ZFpLLQyvqoRBCnvSuzjt.webp",
        rating: 4.9,
        reviews: 145
    },
    {
        id: 4,
        name: "عطر فاخر برائحة الورد",
        price: 1299,
        originalPrice: 1599,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-perfume-1-5x3hWbhwRhUcxPvZ5vSegL.webp",
        rating: 4.6,
        reviews: 98
    },
    {
        id: 5,
        name: "خاتم الماس الفاخر",
        price: 4999,
        originalPrice: 6499,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-ring-1-LbS9teV4Tr3REmumKBsPM4.webp",
        rating: 4.9,
        reviews: 287
    },
    {
        id: 6,
        name: "عقد ذهبي باللؤلؤ",
        price: 2299,
        originalPrice: 2999,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-necklace-1-jgMpSDs9SSndJ22izZqawb.webp",
        rating: 4.8,
        reviews: 156
    },
    {
        id: 7,
        name: "أقراط الماس البيضاء",
        price: 1799,
        originalPrice: 2299,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-earrings-1-6dtMwYtzDou62EXsEx4hxX.webp",
        rating: 4.7,
        reviews: 198
    },
    {
        id: 8,
        name: "أحمر شفاه فاخر",
        price: 399,
        originalPrice: 599,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-lipstick-1-d3oHNAnJdje8GxFzsrBmVp.webp",
        rating: 4.6,
        reviews: 112
    },
    {
        id: 9,
        name: "ساعة رياضية ذكية",
        price: 1599,
        originalPrice: 1999,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-watch-1-CUPc5T6pmFma5ArwSfVTYv.webp",
        rating: 4.7,
        reviews: 203
    },
    {
        id: 10,
        name: "حقيبة يد جلدية فاخرة",
        price: 3499,
        originalPrice: 4999,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-handbag-1-TVn6oaPVW635ZtD7tLatGs.webp",
        rating: 4.9,
        reviews: 267
    },
    {
        id: 11,
        name: "نظارة شمسية فاخرة",
        price: 1999,
        originalPrice: 2799,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-sunglasses-1-PNZpPA8yu5Xs7z3iKwHnuq.webp",
        rating: 4.7,
        reviews: 189
    },
    {
        id: 12,
        name: "حذاء فاخر بالذهب",
        price: 2299,
        originalPrice: 3299,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-shoes-1-ZJT5E3y9LE26AZivLDeiS7.webp",
        rating: 4.8,
        reviews: 234
    },
    {
        id: 13,
        name: "حزام جلدي بمبالغ ذهبية",
        price: 899,
        originalPrice: 1299,
        image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663029742519/My3TRzLNVuXV6Q3AxYApCy/luxury-belt-1-WwVvsc4xhK7vD2xuHrv9zc.webp",
        rating: 4.6,
        reviews: 145
    }
];

let cartItems = [];

// دالة لحساب نسبة الخصم
function calculateDiscount(price, originalPrice) {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// دالة لعرض النجوم
function renderStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
            stars += '★';
        } else {
            stars += '☆';
        }
    }
    return stars;
}

// دالة لعرض المنتجات
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const discount = calculateDiscount(product.price, product.originalPrice);
        const stars = renderStars(product.rating);

        const productHTML = `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="original-price">${product.originalPrice} ر.س</div>
                    <div class="product-price">${product.price} ر.س</div>
                    <div class="discount">خصم ${discount}%</div>
                    <div class="rating">${stars} ${product.rating}</div>
                    <div class="reviews">${product.reviews} تقييم</div>
                    <button class="add-btn" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">أضف إلى السلة</button>
                </div>
            </div>
        `;

        productsGrid.innerHTML += productHTML;
    });
}

// دالة لإضافة المنتج إلى السلة
function addToCart(id, name, price) {
    cartItems.push({ id, name, price });
    document.getElementById('cartCount').textContent = cartItems.length;
    alert(`تم إضافة "${name}" إلى السلة\nالسعر: ${price} ر.س`);
}

// دالة لعرض السلة
function viewCart() {
    if (cartItems.length === 0) {
        alert('السلة فارغة');
    } else {
        let cartSummary = 'المنتجات في السلة:\n\n';
        let total = 0;
        cartItems.forEach((item, index) => {
            cartSummary += `${index + 1}. ${item.name} - ${item.price} ر.س\n`;
            total += item.price;
        });
        cartSummary += `\nالإجمالي: ${total} ر.س`;
        alert(cartSummary);
    }
}

// دالة فتح نافذة الرئيسية
function openHomeModal() {
    document.getElementById('homeModal').style.display = 'block';
}

// دالة إغلاق نافذة الرئيسية
function closeHomeModal() {
    document.getElementById('homeModal').style.display = 'none';
}

// إغلاق النافذة عند الضغط خارجها
window.onclick = function(event) {
    const modal = document.getElementById('homeModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// تهيئة الموقع عند التحميل
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
});

// 1. فتح وقفل السلة
const cartIcon = document.querySelector('.cart-icon');
const sidebar = document.getElementById('cart-sidebar');
const closeBtn = document.getElementById('close-cart');

cartIcon.onclick = () => sidebar.classList.add('open');
closeBtn.onclick = () => sidebar.classList.remove('open');

// 2. إضافة منتج للسلة (مثال مبسط)
function addToCart(name, price, image) {
    const container = document.getElementById('cart-items-container');
    const itemHTML = `
        <div class="cart-item">
            <img src="${image}" width="50">
            <p>${name} - ${price} ر.س</p>
            <button onclick="this.parentElement.remove()">حذف</button>
        </div>
    `;
    container.innerHTML += itemHTML;
   
}
function goToHome() {
    // يوجه المتصفح لرابط الصفحة الرئيسية
    window.location.href = "index.html"; 
}

