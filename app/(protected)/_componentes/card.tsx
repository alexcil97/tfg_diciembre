"use client"
import {Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";

export default function CardPublication () {
    return (
        <Card className="bg-gray-500">
        <CardHeader className="overflow-visible py-2 relative h-64 align-bottom">
          <Image
            alt="card background"
            className="object-cover"
            src="/images/logo.jpeg"
            fill
            style={{ objectFit: "cover" }} />
        </CardHeader>
        <CardBody>
          <h4 className="font-blod text-large">titulo imagen</h4>
          <p className="text-tiny uppercase font-blod">aqui va el texto</p>
        </CardBody>
      </Card>

    )
}
