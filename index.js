const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
  const backToTopButton = document.querySelector(".back-to-top");
  let isBackToTopRendered = false;
  
  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered
      ? "scale(1)"
      : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll reveal animation
const revealElements = () => {
  const sections = document.querySelectorAll('section');
  const workBoxes = document.querySelectorAll('.work__box');
  
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  // Reveal sections
  sections.forEach(section => {
    if (isInViewport(section) && !section.classList.contains('animated')) {
      section.style.opacity = '1';
      section.classList.add('animated');
    }
  });
  
  // Reveal work boxes with staggered delay
  workBoxes.forEach((box, index) => {
    if (isInViewport(box) && !box.classList.contains('animated')) {
      setTimeout(() => {
        box.style.opacity = '1';
        box.classList.add('animated');
      }, index * 150); // Staggered animation
    }
  });
};

// Run on load and scroll
window.addEventListener('load', revealElements);
window.addEventListener('scroll', revealElements);

// Add hover effect to work boxes
const workBoxes = document.querySelectorAll('.work__box');
workBoxes.forEach(box => {
  box.addEventListener('mouseenter', () => {
    box.style.transform = 'translateY(-10px)';
    box.style.boxShadow = 'var(--box-shadow-hover)';
  });
  
  box.addEventListener('mouseleave', () => {
    box.style.transform = 'translateY(0)';
    box.style.boxShadow = 'var(--box-shadow)';
  });
});

// Animate header elements
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header__text');
  if (header) {
    header.style.opacity = '1';
  }
  
  // Trigger animations for nav items
  const navItems = document.querySelectorAll('.nav__item');
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = '1';
    }, 100 * (index + 1));
  });
});
  