"use client";

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import LoginForm from "./LoginForm";
import SocialLogin from "./SocialLogin";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function LoginModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-md"
          />

          {/* Modal */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 30,
              scale: 0.97,
            }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed top-1/2 left-1/2 z-[100] w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative rounded-3xl border border-white/10 bg-[#111114] p-8 shadow-2xl">
              {/* Close */}

              <button
                onClick={onClose}
                className="absolute top-5 right-5 rounded-xl p-2 text-zinc-400 transition hover:bg-zinc-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Logo */}

              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
                  <span className="text-2xl font-black text-violet-400">P</span>
                </div>

                <h2 className="mt-6 text-3xl font-bold text-white">
                  Welcome Back
                </h2>

                <p className="mt-3 text-zinc-400">
                  Sign in to continue your cybersecurity journey.
                </p>
              </div>

              <div className="mt-8">
                <LoginForm onRegister={() => {}} onForgotPassword={() => {}} />
              </div>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-zinc-800" />

                <span className="text-xs tracking-[0.3em] text-zinc-500 uppercase">
                  OR
                </span>

                <div className="h-px flex-1 bg-zinc-800" />
              </div>

              <SocialLogin />

              <p className="mt-8 text-center text-sm text-zinc-400">
                Don&apos;t have an account?{" "}
                <button className="font-semibold text-violet-400 hover:text-violet-300">
                  Create Account
                </button>
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
