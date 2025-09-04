export const PAGE_PATH_KEYS = {
  HOME: "/",
  CARS: "/cars",
  SERVICES: "/services",
  BOOKINGS: "/bookings",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  SIGNUP: "/sign-up",
};

export const CAR_SUBPAGE_KEY = {
  NEW_CAR: `${PAGE_PATH_KEYS.CARS}/new-cars`,
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

export const CONTACT_SUBPAGE_KEY = {
  CONTACT_FORM: `${PAGE_PATH_KEYS.CONTACT}/contact-form`,
  SERVICE_LOCATION: `${PAGE_PATH_KEYS.CONTACT}/service-location`,
};

export const NEW_CAR_SUBPAGE_KEY = {
  CREATE_NEW_CAR: `${CAR_SUBPAGE_KEY.NEW_CAR}/create-new-car`,
  CAR_DETAILS: `${CAR_SUBPAGE_KEY.NEW_CAR}/car-details`,
};
