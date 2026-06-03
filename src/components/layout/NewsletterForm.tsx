"use client";

import { useActionState, useEffect } from "react";
import { Send, Loader2, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { subscribeToNewsletterAction } from "@/app/actions";
import { useToast } from "@/components/ui/toast";

interface FormState {
  success: boolean | null;
  message: string;
}

const initialState: FormState = {
  success: null,
  message: "",
};

export default function NewsletterForm() {
  const { toast } = useToast();

  const [state, formAction, isPending] = useActionState(
    async (prevState: FormState, formData: FormData) => {
      const email = formData.get("email") as string;
      if (!email || !email.includes("@")) {
        return {
          success: false,
          message: "Please enter a valid email address.",
        };
      }
      try {
        const result = await subscribeToNewsletterAction(email);
        return { success: result.success, message: result.message };
      } catch {
        return { success: false, message: "An unexpected error occurred." };
      }
    },
    initialState
  );

  useEffect(() => {
    if (state.message) {
      toast({
        description: state.message,
        variant: state.success ? "success" : "destructive",
      });
    }
  }, [state.message, state.success, toast]);

  return (
    <form action={formAction} className="space-y-2">
      <div className="relative flex items-center">
        <Input
          type="email"
          name="email"
          placeholder="Enter your work email"
          disabled={isPending}
          required
          className="rounded-full bg-background/50 border-border/50 pl-4 pr-12 py-5 text-sm"
        />
        <Button
          type="submit"
          size="icon"
          disabled={isPending}
          className="absolute right-1 w-8 h-8 rounded-full"
        >
          {isPending ? (
            <Loader2 className="w-3 h-3 animate-spin" />
          ) : state.success ? (
            <Check className="w-3 h-3 text-green-500" />
          ) : (
            <Send className="w-3 h-3" />
          )}
        </Button>
      </div>
    </form>
  );
}
