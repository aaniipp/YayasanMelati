// Enhanced Slideshow Functionality
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');
    const indicators = document.querySelectorAll('.slide-indicator');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const slideCounter = document.getElementById('slide-counter');
    let currentSlide = 0;
    let slideInterval;
    let isTransitioning = false;
    let isAutoPlaying = true;

    function updateSlideCounter() {
        if (slideCounter) {
            slideCounter.textContent = currentSlide + 1;
        }
    }

    function updatePlayPauseButton() {
        if (playPauseBtn) {
            const icon = playPauseBtn.querySelector('svg path');
            if (isAutoPlaying) {
                icon.setAttribute('d', 'M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z');
                playPauseBtn.setAttribute('title', 'Pause');
            } else {
                icon.setAttribute('d', 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z');
                playPauseBtn.setAttribute('title', 'Play');
            }
        }
    }

    function showSlide(index, direction = 'next') {
        if (isTransitioning || index === currentSlide) return;
        
        isTransitioning = true;
        
        // Get current and next slide elements
        const currentSlideEl = slides[currentSlide];
        const nextSlideEl = slides[index];
        
        // Update indicators immediately
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.remove('bg-gray-300', 'w-3');
                indicator.classList.add('bg-primary', 'w-4');
            } else {
                indicator.classList.remove('bg-primary', 'w-4');
                indicator.classList.add('bg-gray-300', 'w-3');
            }
        });

        // Set up initial positions for transition
        // Current slide is already active, next slide is hidden
        nextSlideEl.classList.remove('active', 'prev', 'next');
        
        // Adjust transition distance for mobile
        const isMobile = window.innerWidth <= 768;
        const transitionDistance = isMobile ? '100%' : '100%';
        const scaleEffect = isMobile ? '0.98' : '0.95';
        
        // Position the next slide based on direction
        if (direction === 'next') {
            nextSlideEl.style.transform = `translateX(${transitionDistance}) scale(${scaleEffect})`;
            nextSlideEl.style.opacity = '0';
        } else {
            nextSlideEl.style.transform = `translateX(-${transitionDistance}) scale(${scaleEffect})`;
            nextSlideEl.style.opacity = '0';
        }
        
        // Make next slide visible but positioned
        nextSlideEl.style.visibility = 'visible';
        nextSlideEl.style.zIndex = '3';
        currentSlideEl.style.zIndex = '2';

        // Start the transition
        requestAnimationFrame(() => {
            // Move current slide out
            if (direction === 'next') {
                currentSlideEl.style.transform = `translateX(-${transitionDistance}) scale(${scaleEffect})`;
            } else {
                currentSlideEl.style.transform = `translateX(${transitionDistance}) scale(${scaleEffect})`;
            }
            currentSlideEl.style.opacity = '0';
            
            // Move next slide in
            nextSlideEl.style.transform = 'translateX(0) scale(1)';
            nextSlideEl.style.opacity = '1';
            
            // Reset content animations for next slide
            const contentLeft = nextSlideEl.querySelector('.slide-content-left');
            const contentRight = nextSlideEl.querySelector('.slide-content-right');
            
            if (contentLeft) {
                contentLeft.style.animation = 'none';
                contentLeft.offsetHeight; // Force reflow
                contentLeft.style.animation = '';
            }
            
            if (contentRight) {
                contentRight.style.animation = 'none';
                contentRight.offsetHeight; // Force reflow
                contentRight.style.animation = '';
            }
        });
        
        // Update current slide and clean up after transition
        currentSlide = index;
        updateSlideCounter();
        
        // Adjust transition duration for mobile
        const transitionDuration = isMobile ? 600 : 800;
        
        setTimeout(() => {
            // Reset previous slide
            currentSlideEl.classList.remove('active');
            currentSlideEl.style.visibility = 'hidden';
            currentSlideEl.style.zIndex = '1';
            currentSlideEl.style.transform = '';
            currentSlideEl.style.opacity = '';
            
            // Set new slide as active
            nextSlideEl.classList.add('active');
            nextSlideEl.style.zIndex = '2';
            
            isTransitioning = false;
        }, transitionDuration);
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slides.length;
        showSlide(nextIndex, 'next');
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevIndex, 'prev');
    }

    function startSlideshow() {
        stopSlideshow();
        if (isAutoPlaying) {
            slideInterval = setInterval(nextSlide, 5000); // Reduced to 5 seconds for better engagement
        }
    }

    function stopSlideshow() {
        if (slideInterval) {
            clearInterval(slideInterval);
            slideInterval = null;
        }
    }

    function toggleAutoPlay() {
        isAutoPlaying = !isAutoPlaying;
        updatePlayPauseButton();
        if (isAutoPlaying) {
            startSlideshow();
        } else {
            stopSlideshow();
        }
    }

    // Play/Pause button functionality
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', toggleAutoPlay);
    }

    // Enhanced event listeners with better visual feedback
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            nextSlide();
            if (isAutoPlaying) startSlideshow();
        });

        // Visual feedback
        nextBtn.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                nextBtn.style.transform = 'translateY(-50%) scale(1.1)';
            }
        });

        nextBtn.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                nextBtn.style.transform = 'translateY(-50%) scale(1)';
            }
        });

        // Touch feedback for mobile
        nextBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            nextBtn.style.transform = 'translateY(-50%) scale(0.95)';
        });

        nextBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            nextBtn.style.transform = 'translateY(-50%) scale(1)';
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            prevSlide();
            if (isAutoPlaying) startSlideshow();
        });

        prevBtn.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                prevBtn.style.transform = 'translateY(-50%) scale(1.1)';
            }
        });

        prevBtn.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                prevBtn.style.transform = 'translateY(-50%) scale(1)';
            }
        });

        // Touch feedback for mobile
        prevBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            prevBtn.style.transform = 'translateY(-50%) scale(0.95)';
        });

        prevBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            prevBtn.style.transform = 'translateY(-50%) scale(1)';
        });
    }

    // Enhanced indicator interactions
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', (e) => {
            e.preventDefault();
            const direction = index > currentSlide ? 'next' : 'prev';
            showSlide(index, direction);
            if (isAutoPlaying) startSlideshow();
        });

        // Hover effects for desktop
        indicator.addEventListener('mouseenter', () => {
            if (!indicator.classList.contains('bg-primary') && window.innerWidth > 768) {
                indicator.style.transform = 'scale(1.3)';
                indicator.style.boxShadow = '0 4px 12px rgba(30, 64, 175, 0.3)';
            }
        });

        indicator.addEventListener('mouseleave', () => {
            if (!indicator.classList.contains('bg-primary')) {
                indicator.style.transform = 'scale(1)';
                indicator.style.boxShadow = 'none';
            }
        });

        // Touch feedback for mobile
        indicator.addEventListener('touchstart', (e) => {
            e.preventDefault();
            indicator.style.transform = 'scale(0.9)';
        });

        indicator.addEventListener('touchend', (e) => {
            e.preventDefault();
            indicator.style.transform = 'scale(1)';
        });
    });

    // Enhanced keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            if (isAutoPlaying) startSlideshow();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            if (isAutoPlaying) startSlideshow();
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleAutoPlay();
        }
    });

    // Enhanced touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    const slideshowContainer = document.getElementById('slideshow-container');
    if (slideshowContainer) {
        slideshowContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
            stopSlideshow(); // Pause on touch start
        }, { passive: true });

        slideshowContainer.addEventListener('touchmove', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
        }, { passive: true });

        slideshowContainer.addEventListener('touchend', (e) => {
            handleSwipe();
        }, { passive: true });

        function handleSwipe() {
            const isMobile = window.innerWidth <= 768;
            const swipeThreshold = isMobile ? 20 : 25; // Even lower threshold for mobile
            const diffX = touchStartX - touchEndX;
            const diffY = touchStartY - touchEndY;

            // Only handle horizontal swipes with better detection
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
                if (diffX > 0) {
                    nextSlide(); // Swipe left, go to next slide
                } else {
                    prevSlide(); // Swipe right, go to previous slide
                }
                if (isAutoPlaying) startSlideshow();
            }
        }

        // Enhanced pause/resume behavior
        slideshowContainer.addEventListener('mouseenter', () => {
            if (isAutoPlaying) stopSlideshow();
        });

        slideshowContainer.addEventListener('mouseleave', () => {
            if (isAutoPlaying) startSlideshow();
        });
    }

    // Initialize slideshow
    if (slides.length > 0) {
        showSlide(0);
        updateSlideCounter();
        updatePlayPauseButton();
        if (isAutoPlaying) {
            startSlideshow();
        }
    }

    // Add parallax effect to slide images
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const slideObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1.05)';
                }
            } else {
                const img = entry.target.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1)';
                }
            }
        });
    }, observerOptions);

    slides.forEach(slide => slideObserver.observe(slide));
});

