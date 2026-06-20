document.addEventListener("DOMContentLoaded", () => {
    //  (fade-in)
    document.body.classList.add("loaded");

    // Efek transisi antar halaman
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {

            if(this.hostname === window.location.hostname && this.getAttribute('target') !== '_blank') {
                e.preventDefault(); // Tahan klik sejenak
                let targetUrl = this.href;

            (fade-out)
                document.body.classList.remove("loaded");

                // Tunggu animasi selesai (500ms) lalu pindah halaman
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 500);
            }
        });
    });
});