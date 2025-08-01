// Drug Database - Comprehensive collection of drugs and medicines
const drugDatabase = {
    // Aspirin
    "ASP001": {
        id: "ASP001",
        name: "Aspirin",
        genericName: "Acetylsalicylic Acid",
        category: "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
        description: "Aspirin is a medication used to reduce pain, fever, or inflammation.",
        composition: "Acetylsalicylic acid (C9H8O4)",
        mechanism: "Irreversibly inhibits cyclooxygenase-1 and 2 (COX-1 and COX-2) enzymes",
        uses: [
            "Pain relief (analgesic)",
            "Fever reduction (antipyretic)",
            "Anti-inflammatory",
            "Cardiovascular protection",
            "Prevention of blood clots"
        ],
        dosage: "Adults: 325-650mg every 4 hours as needed. Maximum 4g per day.",
        sideEffects: [
            "Stomach irritation",
            "Increased bleeding risk",
            "Tinnitus (ringing in ears)",
            "Allergic reactions",
            "Reye's syndrome (in children)"
        ],
        contraindications: [
            "Active peptic ulcer disease",
            "Bleeding disorders",
            "Severe kidney disease",
            "Children with viral infections"
        ],
        medicines: [
            { name: "Bayer Aspirin", type: "Tablet", manufacturer: "Bayer" },
            { name: "Bufferin", type: "Buffered Tablet", manufacturer: "Novartis" },
            { name: "Ecotrin", type: "Enteric Coated Tablet", manufacturer: "GlaxoSmithKline" },
            { name: "St. Joseph Aspirin", type: "Low-dose Tablet", manufacturer: "McNeil" }
        ]
    },

    // Ibuprofen
    "IBU123": {
        id: "IBU123",
        name: "Ibuprofen",
        genericName: "Ibuprofen",
        category: "NSAID (Non-Steroidal Anti-Inflammatory Drug)",
        description: "Ibuprofen is a medication used for treating pain, fever, and inflammation.",
        composition: "2-(4-isobutylphenyl)propionic acid (C13H18O2)",
        mechanism: "Reversibly inhibits cyclooxygenase (COX) enzymes, reducing prostaglandin synthesis",
        uses: [
            "Pain relief",
            "Fever reduction",
            "Anti-inflammatory",
            "Menstrual cramps",
            "Headache relief"
        ],
        dosage: "Adults: 400-800mg every 6-8 hours. Maximum 3200mg per day.",
        sideEffects: [
            "Stomach upset",
            "Heartburn",
            "Dizziness",
            "Increased blood pressure",
            "Kidney problems (with long-term use)"
        ],
        contraindications: [
            "History of asthma attacks with aspirin",
            "Active peptic ulcer",
            "Severe heart failure",
            "Third trimester of pregnancy"
        ],
        medicines: [
            { name: "Advil", type: "Tablet/Capsule", manufacturer: "Pfizer" },
            { name: "Motrin", type: "Tablet/Suspension", manufacturer: "Johnson & Johnson" },
            { name: "Nuprin", type: "Tablet", manufacturer: "Reckitt Benckiser" },
            { name: "Brufen", type: "Tablet", manufacturer: "Abbott" }
        ]
    },

    // Paracetamol/Acetaminophen
    "PAR456": {
        id: "PAR456",
        name: "Paracetamol",
        genericName: "Acetaminophen",
        category: "Analgesic/Antipyretic",
        description: "Paracetamol is a medication used to treat pain and fever.",
        composition: "N-acetyl-para-aminophenol (C8H9NO2)",
        mechanism: "Inhibits prostaglandin synthesis in the central nervous system",
        uses: [
            "Pain relief",
            "Fever reduction",
            "Safe for children",
            "Headache relief",
            "Post-operative pain"
        ],
        dosage: "Adults: 500-1000mg every 4-6 hours. Maximum 4000mg per day.",
        sideEffects: [
            "Rare at therapeutic doses",
            "Liver damage (with overdose)",
            "Allergic reactions (rare)",
            "Skin rash"
        ],
        contraindications: [
            "Severe liver disease",
            "Alcohol dependence",
            "Known hypersensitivity"
        ],
        medicines: [
            { name: "Tylenol", type: "Tablet/Liquid", manufacturer: "Johnson & Johnson" },
            { name: "Panadol", type: "Tablet", manufacturer: "GlaxoSmithKline" },
            { name: "Calpol", type: "Suspension", manufacturer: "Johnson & Johnson" },
            { name: "Acetaminophen Generic", type: "Various", manufacturer: "Multiple" }
        ]
    },

    // Amoxicillin
    "AMX789": {
        id: "AMX789",
        name: "Amoxicillin",
        genericName: "Amoxicillin",
        category: "Antibiotic (Penicillin)",
        description: "Amoxicillin is a penicillin antibiotic used to treat bacterial infections.",
        composition: "(2S,5R,6R)-6-[[(2R)-2-amino-2-(4-hydroxyphenyl)acetyl]amino]-3,3-dimethyl-7-oxo-4-thia-1-azabicyclo[3.2.0]heptane-2-carboxylic acid",
        mechanism: "Inhibits bacterial cell wall synthesis by binding to penicillin-binding proteins",
        uses: [
            "Respiratory tract infections",
            "Urinary tract infections",
            "Skin infections",
            "Ear infections",
            "Dental infections"
        ],
        dosage: "Adults: 250-500mg every 8 hours or 500-875mg every 12 hours",
        sideEffects: [
            "Diarrhea",
            "Nausea",
            "Vomiting",
            "Allergic reactions",
            "Clostridium difficile colitis"
        ],
        contraindications: [
            "Penicillin allergy",
            "History of severe allergic reactions",
            "Mononucleosis"
        ],
        medicines: [
            { name: "Amoxil", type: "Capsule/Suspension", manufacturer: "GlaxoSmithKline" },
            { name: "Trimox", type: "Capsule", manufacturer: "Apothecon" },
            { name: "Moxatag", type: "Extended-Release Tablet", manufacturer: "MiddleBrook" },
            { name: "Amoxicillin Generic", type: "Various", manufacturer: "Multiple" }
        ]
    },

    // Metformin
    "MET321": {
        id: "MET321",
        name: "Metformin",
        genericName: "Metformin Hydrochloride",
        category: "Antidiabetic (Biguanide)",
        description: "Metformin is a medication used to treat type 2 diabetes.",
        composition: "1,1-Dimethylbiguanide hydrochloride (C4H11N5·HCl)",
        mechanism: "Decreases hepatic glucose production and increases insulin sensitivity",
        uses: [
            "Type 2 diabetes mellitus",
            "Polycystic ovary syndrome (PCOS)",
            "Pre-diabetes",
            "Weight management in diabetes"
        ],
        dosage: "Adults: Start with 500mg twice daily, may increase to 2000mg daily",
        sideEffects: [
            "Gastrointestinal upset",
            "Diarrhea",
            "Metallic taste",
            "Vitamin B12 deficiency",
            "Lactic acidosis (rare)"
        ],
        contraindications: [
            "Severe kidney disease",
            "Severe liver disease",
            "Heart failure",
            "Alcoholism"
        ],
        medicines: [
            { name: "Glucophage", type: "Tablet", manufacturer: "Bristol-Myers Squibb" },
            { name: "Glucophage XR", type: "Extended-Release", manufacturer: "Bristol-Myers Squibb" },
            { name: "Fortamet", type: "Extended-Release", manufacturer: "Shionogi" },
            { name: "Metformin Generic", type: "Various", manufacturer: "Multiple" }
        ]
    },

    // Lisinopril
    "LIS654": {
        id: "LIS654",
        name: "Lisinopril",
        genericName: "Lisinopril",
        category: "ACE Inhibitor",
        description: "Lisinopril is used to treat high blood pressure and heart failure.",
        composition: "(S)-1-[N²-(1-carboxy-3-phenylpropyl)-L-lysyl]-L-proline dihydrate",
        mechanism: "Inhibits angiotensin-converting enzyme (ACE), reducing blood pressure",
        uses: [
            "High blood pressure (hypertension)",
            "Heart failure",
            "Post-myocardial infarction",
            "Diabetic nephropathy"
        ],
        dosage: "Adults: 5-40mg once daily, depending on condition",
        sideEffects: [
            "Dry cough",
            "Dizziness",
            "Headache",
            "Fatigue",
            "Hyperkalemia"
        ],
        contraindications: [
            "Pregnancy",
            "History of angioedema",
            "Bilateral renal artery stenosis"
        ],
        medicines: [
            { name: "Prinivil", type: "Tablet", manufacturer: "Merck" },
            { name: "Zestril", type: "Tablet", manufacturer: "AstraZeneca" },
            { name: "Lisinopril Generic", type: "Tablet", manufacturer: "Multiple" }
        ]
    },

    // Simvastatin
    "SIM987": {
        id: "SIM987",
        name: "Simvastatin",
        genericName: "Simvastatin",
        category: "Statin (HMG-CoA Reductase Inhibitor)",
        description: "Simvastatin is used to lower cholesterol and reduce cardiovascular risk.",
        composition: "C25H38O5",
        mechanism: "Inhibits HMG-CoA reductase, reducing cholesterol synthesis",
        uses: [
            "High cholesterol",
            "Cardiovascular disease prevention",
            "Familial hypercholesterolemia",
            "Coronary heart disease"
        ],
        dosage: "Adults: 5-40mg once daily in the evening",
        sideEffects: [
            "Muscle pain",
            "Liver enzyme elevation",
            "Headache",
            "Nausea",
            "Rhabdomyolysis (rare)"
        ],
        contraindications: [
            "Active liver disease",
            "Pregnancy and breastfeeding",
            "Concomitant use with certain drugs"
        ],
        medicines: [
            { name: "Zocor", type: "Tablet", manufacturer: "Merck" },
            { name: "Simvastatin Generic", type: "Tablet", manufacturer: "Multiple" }
        ]
    },

    // Omeprazole
    "OME147": {
        id: "OME147",
        name: "Omeprazole",
        genericName: "Omeprazole",
        category: "Proton Pump Inhibitor (PPI)",
        description: "Omeprazole reduces stomach acid production.",
        composition: "5-methoxy-2-[[(4-methoxy-3,5-dimethyl-2-pyridinyl)methyl]sulfinyl]-1H-benzimidazole",
        mechanism: "Irreversibly inhibits gastric H+/K+-ATPase (proton pump)",
        uses: [
            "Gastroesophageal reflux disease (GERD)",
            "Peptic ulcers",
            "Zollinger-Ellison syndrome",
            "H. pylori eradication"
        ],
        dosage: "Adults: 20-40mg once daily before meals",
        sideEffects: [
            "Headache",
            "Diarrhea",
            "Abdominal pain",
            "Vitamin B12 deficiency",
            "Increased infection risk"
        ],
        contraindications: [
            "Hypersensitivity to omeprazole",
            "Concurrent use with rilpivirine"
        ],
        medicines: [
            { name: "Prilosec", type: "Capsule", manufacturer: "Procter & Gamble" },
            { name: "Prilosec OTC", type: "Tablet", manufacturer: "Procter & Gamble" },
            { name: "Omeprazole Generic", type: "Various", manufacturer: "Multiple" }
        ]
    },

    // Warfarin
    "WAR258": {
        id: "WAR258",
        name: "Warfarin",
        genericName: "Warfarin Sodium",
        category: "Anticoagulant",
        description: "Warfarin is an anticoagulant used to prevent blood clots.",
        composition: "4-hydroxy-3-(3-oxo-1-phenylbutyl)-2H-chromen-2-one",
        mechanism: "Inhibits vitamin K epoxide reductase, reducing clotting factor synthesis",
        uses: [
            "Atrial fibrillation",
            "Deep vein thrombosis",
            "Pulmonary embolism",
            "Mechanical heart valves"
        ],
        dosage: "Adults: Individualized based on INR monitoring, typically 2-10mg daily",
        sideEffects: [
            "Bleeding",
            "Bruising",
            "Hair loss",
            "Skin necrosis (rare)",
            "Purple toe syndrome"
        ],
        contraindications: [
            "Active bleeding",
            "Pregnancy",
            "Severe liver disease",
            "Recent surgery"
        ],
        medicines: [
            { name: "Coumadin", type: "Tablet", manufacturer: "Bristol-Myers Squibb" },
            { name: "Jantoven", type: "Tablet", manufacturer: "Upsher-Smith" },
            { name: "Warfarin Generic", type: "Tablet", manufacturer: "Multiple" }
        ]
    },

    // Levothyroxine
    "LEV369": {
        id: "LEV369",
        name: "Levothyroxine",
        genericName: "Levothyroxine Sodium",
        category: "Thyroid Hormone",
        description: "Levothyroxine is a synthetic thyroid hormone used to treat hypothyroidism.",
        composition: "O-(4-hydroxy-3,5-diiodophenyl)-3,5-diiodo-L-tyrosine sodium salt",
        mechanism: "Replaces or supplements endogenous thyroid hormone (T4)",
        uses: [
            "Hypothyroidism",
            "Thyroid cancer",
            "Goiter",
            "Thyroid suppression therapy"
        ],
        dosage: "Adults: 25-200mcg once daily, individualized based on TSH levels",
        sideEffects: [
            "Heart palpitations",
            "Nervousness",
            "Insomnia",
            "Weight loss",
            "Heat intolerance"
        ],
        contraindications: [
            "Untreated adrenal insufficiency",
            "Recent myocardial infarction",
            "Hyperthyroidism"
        ],
        medicines: [
            { name: "Synthroid", type: "Tablet", manufacturer: "Abbott" },
            { name: "Levoxyl", type: "Tablet", manufacturer: "Pfizer" },
            { name: "Tirosint", type: "Capsule", manufacturer: "IBSA" },
            { name: "Levothyroxine Generic", type: "Tablet", manufacturer: "Multiple" }
        ]
    }
};

