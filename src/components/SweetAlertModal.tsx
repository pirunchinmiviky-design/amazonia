import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';

export interface AlertState {
  isOpen: boolean;
  title: string;
  text: string;
  icon?: 'success' | 'info' | 'warning';
  confirmText?: string;
  onConfirm?: () => void;
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
}

interface SweetAlertModalProps {
  alert: AlertState | null;
  onClose: () => void;
}

export const SweetAlertModal: React.FC<SweetAlertModalProps> = ({ alert, onClose }) => {
  if (!alert || !alert.isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow-2xl text-center transform transition-all animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-full transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-[#1e5631]">
          {alert.icon === 'info' ? (
            <Info className="w-10 h-10 stroke-[2.2]" />
          ) : (
            <CheckCircle2 className="w-10 h-10 stroke-[2.2] text-emerald-600" />
          )}
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">
          {alert.title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
          {alert.text}
        </p>

        <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
          {alert.secondaryAction && (
            <button
              onClick={() => {
                alert.secondaryAction?.onClick();
                onClose();
              }}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors whitespace-nowrap"
            >
              {alert.secondaryAction.text}
            </button>
          )}

          <button
            onClick={() => {
              if (alert.onConfirm) {
                alert.onConfirm();
              }
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-[#1e5631] hover:bg-[#143d22] rounded-xl shadow-md transition-colors whitespace-nowrap"
          >
            {alert.confirmText || 'Aceptar'}
          </button>
        </div>
      </div>
    </div>
  );
};
