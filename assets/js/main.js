/*
 * main.js — efek reveal scroll (singgih).
 * initReveal(prefix) generik; prefix class unik per site.
 */
function initReveal(prefix) {
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) { en.target.classList.add(prefix + '-in'); io.unobserve(en.target); }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.' + prefix + '-reveal').forEach(function (el) { io.observe(el); });
}

initReveal('sg');
