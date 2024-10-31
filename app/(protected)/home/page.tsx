"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import CardPublication from "../_componentes/card";

const DashboardPage = () => {
  return (
    <>
      <h1>Soy el Home</h1>
      <div className="flex flex-col space-y-4">
      <CardPublication />
      <CardPublication />
      <CardPublication />
      <CardPublication />
      </div>
    </>
  )
}

export default DashboardPage;
