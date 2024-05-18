"use client";

import { useEffect, useState } from "react";
import DetailsModal from "./detail-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <DetailsModal />;
};

export default ModalProvider;
