export const PAGE_PATH_KEYS = {
  HOME: "/",
  CARS: "/cars",
  SERVICES: "/services",
  BOOKINGS: "/bookings",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  SIGNUP: "/sign-up",
  PROFILE: "/profile",
  NEW_CARS: "/cars/new-cars",
};

export const CAR_SUBPAGE_KEY = {
  NEW_CAR: `${PAGE_PATH_KEYS.CARS}/new-cars`,
  USED_CAR: `${PAGE_PATH_KEYS.CARS}/used-cars`,
  COMPARE_CARS: `${PAGE_PATH_KEYS.CARS}/compare-cars`,
  CAR_VALUATION: `${PAGE_PATH_KEYS.CARS}/car-valuation`,
};

export const SERVICES_SUBPAGE_KEY = {
  CAR_CONSULTING: `${PAGE_PATH_KEYS.SERVICES}/car-consulting`,
  SERVICE_AND_MAINTANCE: `${PAGE_PATH_KEYS.SERVICES}/service-and-maintance`,
  INSURANCE_ANS_RENEWAL: `${PAGE_PATH_KEYS.SERVICES}/insurance-and-renewal`,
  FINANCE_AND_AMI: `${PAGE_PATH_KEYS.SERVICES}/finance-and-emi`,
};

export const BOOKING_SUBPAGE_KEY = {
  BOOK_SERVICE: `${PAGE_PATH_KEYS.BOOKINGS}/book-service`,
  TRACK_MY_BOOKING: `${PAGE_PATH_KEYS.BOOKINGS}/track-my-booking`,
};

export const ABOUT_SUBPAGE_KEY = {
  WHO_WE_ARE: `${PAGE_PATH_KEYS.ABOUT}/who-we-are`,
  WHY_CHOOSE: `${PAGE_PATH_KEYS.ABOUT}/why-choose`,
};

export const CONTACT_SUBPAGE_KEY = {
  CONTACT_FORM: `${PAGE_PATH_KEYS.CONTACT}/contact-form`,
  WHATSAPP_AND_CALL: `${PAGE_PATH_KEYS.CONTACT}/whatsapp-and-call`,
  SERVICE_LOCATION: `${PAGE_PATH_KEYS.CONTACT}/service-location`,
};

export const PROFILE_SUBPAGE_KEY = {
  MY_PROFILE: `${PAGE_PATH_KEYS.PROFILE}/my-profile`,
  MY_CARS: `${PAGE_PATH_KEYS.PROFILE}/my-cars`,
  MY_BOOKING: `${PAGE_PATH_KEYS.PROFILE}/my-booking`,
};
