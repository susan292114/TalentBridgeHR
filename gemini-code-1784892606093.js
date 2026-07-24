const jobsData = [
    { title: "Business Domain Specialist", company: "TalentBridge AI Partner", location: "Lagos, NG (Hybrid)", salary: "$60,000 - $85,000" },
    { title: "Senior AI Solutions Architect", company: "Enterprise Cloud Partner", location: "London, UK (Remote)", salary: "£90,000 - £120,000" },
    { title: "Executive Business Analyst", company: "Global Corporate Group", location: "New York, USA", salary: "$110,000 - $140,000" }
];

function navigateTo(pageId) {
    document.querySelectorAll('.page-section').forEach(section => section.classList.add('hidden'));
    const activePage = document.getElementById(`page-${pageId}`);
    if (activePage) activePage.classList.remove('hidden');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${pageId}`) link.classList.add('active');
    });

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderJobs() {
    const container = document.getElementById('job-cards-grid');
    if (!container) return;
    container.innerHTML = jobsData.map(job => `
        <div class="bg-brand-slate/50 border border-brand-gold/20 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
                <h3 class="text-xl font-bold text-white">${job.title}</h3>
                <p class="text-sm text-slate-400">${job.company} • ${job.location} • <span class="text-brand-gold">${job.salary}</span></p>
            </div>
            <button onclick="alert('Application modal: Apply for ${job.title}')" class="px-6 py-2.5 rounded-xl border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black font-semibold text-xs uppercase tracking-wider">
                Quick Apply
            </button>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }
    renderJobs();
});