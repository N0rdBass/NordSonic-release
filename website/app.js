// nordbassaudio.com: small helpers shared by every page. Each one does nothing
// when its element isn't on the page.
document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("site-nav");
    if (toggle && nav) {
        const set = (open) => {
            nav.classList.toggle("open", open);
            toggle.setAttribute("aria-expanded", String(open));
            toggle.textContent = open ? "Close" : "Menu";
        };
        toggle.addEventListener("click", () => set(!nav.classList.contains("open")));
        nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
        window.addEventListener("resize", () => { if (window.innerWidth > 960) set(false); });
    }

    // Copy the Linux start command
    const copyBtn = document.getElementById("btn-copy-cmd");
    if (copyBtn && navigator.clipboard) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText("chmod +x Solvex*.AppImage && ./Solvex*.AppImage").then(() => {
                copyBtn.textContent = "Copied";
                setTimeout(() => { copyBtn.textContent = "Copy"; }, 2000);
            });
        });
    }
});
