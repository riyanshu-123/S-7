# MediCheck - Drug Medicine Information System

A comprehensive, responsive web application for searching and retrieving detailed information about drugs and medicines. Built with modern HTML5, CSS3, and JavaScript.

## 🌟 Features

### Core Functionality
- **Drug Search**: Search drugs by ID, name, or generic name
- **Comprehensive Information**: Get detailed drug profiles including:
  - Generic and brand names
  - Drug category and classification
  - Chemical composition
  - Mechanism of action
  - Medical uses and indications
  - Dosage information
  - Side effects and adverse reactions
  - Contraindications and warnings
  - List of medicines containing the drug

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, attractive interface with smooth animations
- **Fast Search**: Instant search results with loading indicators
- **Interactive Elements**: Hover effects, smooth scrolling, and animated transitions
- **Keyboard Shortcuts**: Ctrl/Cmd + K to focus search, Escape to clear results
- **Mobile Menu**: Hamburger menu for mobile navigation

### Technical Features
- **No Dependencies**: Pure HTML, CSS, and JavaScript (no frameworks required)
- **Offline Ready**: All functionality works without internet connection
- **Print Support**: Print search results functionality
- **Export Data**: Export search results as JSON
- **Notifications**: User-friendly notification system
- **Loading States**: Visual feedback during search operations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs directly in the browser

### Installation
1. Clone or download the repository
2. Open `index.html` in your web browser
3. Start searching for drugs!

### File Structure
```
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and drug database
└── README.md           # This file
```

## 🔍 How to Use

### Searching for Drugs
1. **Enter Drug ID**: Type a drug ID in the search box (e.g., ASP001, IBU123)
2. **Search by Name**: You can also search by drug name (e.g., Aspirin, Ibuprofen)
3. **View Results**: Detailed information will be displayed in an organized card format
4. **Clear Results**: Use the "Clear" button or press Escape to clear results

### Available Drug IDs
The database includes the following drugs:
- **ASP001** - Aspirin (Acetylsalicylic Acid)
- **IBU123** - Ibuprofen
- **PAR456** - Paracetamol (Acetaminophen)
- **AMX789** - Amoxicillin
- **MET321** - Metformin
- **LIS654** - Lisinopril
- **SIM987** - Simvastatin
- **OME147** - Omeprazole
- **WAR258** - Warfarin
- **LEV369** - Levothyroxine

### Navigation
- **Home**: Landing page with search functionality
- **Search**: Direct access to search results
- **About**: Information about the application

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured layout with side-by-side content
- **Tablet**: Adapted layout with stacked content
- **Mobile**: Mobile-first design with hamburger menu

## 🎨 Design Features

### Visual Elements
- **Gradient Backgrounds**: Modern gradient color schemes
- **Glass Morphism**: Frosted glass effects on search elements
- **Floating Animations**: Animated pill icons in the hero section
- **Card-based Layout**: Information organized in clean, readable cards
- **Icon Integration**: FontAwesome icons for better visual hierarchy

### Color Scheme
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Background**: Light gray (#f7fafc)
- **Text**: Dark gray (#2d3748)
- **Accent**: Blue (#4c51bf)

## 🔧 Customization

### Adding New Drugs
To add new drugs to the database, edit the `drugDatabase` object in `script.js`:

```javascript
"NEW001": {
    id: "NEW001",
    name: "Drug Name",
    genericName: "Generic Name",
    category: "Drug Category",
    description: "Drug description...",
    composition: "Chemical composition",
    mechanism: "How the drug works",
    uses: ["Use 1", "Use 2"],
    dosage: "Dosage information",
    sideEffects: ["Side effect 1", "Side effect 2"],
    contraindications: ["Contraindication 1"],
    medicines: [
        { name: "Brand Name", type: "Tablet", manufacturer: "Company" }
    ]
}
```

### Styling Modifications
- Edit `styles.css` to modify colors, fonts, or layout
- All CSS custom properties are defined at the top for easy customization
- Responsive breakpoints can be adjusted in the media queries

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues for:
- New drug entries
- Bug fixes
- Feature enhancements
- UI/UX improvements

## 📞 Support

For support or questions, please contact:
- Email: info@medicheck.com
- Phone: +1 (555) 123-4567

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
  - Drug search and display
  - Responsive design
  - 10 drug database entries
  - Modern UI with animations

---

**Disclaimer**: This application is for educational and informational purposes only. Always consult with healthcare professionals for medical advice and drug information.