// Global variables
let currentSearchResults = [];

// DOM Elements
const heroSearchInput = document.getElementById('hero-search');
const searchResultsSection = document.getElementById('search-results');
const resultsContainer = document.getElementById('results-container');
const loadingSpinner = document.getElementById('loading-spinner');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Add event listeners
    heroSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDrug();
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });

    // Add some sample searches for demonstration
    console.log('MediCheck initialized successfully!');
    console.log('Available drug IDs:', Object.keys(drugDatabase));
}

// Main search function
function searchDrug() {
    const searchTerm = heroSearchInput.value.trim().toUpperCase();
    
    if (!searchTerm) {
        showNotification('Please enter a drug ID to search', 'warning');
        return;
    }

    showLoadingSpinner();

    // Simulate API call delay
    setTimeout(() => {
        const results = performSearch(searchTerm);
        displaySearchResults(results, searchTerm);
        hideLoadingSpinner();
    }, 800);
}

// Perform search in database
function performSearch(searchTerm) {
    const results = [];
    
    // Exact match search
    if (drugDatabase[searchTerm]) {
        results.push(drugDatabase[searchTerm]);
    } else {
        // Partial match search
        Object.keys(drugDatabase).forEach(drugId => {
            const drug = drugDatabase[drugId];
            if (drugId.includes(searchTerm) || 
                drug.name.toUpperCase().includes(searchTerm) ||
                drug.genericName.toUpperCase().includes(searchTerm)) {
                results.push(drug);
            }
        });
    }

    return results;
}

