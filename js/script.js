document.addEventListener('DOMContentLoaded', function() {
         // Preloader
    window.addEventListener('load', function() {
        document.querySelector('.preloader').style.display = 'none';
    });

    // Header Scroll Effect
   const header = document.querySelector('.header');
const backtotop = document.querySelector('.back-to-top');
const tabtocontact = document.querySelector('.tab-to-contact');

// A function to check if the user is on a mobile device
function isMobile() {
  return window.innerWidth <= 768; // You can adjust this value
}

// A function to handle the scroll event
function handleScroll() {
  let scrollThreshold = 300; // Default threshold for desktop

  // If on a mobile device, set a lower threshold
  if (isMobile()) {
    scrollThreshold = 100; 
  }

  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
    backtotop.classList.add('active');
    tabtocontact.classList.add('active');
  } else {
    header.classList.remove('scrolled');
    backtotop.classList.remove('active');
    tabtocontact.classList.remove('active');
  }
}

// Add the scroll event listener with the new function
window.addEventListener('scroll', handleScroll);

// Add the resize event listener to update the threshold on window resize
window.addEventListener('resize', handleScroll);

// Back to top button functionality remains the same
backtotop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

    // Mobile Navigation
    
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbarNav');
    
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
        duration: 600,
        easing: 'ease-in-out',
        once: true
    });
});


// handling menu 
    
    const mobileMenu = document.getElementById('mobile-menu'); 
    const navbarLinks = document.getElementById('navbar-links');

    if (mobileMenu && navbarLinks) { 
        mobileMenu.addEventListener('click', function() {
            navbarLinks.classList.toggle('show');
        })
    }
    const dropdown = document.querySelector('.nested_list');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropbtn = document.querySelector('.dropbtn');

    if (dropdown && dropdownMenu && dropbtn) { 
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', function(e) {
           
            if (!dropdown.contains(e.target) && (!mobileMenu || !mobileMenu.contains(e.target))) {
                dropdownMenu.classList.remove('show');
            }
        });
    }

    // Create fullscreen overlay elements
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    
    const imageContainer = document.createElement('div');
    imageContainer.className = 'fullscreen-image-container';
    
    const fullscreenImg = document.createElement('img');
    fullscreenImg.className = 'fullscreen-image';
    
    const closeBtn = document.createElement('div');
    closeBtn.className = 'close-fullscreen';
    closeBtn.innerHTML = '&times;';

    const header = document.querySelector('.header');
    
    // Build the overlay structure
    imageContainer.appendChild(fullscreenImg);
    overlay.appendChild(imageContainer);
    overlay.appendChild(closeBtn);
    document.body.appendChild(overlay);
    
    // Add click events to all "Read More" links
    const readMoreLinks = document.querySelectorAll('.info a');
    
    readMoreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the image from the parent box
            const box = this.closest('.box');
            const imgSrc = box.querySelector('img').src;
            
            // Set the image source and show overlay
            fullscreenImg.src = imgSrc;
            overlay.classList.add('active');
            
            // Prevent scrolling when overlay is active
           header.classList.add('block');
        });
    });
    
    // Close overlay when clicking close button or overlay background
    closeBtn.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            closeOverlay();
            header.classList.remove('block');
        }
    });
    
    // Close overlay when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeOverlay();
            header.classList.remove('block');
        }
    });
    
    function closeOverlay() {
        overlay.classList.remove('active');
        header.classList.remove('block');
        document.body.style.overflow = '';
    }


// about us page testimoial
    // Testimonial slider initialization
    new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    });



