"use server";

import {
  submitLead as submitLeadToCms,
  subscribeToNewsletter,
} from "@/lib/cms-client";
import { Lead, SubmitLeadResponse } from "@/types/cms";

export type SubmitLeadPayload = Omit<
  Lead,
  | "portfolio"
  | "_id"
  | "createdAt"
  | "updatedAt"
  | "downloadedItems"
  | "status"
  | "notes"
> & { notes?: Lead["notes"]; message?: string };

export async function submitLeadAction(
  payload: SubmitLeadPayload
): Promise<{
  success: boolean;
  message: string;
  downloadUrl?: SubmitLeadResponse;
}> {
  try {
    return await submitLeadToCms(payload);
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : "Failed to submit lead";
    console.error("submitLeadAction failed:", message);
    return {
      success: false,
      message,
    };
  }
}

export interface NewsletterActionResult {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletterAction(
  email: string
): Promise<NewsletterActionResult> {
  try {
    const res = await subscribeToNewsletter(email);
    return {
      success: res.success,
      message: res.success ? "Subscribed successfully!" : "Failed to subscribe",
    };
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : "An error occurred during subscription";
    return { success: false, message };
  }
}
