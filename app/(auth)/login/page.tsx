import AuthShowcase from "@/components/auth/AuthShowcase";
import LoginForm from "@/components/auth/LoginForm";
import ThemeToggle from "@/components/common/ThemeToggle";
import Modal from "@/components/common/Modal";
import { useEffect, useState } from "react";
export default function LoginPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("demo-admin-modal");

    if (!seen) {
      setIsOpen(true);
      localStorage.setItem("demo-admin-modal", "true");
    }
  }, []);
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-slate-50 dark:bg-slate-950">
      <AuthShowcase />

      <div className="relative flex items-center justify-center p-6">
        {/* Mobile Theme Toggle */}
        <div className="lg:hidden fixed top-6 right-6 z-50">
          <ThemeToggle />
        </div>

        <LoginForm />
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onConfirm={() => setIsOpen(false)}
          title="Welcome 👋"
          description="Use the demo administrator account below to access the admin dashboard."
          confirmText="Continue"
          cancelText="Close"
          variant="primary"
        >
          <div className="space-y-4">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 dark:border-indigo-900 dark:bg-indigo-950/40">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700 dark:text-indigo-300">
                Demo Admin Credentials
              </p>

              <div className="mt-4 space-y-3">
                <div>
                  <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">
                    Email
                  </p>
                  <div className="rounded-lg border bg-white px-3 py-2 font-mono text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                    admin@example.com
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs text-slate-500 dark:text-slate-400">
                    Password
                  </p>
                  <div className="rounded-lg border bg-white px-3 py-2 font-mono text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
                    Admin@123
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950/40">
              <p className="text-xs text-amber-800 dark:text-amber-200">
                These credentials are provided for demonstration purposes only.
              </p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}