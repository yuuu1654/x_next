"use client";

import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SignupForm } from "./widgets/SignupForm";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SignupModal = ({ open, onOpenChange }: Props) => {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px] bg-black text-white border-gray-700">
        <DialogHeader>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-4 text-white hover:bg-white/10"
            onClick={handleClose}
          >
          </Button>
          <div className="mx-auto"></div>
          <DialogTitle className="text-xl font-bold text-center">
            アカウントを作成
          </DialogTitle>
        </DialogHeader>
        <SignupForm />
      </DialogContent>
    </Dialog>
  );
}
