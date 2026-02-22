    // ─── Scroll reveal ───
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.relevance-card, .tip-item, .chord-box, .gear-card').forEach(el => {
        observer.observe(el);
    });

    // ─── Navbar shrink on scroll ───
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 80) {
            nav.style.padding = '0.8rem 3rem';
        } else {
            nav.style.padding = '1.2rem 3rem';
        }
    });

    // ─── Smooth scroll for nav links ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ─── Chord box interaction ───
    document.querySelectorAll('.chord-box').forEach(box => {
        box.addEventListener('click', () => {
            box.style.borderColor = 'var(--accent-warm)';
            box.style.boxShadow = '0 0 30px rgba(232, 164, 74, 0.25)';
            setTimeout(() => {
                box.style.borderColor = '';
                box.style.boxShadow = '';
            }, 1500);
        });
    });

    // ─── Parallax for hero strings ───
    window.addEventListener('scroll', () => {
        const strings = document.querySelector('.strings');
        if (strings) {
            strings.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.15}px)`;
        }
    });
