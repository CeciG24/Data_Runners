// src/components/Modal.jsx

export default function Modal({ isOpen, onClose, modalMessage, loading}) {
  if (!isOpen) return null; // no renderiza si no está abierto

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50">
      <div className="bg-gray-800 text-white p-7 rounded-lg w-80 text-center shadow-xl">
        <h2 className="text-xl font-bold mb-4">{modalMessage}</h2>

        {!loading && (
        <button
          className="mt-6 px-5 py-2 bg-purple-600 rounded hover:bg-purple-500"
          onClick={onClose}
        >
          Cerrar
        </button>
        )}
      </div>
    </div>
  );
}
