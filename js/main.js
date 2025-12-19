// Hero Background Slider
document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.getElementById('hero-slider');
    if (!sliderContainer) return;

    const slides = [];
    for (let i = 1; i <= 12; i++) {
        slides.push(`images/slides/magic-coffee-slide-${i}.png`);
    }

    slides.forEach((src, index) => {
        const div = document.createElement('div');
        div.className = 'hero-slide';
        div.style.backgroundImage = `url('${src}')`;
        div.style.animationDelay = `${index * 10}s`;
        if (index === 0) div.classList.add('active');
        sliderContainer.appendChild(div);
    });

    let current = 0;
    setInterval(() => {
        const allSlides = sliderContainer.querySelectorAll('.hero-slide');
        allSlides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        allSlides[current].classList.add('active');
    }, 10000);
});

// Render Menu dari menuData.js
let allMenuData = [];

function renderMenuItems(filteredData) {
    const container = document.getElementById('menu-container');
    if (!container) return;

    container.innerHTML = '';
    if (filteredData.length === 0) {
        container.innerHTML = `<div class="col-span-2 text-center text-xl text-gray-400 py-20">Tidak ada menu dalam kategori ini.</div>`;
        return;
    }

    filteredData.forEach(data => {
        let itemsHTML = '';
        data.items.forEach(item => {
            const badge = item.badge
                ? `<span class="ml-3 px-3 py-1 bg-yellow-600 text-black text-xs font-bold rounded-full">${item.badge}</span>`
                : '';
            const imageDesktopHTML = item.image
                ? `<img src="${item.image}" alt="${item.name}" class="w-32 h-32 object-cover rounded-xl shadow-xl flex-shrink-0">`
                : `<div class="w-32 h-32 bg-gray-700 rounded-xl flex-shrink-0"></div>`;
            const imageMobileHTML = item.image
                ? `<img src="${item.image}" alt="${item.name}" class="w-full h-64 object-cover rounded-xl shadow-xl">`
                : `<div class="w-full h-64 bg-gray-700 rounded-xl"></div>`;
            let priceHTML = item.original_price
                ? `<del class="text-gray-500 mr-3">Rp ${item.original_price}</del><strong class="text-2xl">Rp ${item.price}</strong>`
                : `<strong class="text-2xl">Rp ${item.price}</strong>`;

            itemsHTML += `
                <div class="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div class="block md:hidden mb-6">${imageMobileHTML}</div>
                    <div class="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                        <div class="hidden md:block">${imageDesktopHTML}</div>
                        <div class="flex-1 text-center md:text-left">
                            <h4 class="text-4xl md:text-2xl lg:text-3xl font-extrabold tracking-tight flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-2 text-green-500">
                                ${item.name} ${badge}
                            </h4>
                            <p class="text-gray-400 mt-4 leading-relaxed text-base md:text-lg">${item.description || ''}</p>
                            <div class="mt-6 text-gray-400">${priceHTML}</div>
                        </div>
                    </div>
                </div>
            `;
        });

        const column = `
            <div class="w-full max-w-4xl mx-auto">
                <div class="bg-gray-900/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-800">
                    <div class="text-center mb-12">
                        <p class="text-yellow-500 uppercase tracking-wider text-sm font-medium">${data.subtitle}</p>
                        <h3 class="text-3xl md:text-4xl font-bold mt-3">${data.category}</h3>
                    </div>
                    <div class="grid gap-8">
                        ${itemsHTML}
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', column);
    });
}

function loadAllMenus() {
    if (typeof menuData === 'undefined') {
        document.getElementById('menu-container').innerHTML = `<div class="col-span-2 text-center text-xl">Gagal memuat menu.</div>`;
        return;
    }

    allMenuData = menuData;

    const categoryButtonsContainer = document.getElementById('category-buttons');
    if (!categoryButtonsContainer) return;

    categoryButtonsContainer.innerHTML = '';
    const categories = [...new Set(menuData.map(item => item.category))];

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.textContent = cat;
        btn.dataset.category = cat;
        btn.className = 'filter-btn px-5 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full font-semibold transition-all whitespace-nowrap bg-gray-700 hover:bg-green-600 text-white';
        categoryButtonsContainer.appendChild(btn);
    });

    // Event filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-green-600'));
            btn.classList.add('bg-green-600');
            const category = btn.dataset.category;
            const filtered = allMenuData.filter(item => item.category === category);
            renderMenuItems(filtered);
        });
    });

    // Default: tampilkan kategori pertama atau "Signature Drink"
    const defaultCategory = categories.includes('Signature Drinks') ? 'Signature Drinks' : categories[0];
    const defaultData = allMenuData.filter(item => item.category === defaultCategory);
    renderMenuItems(defaultData);

    const defaultBtn = document.querySelector(`[data-category="${defaultCategory}"]`);
    if (defaultBtn) defaultBtn.classList.add('bg-green-600');
}

// Jalankan saat halaman loaded
document.addEventListener('DOMContentLoaded', loadAllMenus);