"use client";
import { Input, Form, Textarea, Button, useDisclosure, ModalBody, ModalContent, Modal } from "@heroui/react";

import Link from "next/link";
import TextHoverShift from "./animation/TextHoverShift";
import { useEffect, useState } from "react";
import useContactButtonClicked from "@/store/contactButtonClickedState";
import { PaperPlaneOutline } from "react-ionicons";

interface FormData {
  fullName: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const isClicked = useContactButtonClicked((state) => state.isClicked);
  const reset = useContactButtonClicked((state) => state.reset);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Create FormData object from the form
    const data = Object.fromEntries(new FormData(e.currentTarget));

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.status === 200) {
      setTimeout(() => {
        onClose();
      }, 1500);
      setIsSuccess(true);
    } else {
      setIsError(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (isClicked) {
      onOpen();
      reset();
    }
    setIsError(false);
    setIsSuccess(false);
  }, [isClicked]);

  return (
    <>
      <Modal
        backdrop="blur"
        scrollBehavior="inside"
        className="overflow-y-auto"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          body: "py-6",

          base: "bg-bg max-w-full! w-[95%] md:w-[70%] lg:w-[60%] border border-white overflow-hidden",

          footer: "border-t border-dark",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: { duration: 0.3, ease: "easeOut" },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <Form className="text-dark w-full" validationBehavior="native" onSubmit={onSubmit}>
                  <div>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold sm:text-nowrap">
                      Schedule a Meeting
                    </h2>
                  </div>

                  <Input
                    variant="underlined"
                    classNames={{
                      inputWrapper: "border-b",
                    }}
                    label="Name"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                  />

                  <Input
                    variant="underlined"
                    classNames={{
                      inputWrapper: "border-b",
                    }}
                    label="Subject"
                    name="subject"
                    type="text"
                    placeholder="Schedule a Meeting"
                  />

                  <div className="w-full">
                    <Textarea
                      variant="underlined"
                      classNames={{
                        inputWrapper: "border-b",
                      }}
                      label="Message"
                      name="message"
                      isRequired
                      placeholder="Hi, can we talk?"
                    />
                  </div>
                  <div className="pt-4 w-full flex lg:flex-row flex-col  items-center gap-4">
                    <Button
                      isLoading={isLoading}
                      type="submit"
                      radius="none"
                      className="uppercase  bg-dark text-bg w-52 px-5 sm:h-14 sm:w-64 font-xl font-bold"
                    >
                      <span className="uppercase flex items-center justify-center gap-2">
                        Submit
                        <PaperPlaneOutline color={"#f2f5ea"} height="25px" width="25px" />
                      </span>
                    </Button>
                  </div>

                  {isSuccess && (
                    <p className="text-green-600 text-base sm:text-lg font-medium">Your message has been sent!</p>
                  )}
                  {isError && (
                    <p className="text-red-600 text-base sm:text-lg font-medium">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </Form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;
