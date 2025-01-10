//npm install -s flag-icons
//npm install react-i18next

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

const LANGUAGE_SELECTOR_ID = 'language-selector';

const languageOptions = [
  { key: 'en', name: 'English', countryCode: 'gb' },  // gb for UK flag
  { key: 'rw', name: 'Kinyarwanda', countryCode: 'rw' }, // rw for Rwanda flag
  { key: 'fr', name: 'Français', countryCode: 'fr' }, // fr for French flag
];

const FlagIcon = ({ countryCode }) => (
  <span className={`fi fi-${countryCode.toLowerCase()}`} />
);

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions.find((language) => language.key === i18n.language) || languageOptions[0]
  );

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language.key);
    setSelectedLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleWindowClick = (event) => {
      const target = event.target.closest('button');
      if (target && target.id === LANGUAGE_SELECTOR_ID) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        id={LANGUAGE_SELECTOR_ID}
        aria-expanded={isOpen}
      >
        <FlagIcon countryCode={selectedLanguage.countryCode} />
        {selectedLanguage.name}
        <svg
          className="-me-1 ms-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby={LANGUAGE_SELECTOR_ID}
        >
          <div className="py-1" role="none">
            {languageOptions.map((language) => (
              <button
                key={language.key}
                onClick={() => handleLanguageChange(language)}
                className={`${
                  selectedLanguage.key === language.key
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700"
                } block px-4 py-2 text-sm text-start items-center inline-flex hover:bg-gray-100`}
                role="menuitem"
              >
                <FlagIcon countryCode={language.countryCode} />
                <span className="truncate ml-2">{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
