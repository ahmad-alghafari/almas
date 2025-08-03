document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        document.querySelector('.preloader').style.display = 'none';
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation
    
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            if (this.closest('.nested_list')) return;
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });

    // Hero Slider
    const heroSlides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    function showSlide(n) {
        heroSlides.forEach(slide => slide.classList.remove('active'));
        heroSlides[n].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showSlide(currentSlide);
    }
    
    // Auto slide change every 5 seconds
    setInterval(nextSlide, 5000);

    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = [
        {
            category: 'ads-printing',
            title: 'Grab Interest in an Existing Product Line  ',
            image: 'assets/portfolio/sedco-football2016_2x.jpg'
        },
        {
            category: 'ads-printing',
            title: 'Small Enough To Slip in a Pocket',
            image: 'assets/portfolio/hemophilia-alborg_2x.jpg'
        },
        {
            category: 'stationery',
            title: 'Embossed Business Cards',
            image: 'assets/portfolio/mercedes_folder_2x.jpg'
        },
        {
            category: 'stationery',
            title: 'Use Your Letterhead To Create a Comfortable Image',
            image: 'assets/portfolio/entotox_2x.jpg'
        },
        {
            category: 'product-packages',
            title: 'Self Lock Bottom Boxes',
            image: 'assets/portfolio/boom.jpg'
        },
        {
            category: 'product-packages',
            title: 'Tray and Sleeve Boxes ',
            image: 'assets/portfolio/alTekkeya.jpg'
        },
        {
            category: 'campaign',
            title: 'Custom Printing Paper Bags',
            image: 'assets/portfolio/goody-bag-mockup_2x.jpg'
        },
         {
            category: 'campaign',
            title: 'Promote Your Sales By Using Danglers',
            image: 'assets/portfolio/memories-dangler_2x.jpg'
        },
         {
            category: 'campaign',
            title: 'Build a Calendar Around Your Customer Base',
            image: 'assets/portfolio/juffali-calendar2016_2x.jpg'
        },
        
    ];

    // Render portfolio items
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    function renderPortfolioItems(filter = 'all') {
        portfolioGrid.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === filter);
        
        filteredItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            portfolioItem.setAttribute('data-category', item.category);
            portfolioItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="portfolio-img">
                <div class="portfolio-overlay">
                    <span class="portfolio-category">${item.category.replace('-', ' ')}</span>
                    <h4 class="portfolio-title">${item.title}</h4>
                    <a href="#" class="portfolio-link">View Project <i class="fas fa-arrow-right"></i></a>
                </div>
            `;
            portfolioGrid.appendChild(portfolioItem);
        });
    }
    
    // Initial render
    renderPortfolioItems();
    
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Render filtered items
            renderPortfolioItems(filterValue);
        });
    });


const materialsSlider = new Swiper('.materials-carousel', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20, // Matches Owl's margin
    navigation: {
        nextEl: '.material-next',
        prevEl: '.material-prev',
    },
    pagination: {
        el: '.material-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});




    const testimonialSlider = new Swiper('.testimonial-slider', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30, // Matches Owl's margin
    pagination: {
        el: '.testimonial-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    },
    autoplay: {
    delay: 3000,
    disableOnInteraction: false,
},
});

    // Virtual Proofing Controls
    const proofingControls = document.querySelectorAll('.proofing-control-btn');
    proofingControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            proofingControls.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });


    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
});


// 
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarLinks = document.getElementById('navbar-links');
    const dropdown = document.querySelector('.nested_list');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropbtn = document.querySelector('.dropbtn');

   
    mobileMenu.addEventListener('click', function() {
        navbarLinks.classList.toggle('show');
        mobileMenu.classList.toggle('show'); 
    });

    
    dropbtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        dropdownMenu.classList.toggle('show');
    });

 
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target) && !mobileMenu.contains(e.target)) {
            dropdownMenu.classList.remove('show');
        }
    });
});