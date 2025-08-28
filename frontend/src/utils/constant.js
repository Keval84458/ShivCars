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
  CAR_BOOKING: `${PAGE_PATH_KEYS.CARS}/car-booking`,
  CAR_VALUATION: `${PAGE_PATH_KEYS.CARS}/car-valuation`,
};

export const SERVICES_SUBPAGE_KEY = {
  INSURANCE: `${PAGE_PATH_KEYS.SERVICES}/insurance`,
  RENEWAL: `${PAGE_PATH_KEYS.SERVICES}/renewal`,
  FINANCE: `${PAGE_PATH_KEYS.SERVICES}/finance`,
  EMI_CALCULATOR: `${PAGE_PATH_KEYS.SERVICES}/emi-calculator`,
};

export const BOOKING_SUBPAGE_KEY = {
  BOOK_SERVICE: `${PAGE_PATH_KEYS.BOOKINGS}/book-service`,
};

export const ABOUT_SUBPAGE_KEY = {
  WHO_WE_ARE: `${PAGE_PATH_KEYS.ABOUT}/who-we-are`,
};

export const CONTACT_SUBPAGE_KEY = {
  CONTACT_FORM: `${PAGE_PATH_KEYS.CONTACT}/contact-form`,
  SERVICE_LOCATION: `${PAGE_PATH_KEYS.CONTACT}/service-location`,
};

export const PROFILE_SUBPAGE_KEY = {
  MY_PROFILE: `${PAGE_PATH_KEYS.PROFILE}/my-profile`,
  MY_CARS: `${PAGE_PATH_KEYS.PROFILE}/my-cars`,
  MY_BOOKING: `${PAGE_PATH_KEYS.PROFILE}/my-booking`,
};

export const NEW_CAR_SUBPAGE_KEY = {
  CREATE_NEW_CAR: `${CAR_SUBPAGE_KEY.NEW_CAR}/create-new-car`,
  CAR_DETAILS: `${CAR_SUBPAGE_KEY.NEW_CAR}/car-details`,
};
