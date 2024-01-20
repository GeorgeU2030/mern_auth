import React from 'react'
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
export default function DashBoard() {
  const defaultContent="NEXT UI , REDUX, MERN STACK, JWT TOKEN, Firebase";

  return (
    <>
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="This App">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Developed">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="MERN AUTH">
        {defaultContent}
      </AccordionItem>
    </Accordion>

    <Card className="py-4">
    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
    <p className="text-tiny uppercase font-bold">Daily Mix</p>
    <small className="text-default-500">12 Tracks</small>
    <h4 className="font-bold text-large">Frontend Radio</h4>
    </CardHeader>
    <CardBody className="overflow-visible py-2">
    <Image
        alt="Card background"
        className="object-cover rounded-xl"
        src="https://th.bing.com/th/id/OIP.PMBiSa-JBIhSrPqckRRxyQHaEK?rs=1&pid=ImgDetMain"
        width={270}
    />
    </CardBody>
    </Card>
    </>
  )
}
