/*
 * main.js — reveal on scroll + housekeeping untuk site sales.
 * initReveal(prefix) generik; prefix class unik per site.
 *
 * Catatan reduced-motion: CSS sudah menonaktifkan transisi, tapi
 * IntersectionObserver tetap perlu dipasang supaya konten tidak
 * tertinggal opacity:0 kalau pengguna matikan animasi.
 */
function initReveal(prefix) {
    var nodes = document.querySelectorAll('.' + prefix + '-reveal');
    if (!nodes.length) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window)) {
        nodes.forEach(function (el) { el.classList.add(prefix + '-in'); });
        return;
    }

    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
            if (en.isIntersecting) {
                en.target.classList.add(prefix + '-in');
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    nodes.forEach(function (el) { io.observe(el); });
}

initReveal('sg');
