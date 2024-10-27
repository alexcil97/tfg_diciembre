"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

const DashboardPage = () => {
  return (
    <>
      <h1>Soy el Home</h1>
      <Card className="py-4 bg-gray-500">
        <CardHeader className="pb-0 pt-2 ox-4 flex-col items-start">
          <p className="text-tiny uppercase font-blod">aqui va el texto</p>
          <small className="font-blod text-large">subtexto en grisaceo</small>
          <h4 className="font-blod text-large">titulo imagen</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="card background"
            className="object-cover rounded-xl"
            src="/Documentation/logo.jpeg"
            width={270}
            height={270} />
        </CardBody>
      </Card>
    </>
  )
}

export default DashboardPage;
