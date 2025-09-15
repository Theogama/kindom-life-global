import emailjs from "@emailjs/browser";

// TODO: Replace with your actual EmailJS IDs via environment or direct strings
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_PLAN_VISIT = import.meta.env.VITE_EMAILJS_TEMPLATE_PLAN_VISIT as string;
const EMAILJS_TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export type PlanVisitPayload = {
  serviceDate: string; // YYYY-MM-DD
};

export async function sendPlanVisitEmail(payload: PlanVisitPayload) {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_PLAN_VISIT,
    {
      service_date: payload.serviceDate,
    },
    EMAILJS_PUBLIC_KEY
  );
}

export type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_CONTACT,
    {
      first_name: payload.firstName ?? "",
      last_name: payload.lastName ?? "",
      email: payload.email ?? "",
      phone: payload.phone ?? "",
      subject: payload.subject ?? "",
      message: payload.message ?? "",
    },
    EMAILJS_PUBLIC_KEY
  );
}