// Mobile Navigation Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking on links
const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
mobileMenuLinks?.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80; // Account for fixed header
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('shadow-lg');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// Enhanced Active Navigation Link Highlighting with debouncing
function updateActiveNavigation() {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const headerOffset = window.innerWidth < 768 ? 100 : 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - headerOffset)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary', 'font-semibold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-primary', 'font-semibold');
        }
    });
}

// Debounced scroll handler for better performance
let scrollTimer;
window.addEventListener('scroll', () => {
    if (scrollTimer) {
        cancelAnimationFrame(scrollTimer);
    }
    scrollTimer = requestAnimationFrame(updateActiveNavigation);
}, { passive: true });

// Copy Account Number Functionality
function copyAccountNumber(accountNumber) {
    navigator.clipboard.writeText(accountNumber).then(() => {
        showNotification('Nomor rekening disalin!', 'success');
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showNotification('Gagal menyalin nomor rekening', 'error');
    });
}

// Enhanced Notification System
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transform transition-all duration-300 translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-green-500' :
                   type === 'error' ? 'bg-red-500' :
                   type === 'info' ? 'bg-blue-500' : 'bg-gray-500';
    
    notification.classList.add(bgColor, 'text-white');
    notification.innerHTML = `
        <div class="flex items-center">
            <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                ${type === 'success' ? '<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>' :
                  type === 'error' ? '<path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>' :
                  '<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'}
            </svg>
            <span class="font-medium">${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
        notification.classList.add('translate-x-0');
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('translate-x-0');
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Fade In Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.activity-card, .account-card, .contact-item, .org-card');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
const optimizedScroll = debounce(() => {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Add enhanced CSS animations for improved transitions
const style = document.createElement('style');
style.textContent = `
    .slide {
        display: block;
        opacity: 0;
        visibility: hidden;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        transform: translateX(100%) scale(0.95);
        z-index: 1;
    }
    
    .slide.active {
        opacity: 1;
        visibility: visible;
        transform: translateX(0) scale(1);
        z-index: 2;
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Ensure inline styles don't break transitions */
    .slide[style*="transform"] {
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    
    /* Mobile-specific transitions */
    @media (max-width: 768px) {
        .slide {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .slide.active {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .slide[style*="transform"] {
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
    }
    
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.text-primary {
        color: #1e40af !important;
        font-weight: 600;
    }
    
    /* Enhanced mobile touch feedback */
    @media (hover: none) and (pointer: coarse) {
        .slideshow-nav-btn:active {
            transform: translateY(-50%) scale(0.95) !important;
        }
        
        .slide-indicator:active {
            transform: scale(0.9) !important;
        }
    }
    
    /* Prevent flickering during transitions */
    .slide {
        backface-visibility: hidden;
        -webkit-font-smoothing: antialiased;
    }
    
    /* Smooth content animations */
    .slide-content-left,
    .slide-content-right {
        will-change: transform, opacity;
    }
    
    /* Better mobile performance */
    @media (max-width: 768px) {
        .slide-content-left,
        .slide-content-right {
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
        }
    }
`;
document.head.appendChild(style);