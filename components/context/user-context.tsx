"use client";
import { dataType, defaultData } from "@/data/data";
import { Dispatch, SetStateAction, createContext, useState } from "react";

export type ContextProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  data: dataType;
  // setData: any;
  setData: Dispatch<SetStateAction<dataType>>;
};

export const UserContext = createContext<ContextProps>({} as ContextProps);

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // const [isOpen, setIsOpen] = useState<ContextProps | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [data, setData] = useState<ContextProps | null>(null);
  const [data, setData] = useState<dataType>({} as dataType);
  // const [data, setData] = useState<boolean>(false);
  return (
    <UserContext.Provider value={{ isOpen, setIsOpen, data, setData }}>
      {children}
    </UserContext.Provider>
  );
};
