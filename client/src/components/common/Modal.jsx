import { X } from "lucide-react";

export default function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={() => {
        if (onClose) {
          onClose();
        }
      }}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-10
        ${open ? "visible bg-black/60" : "invisible"}
      `}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={`
          mx-2 px-3 relative flex flex-col bg-second-color rounded-xl shadow transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        <div className="flex justify-end">
          <X
            className="cursor-pointer my-3 mr-3"
            color="white"
            onClick={onClose}
          />
        </div>
        <div className="pb-6 px-6 max-h-full flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
