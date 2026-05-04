"use client";

export function OpenChatButton() {
  const open = () => window.dispatchEvent(new Event("open-chatbot"));
  return (
    <button
      onClick={open}
      className="primary-button inline-flex items-center gap-2"
    >
      <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path
          d="M18 10C18 14.4183 14.4183 18 10 18C8.50733 18 7.11655 17.5892 5.93551 16.8726L2 18L3.12742 14.0645C2.41079 12.8835 2 11.4927 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      Talk to AI assistant
    </button>
  );
}
