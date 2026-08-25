import services from "./services";

export const MARQUEE_ITEMS = services.map((s) => s.title);

export const MARQUEE_MESSAGES = ["Have an idea?", "Let's connect"];

// Emptied on purpose. Marq2 renders these as huge scrolling text, and it published
// an unmonitored phone number on /team and /team-details. Both routes currently
// return notFound(), so nothing visible changes today.
//
// If those pages come back, Marq2's bottom row will be a blank strip with this
// empty, so give it non-contact text at that point rather than restoring the
// number. The whole marquee is already wrapped in a link to /contact, which is
// where the real contact details live.
//
// It previously held a hardcoded phone number and email. Do not paste contact
// details back in here: the address has already changed once, and anything
// hardcoded in this file will not follow SITE_CONFIG.email.
export const MARQUEE_CONTACTS: string[] = [];
