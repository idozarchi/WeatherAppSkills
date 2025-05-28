// Centralized Tailwind CSS class variables for reuse across components

// ====== Layout & App Container ======
export const appContainerClass =
  "w-full flex flex-col items-center min-h-screen bg-blue-100";
export const containerClass = "w-full max-w-lg mx-auto mt-6";

// ====== Header ======
export const headerClass = "w-full bg-blue-300 text-white shadow";
export const headerInnerClass =
  "flex flex-row items-center justify-between w-full px-8 h-full";

// ====== Footer ======
export const footerClass =
  "w-full bg-blue-300 text-white py-4 mt-auto text-center shadow-inner";
export const footerTextClass = "text-sm";

// ====== Card & Card Content ======
export const cardClass = "bg-white rounded shadow";
export const cardContentClass = "p-6";
export const cardContentInnerClass = "flex flex-col gap-4 m-2 sm:m-5";

// ====== Titles & Headings ======
export const titleClass = "text-xl sm:text-2xl font-bold mb-4 mt-4";

// ====== Scroll Area & Lists ======
export const scrollAreaClass =
  "bg-white rounded shadow p-4 max-h-60 sm:max-h-96 overflow-y-auto";
export const listClass = "space-y-2";
export const listItemClass =
  "text-gray-700 border-b last:border-b-0 pb-2 last:pb-0";

// ====== Loading, Empty, Error States ======
export const loadingTextClass = "mt-8 text-gray-400";
export const emptyTextClass = "text-gray-500";
export const errorTextClass = "mt-8 text-red-500";

// ====== Buttons & Inputs ======
export const buttonClass =
  "px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors";
export const menuButtonClass =
  "px-4 py-2 rounded bg-blue-300 text-white hover:bg-blue-400 transition-colors";
export const searchButtonClass = "w-24 sm:w-32";
export const inputClass = "w-full";
export const searchBarContainerClass =
  "flex items-center gap-2 w-full max-w-lg mt-8";

// ====== Weather Content ======
export const weatherContentRowClass = "flex flex-col sm:flex-row";
export const weatherValueClass = "text-4xl font-bold";
export const weatherLabelClass = "text-lg text-gray-500";

// ====== Location ======
export const locationContainerClass = "flex flex-col items-begin w-full mb-2";
export const locationCityClass = "text-2xl mb-0";
export const locationCountryClass = "text-lg text-gray-300 font-semibold";

// ====== Temperatures ======
export const temperaturesContainerClass =
  "flex flex-col items-begin w-full mb-2";
export const temperatureValueClass = "text-2xl mb-0";
export const feelsLikeClass = "text-lg text-gray-300 font-semibold";

// ====== Weather Description ======
export const descriptionContainerClass =
  "flex flex-col items-begin w-full mb-2";
export const descriptionClass = "text-lg text-gray-600 mb-0 text-begin w-full";