// Display search results
function displaySearchResults(results, searchTerm) {
    currentSearchResults = results;

    if (results.length === 0) {
        showNoResults(searchTerm);
        return;
    }

    // Show results section
    searchResultsSection.classList.remove('hidden');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display each result
    results.forEach((drug, index) => {
        const drugCard = createDrugCard(drug, index);
        resultsContainer.appendChild(drugCard);
    });

    // Scroll to results
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });

    showNotification(`Found ${results.length} result(s) for "${searchTerm}"`, 'success');
}

// Create drug card HTML
function createDrugCard(drug, index) {
    const card = document.createElement('div');
    card.className = 'drug-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="drug-header">
            <div>
                <h3 class="drug-title">${drug.name}</h3>
                <p style="color: #666; font-style: italic;">${drug.genericName}</p>
            </div>
            <span class="drug-id">${drug.id}</span>
        </div>

        <div class="drug-details">
            <div class="detail-section">
                <h4><i class="fas fa-tag"></i> Category</h4>
                <p>${drug.category}</p>
            </div>

            <div class="detail-section">
                <h4><i class="fas fa-info-circle"></i> Description</h4>
                <p>${drug.description}</p>
            </div>

            <div class="detail-section">
                <h4><i class="fas fa-flask"></i> Composition</h4>
                <p>${drug.composition}</p>
            </div>

            <div class="detail-section">
                <h4><i class="fas fa-cogs"></i> Mechanism of Action</h4>
                <p>${drug.mechanism}</p>
            </div>

            <div class="detail-section">
                <h4><i class="fas fa-prescription"></i> Uses</h4>
                <ul>
                    ${drug.uses.map(use => `<li>${use}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4><i class="fas fa-pills"></i> Dosage</h4>
                <p>${drug.dosage}</p>
            </div>

            <div class="detail-section">
                <h4><i class="fas fa-exclamation-triangle"></i> Side Effects</h4>
                <ul>
                    ${drug.sideEffects.map(effect => `<li>${effect}</li>`).join('')}
                </ul>
            </div>

            <div class="detail-section">
                <h4><i class="fas fa-ban"></i> Contraindications</h4>
                <ul>
                    ${drug.contraindications.map(contra => `<li>${contra}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="medicines-section">
            <h4><i class="fas fa-capsules"></i> Medicines Containing This Drug</h4>
            <div class="medicines-grid">
                ${drug.medicines.map(medicine => `
                    <div class="medicine-card">
                        <div class="medicine-name">${medicine.name}</div>
                        <div class="medicine-type">${medicine.type}</div>
                        <div style="font-size: 0.8rem; color: #888; margin-top: 0.25rem;">
                            by ${medicine.manufacturer}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    return card;
}

// Show no results message
function showNoResults(searchTerm) {
    searchResultsSection.classList.remove('hidden');
    resultsContainer.innerHTML = `
        <div class="no-results" style="text-align: center; padding: 3rem; color: #666;">
            <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; color: #ccc;"></i>
            <h3>No Results Found</h3>
            <p>No drugs found for "${searchTerm}". Please try a different search term.</p>
            <div style="margin-top: 2rem;">
                <h4>Available Drug IDs:</h4>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; margin-top: 1rem;">
                    ${Object.keys(drugDatabase).map(id => 
                        `<span style="background: #f0f0f0; padding: 0.25rem 0.5rem; border-radius: 15px; font-size: 0.875rem;">${id}</span>`
                    ).join('')}
                </div>
            </div>
        </div>
    `;
    searchResultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Clear search results
function clearResults() {
    searchResultsSection.classList.add('hidden');
    resultsContainer.innerHTML = '';
    heroSearchInput.value = '';
    currentSearchResults = [];
    showNotification('Search results cleared', 'info');
}

// Show loading spinner
function showLoadingSpinner() {
    loadingSpinner.classList.remove('hidden');
}

// Hide loading spinner
function hideLoadingSpinner() {
    loadingSpinner.classList.add('hidden');
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => notif.remove());

    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#48bb78' : type === 'warning' ? '#ed8936' : type === 'error' ? '#f56565' : '#4299e1'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        font-weight: 500;
    `;

    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : type === 'error' ? 'times-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add slide animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add some utility functions for future enhancements
function exportResults() {
    if (currentSearchResults.length === 0) {
        showNotification('No results to export', 'warning');
        return;
    }

    const data = JSON.stringify(currentSearchResults, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'drug-search-results.json';
    a.click();
    URL.revokeObjectURL(url);
    
    showNotification('Results exported successfully', 'success');
}

function printResults() {
    if (currentSearchResults.length === 0) {
        showNotification('No results to print', 'warning');
        return;
    }

    const printWindow = window.open('', '_blank');
    const printContent = generatePrintContent(currentSearchResults);
    
    printWindow.document.write(printContent);
    printWindow.document.close();
    printWindow.print();
    
    showNotification('Print dialog opened', 'info');
}

function generatePrintContent(results) {
    const content = results.map(drug => `
        <div style="margin-bottom: 30px; border-bottom: 1px solid #ccc; padding-bottom: 20px;">
            <h2>${drug.name} (${drug.id})</h2>
            <p><strong>Generic Name:</strong> ${drug.genericName}</p>
            <p><strong>Category:</strong> ${drug.category}</p>
            <p><strong>Description:</strong> ${drug.description}</p>
            <p><strong>Uses:</strong> ${drug.uses.join(', ')}</p>
            <p><strong>Dosage:</strong> ${drug.dosage}</p>
            <h3>Medicines:</h3>
            <ul>
                ${drug.medicines.map(med => `<li>${med.name} (${med.type}) - ${med.manufacturer}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Drug Search Results</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 20px; }
                h1 { color: #4c51bf; }
                h2 { color: #2d3748; }
                h3 { color: #4c51bf; margin-top: 20px; }
            </style>
        </head>
        <body>
            <h1>MediCheck - Drug Search Results</h1>
            ${content}
        </body>
        </html>
    `;
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        heroSearchInput.focus();
    }
    
    // Escape to clear results
    if (e.key === 'Escape') {
        if (!searchResultsSection.classList.contains('hidden')) {
            clearResults();
        }
    }
});

// Add search suggestions (future enhancement)
function addSearchSuggestions() {
    const suggestions = Object.keys(drugDatabase);
    // Implementation for autocomplete can be added here
    return suggestions;
}

console.log('MediCheck Drug Database loaded with', Object.keys(drugDatabase).length, 'drugs');