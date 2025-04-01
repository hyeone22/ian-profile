import React from "react";

interface ModalProps {
  message: string;
  onClose: () => void;
}

function ContactModal({ message, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-lack bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h2 className="text-lg text-center font-semibold mb-4">제출 완료</h2>
        <p>{message}</p>
        <button
          className="w-full mt-4 bg-primary-color text-white p-2 rounded"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
}

export default ContactModal;
