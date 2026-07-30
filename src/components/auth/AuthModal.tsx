"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import VerifyOTP from "./VerifyOTP";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

type AuthView =
  | "login"
  | "register"
  | "verify-register"
  | "forgot"
  | "verify-reset"
  | "reset";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AuthModal({ open, onClose }: Props) {
  const [view, setView] = useState<AuthView>("login");

  const [email, setEmail] = useState("");
  const [resetOTP, setResetOTP] = useState("");

  const handleClose = () => {
    setView("login");
    setEmail("");
    onClose();
  };

  const titles: Record<AuthView, string> = {
    login: "Welcome Back",
    register: "Create Account",
    "verify-register": "Verify Email",
    forgot: "Forgot Password",
    "verify-reset": "Verify Code",
    reset: "Create New Password",
  };

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
            onClick={handleClose}
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          >
            <div
              className={`
    relative
    w-full
    overflow-hidden
    rounded-3xl
    border
    border-white/10
    bg-[#111114]
    shadow-2xl
    transition-all
    duration-300
    ${view === "register" ? "max-w-sm lg:max-w-2xl" : "max-w-sm"}
  `}
            >
              {/* Close */}

              <button
                onClick={handleClose}
                className="
                  absolute
                  right-5
                  top-5
                  z-20
                  rounded-xl
                  p-2
                  text-zinc-500
                  transition
                  hover:bg-zinc-800
                  hover:text-white
                "
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}

              <div className="border-b border-zinc-800 p-6">
                <h2 className="mt-6 text-center text-xl font-bold text-white">
                  {titles[view]}
                </h2>
              </div>

              {/* Content */}

              <div className="p-6">
                <AnimatePresence mode="wait" initial={false}>
                  {" "}
                  {/* Login */}
                  {view === "login" && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <LoginForm
                        onRegister={() => setView("register")}
                        onForgotPassword={() => setView("forgot")}
                      />
                    </motion.div>
                  )}
                  {/* Register */}
                  {view === "register" && (
                    <motion.div
                      key="register"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <RegisterForm
                        onLogin={() => setView("login")}
                        onSuccess={(userEmail) => {
                          setEmail(userEmail);
                          setView("verify-register");
                        }}
                      />
                    </motion.div>
                  )}
                  {/* Verify Registration */}
                  {view === "verify-register" && (
                    <motion.div
                      key="verify-register"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <VerifyOTP
                        email={email}
                        onVerify={async (code) => {
                          const res = await fetch(
                            "/api/auth/verify-reset-otp",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                email,
                                otp: code,
                              }),
                            },
                          );

                          const data = await res.json();

                          if (!res.ok) {
                            alert(data.message);
                            return false;
                          }

                          setResetOTP(code);
                          setView("reset");
                          return true;
                        }}
                      />
                    </motion.div>
                  )}
                  {/* Forgot Password */}
                  {view === "forgot" && (
                    <motion.div
                      key="forgot"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ForgotPassword
                        onBack={() => setView("login")}
                        onSuccess={(userEmail) => {
                          setEmail(userEmail);
                          setView("verify-reset");
                        }}
                      />
                    </motion.div>
                  )}
                  {/* Verify Reset */}
                  {view === "verify-reset" && (
                    <motion.div
                      key="verify-reset"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <VerifyOTP
                        email={email}
                        title="Verify Reset Code"
                        description="Enter the code sent to your email"
                        onVerify={async (code) => {
                          const res = await fetch("/api/auth/verify-email", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                              email,
                              otp: code,
                            }),
                          });

                          const data = await res.json();
                          if (!res.ok) {
                            alert(data.message);
                            return false;
                          }
                          alert("Email verified successfully!");

                          setView("login");

                          return true;
                        }}
                        onBack={() => setView("forgot")}
                        onResend={async () => {
                          // resend reset OTP
                        }}
                      />
                    </motion.div>
                  )}
                  {/* Reset Password */}
                  {view === "reset" && (
                    <motion.div
                      key="reset"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ResetPassword
                        email={email}
                        otp={resetOTP}
                        onSuccess={() => {
                          alert("Password updated successfully.");
                          setView("login");
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
