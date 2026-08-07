const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('sg-in'); io.unobserve(en.target); }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.sg-reveal').forEach(function (el) { io.observe(el); });
