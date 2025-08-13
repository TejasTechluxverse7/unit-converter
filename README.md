Unit Converter - README
A simple and intuitive web-based unit converter that supports conversions across three categories:
- Length: meter (m), kilometer (km), mile (mi)
- Temperature: Celsius (°C), Fahrenheit (°F), Kelvin (K)
- Weight: kilogram (kg), gram (g), pound (lb)
  
Features
- Easy to use — select a category, pick units to convert from/to, and get results instantly.
- Lightweight — built with vanilla HTML, CSS, and JavaScript, with no external dependencies.
- Real-time conversion — updates the result as soon as the input changes.
- Cross-browser compatible — works in any modern browser.
  
Demo / Usage
1. Clone the repository:
   git clone https://github.com/TejasTechluxverse7/unit-converter.git
2. Navigate into the project directory:
   cd unit-converter
3. Open index.html in your preferred browser to start using the converter.

How It Works
- index.html — the user interface: dropdowns for category and units, input field, and result display.
- styles.css — style definitions for a clean and responsive layout.
- script.js — contains conversion logic. Based on selected category and units, it applies the appropriate formula:

  Length:
    • meters ↔ kilometers (factor: 1000)
    • meters ↔ miles (factor: ~1609.34)
    • kilometers ↔ miles (via meters)

  Weight:
    • kilograms ↔ grams (factor: 1000)
    • kilograms ↔ pounds (factor: ~2.20462)
    • grams ↔ pounds (via kilograms)

  Temperature:
    • Celsius ↔ Fahrenheit: F = (C × 9/5) + 32, C = (F − 32) × 5/9
    • Celsius ↔ Kelvin: K = C + 273.15, C = K − 273.15
    • Fahrenheit ↔ Kelvin (via Celsius)
  
Project Structure
unit-converter/
├── index.html
├── styles.css
├── script.js
└── .gitignore

Usage Examples
- Length: Convert 5 meters to miles — output: 0.00310686 mi
- Weight: Convert 500 grams to pounds — output: 1.10231 lb
- Temperature: Convert 100 °C to Kelvin — output: 373.15 K
  
Contribution
Contributions are welcome! Whether it’s improving UI, adding more unit categories, optimizing performance, or writing tests — feel free to fork, add your changes, and submit a pull request.

License
GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2025 Tejas K

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

 https://www.gnu.org/licenses/.

Improvements could include:
- More unit categories (volume, time, area, etc.)
- Better UI/UX
- Unit tests or automated conversions
- Responsive design enhancements or live deployment
