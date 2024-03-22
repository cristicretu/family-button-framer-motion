"use client";
import { motion, useCycle } from "framer-motion";
import { useState } from "react";

export const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const containerVariants = {
    closed: {
      width: "50px",
      height: "50px",
      borderRadius: "25px",
      right: "0px",
      transition: {
        type: "ease-out",
        duration: 0.15
      },
    },
    open: {
      width: "100%",
      height: "300px",
      borderRadius: "20px",
      top: "-250px",
      transition: {
        type: "spring",
        duration: 0.25,
        // stiffness: 700,
      },
    },
  };

  const childVariants = {
    closed: { opacity: 0, filter: "blur(24px)" },
    open: { opacity: 1, filter: "blur(0px)" },
    transition: {
      type: "ease-out",
    },
  };

  return (
    <div className="relative">
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onClick={toggleOpen}
        className="cursor-pointer absolute top-0 bg-neutral-900 rounded-full py-2 space-y-2 shadow-lg"
      >
        {isOpen ? (
          <>
            <motion.button
              variants={childVariants}
              className="h-1/3 bg-neutral-800 w-[97%] rounded-t-xl rounded-b-md text-left px-4 flex space-x-4 items-center"
            >
              <Airplane />
              <div className="flex flex-col">
                <p className="text-white text-lg">Send</p>
                <p className="text-neutral-400 text-sm">
                  Send tokens or collectibles to any address or ENS username.
                </p>
              </div>
            </motion.button>
            <motion.button
              variants={childVariants}
              className="h-1/3 rounded-md bg-neutral-800 w-[97%] text-left px-4 flex space-x-4 items-center"
            >
              <Swap />
              <div className="flex flex-col">
                <p className="text-white text-lg">Swap</p>
                <p className="text-neutral-400 text-sm">
                  Swap your tokens without ever leaving your wallet.
                </p>
              </div>
            </motion.button>
            <motion.button
              variants={childVariants}
              className="h-1/3 bg-neutral-800 w-[97%] rounded-b-xl rounded-t-md  text-left px-4 flex space-x-4 items-center"
            >
              <Receive />
              <div className="flex flex-col">
                <p className="text-white text-lg">Receive</p>
                <p className="text-neutral-400 text-sm">
                  Receive Ethereum based assets through your unique address.
                </p>
              </div>
            </motion.button>
          </>
        ) : (
          <Plus />
        )}
      </motion.div>
    </div>
  );
};

function Airplane() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7 bg-blue-500 rounded-full text-white p-1 -rotate-45 items-center justify-center flex"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
      />
    </svg>
  );
}

function Swap() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="w-7 h-7 bg-gray-500 rounded-full text-white p-1 items-center justify-center flex"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
      />
    </svg>
  );
}

function Receive() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7 bg-green-500 rounded-full text-white p-1  items-center justify-center flex"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  );
}

function Plus() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-white"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
}
