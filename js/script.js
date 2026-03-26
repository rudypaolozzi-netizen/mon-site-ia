/**
 * Main application script for the AI Tools Portal.
 * Handles rendering the tool cards from data.js and managing UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('tools-grid');
    const tools = window.toolsData || [];

    /**
     * Renders all tool cards into the grid.
     */
    function renderTools() {
        grid.innerHTML = tools.map((tool, index) => {
            const isConstruction = tool.isUnderConstruction || false;
            const isBonus = tool.isBonus || false;
            let badgeHtml = '';
            if (isConstruction) {
                badgeHtml = `<div class="card-badge construction">Under Construction</div>`;
            } else if (isBonus) {
                badgeHtml = `<div class="card-badge bonus">B O N U S</div>`;
            } else if (index === 1) {
                badgeHtml = `<div class="card-badge">Populaire</div>`;
            }

            const buttonContent = tool.needsChatGPTLogin
            ? `<span class="btn-prefix">Connectez-vous d'abord à votre ChatGPT,</span><span class="btn-main">Utiliser l'outil <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span></span>`
            : `<span class="btn-main">Utiliser l'outil <span class="material-symbols-outlined" style="font-size: 18px;">arrow_forward</span></span>`;

            return `
                <article class="card" id="card-${tool.id}">
                    ${badgeHtml}
                    <div class="card-image-wrap">
                        <img src="${tool.image}" alt="${tool.title}" class="card-image" onerror="this.src='https://via.placeholder.com/400x250?text=${encodeURIComponent(tool.title)}'">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${tool.title}</h3>
                        <span class="card-subtitle">${tool.subtitle || ''}</span>
                        <p class="card-short">${tool.shortDescription}</p>
                        
                        <a href="javascript:void(0)" class="card-toggle" data-id="${tool.id}">
                            Description longue <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle;">expand_more</span>
                        </a>
                        
                        <div class="card-long" id="long-${tool.id}">
                            ${tool.longDescription}
                        </div>
                        
                        <div class="card-actions">
                            <a href="${tool.url}" target="_blank" class="btn-primary ${tool.needsChatGPTLogin ? 'btn-chatgpt' : ''}" rel="noopener noreferrer">
                                ${buttonContent}
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        attachEventListeners();
    }

    /**
     * Attaches event listeners to the "Description longue" toggles.
     */
    function attachEventListeners() {
        const toggles = document.querySelectorAll('.card-toggle');
        
        toggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const id = e.currentTarget.getAttribute('data-id');
                const longDesc = document.getElementById(`long-${id}`);
                const icon = e.currentTarget.querySelector('.material-symbols-outlined');
                
                // Toggle active class
                const isActive = longDesc.classList.contains('active');
                
                // Close any other open descriptions (accordion behavior)
                // document.querySelectorAll('.card-long.active').forEach(el => el.classList.remove('active'));
                
                if (isActive) {
                    longDesc.classList.remove('active');
                    icon.textContent = 'expand_more';
                    e.currentTarget.innerHTML = `Description longue <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle;">expand_more</span>`;
                } else {
                    longDesc.classList.add('active');
                    icon.textContent = 'expand_less';
                    e.currentTarget.innerHTML = `Réduire <span class="material-symbols-outlined" style="font-size: 14px; vertical-align: middle;">expand_less</span>`;
                }
            });
        });
    }

    // Initial render
    renderTools();
});
