"use client";

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { cn } from "@/lib/utils";

export default function PrivacyTermsButtons() {
  const { isOpen: isPrivacyPolicyOpen, onOpen: onOpenPrivacy, onOpenChange: onOpenChangePrivacy, onClose: onClosePrivacy } = useDisclosure();
  const { isOpen: isTermsOpen, onOpen: onOpenTerms, onOpenChange: onOpenChangeTerms, onClose: onCloseTerms } = useDisclosure();

  return (
    <div className="flex gap-2">
      <Button color="primary" onPress={onOpenPrivacy}>
        <p className="font-semibold">Privacy Policy</p>
      </Button>

      <Modal isOpen={isPrivacyPolicyOpen} onOpenChange={onOpenChangePrivacy} scrollBehavior="inside" size="3xl" backdrop="opaque">
        <ModalContent>
          {(onClosePrivacy: any) => (
            <>
              <ModalHeader className="flex flex-col p-6">Privacy Policy</ModalHeader>
              <hr />
              <ModalBody className="p-6">
                <p>
                  Last Updated: <b>November 11,2024</b>
                </p>
                <p>
                  <i>JARS NFT Co. JARS. INC. (“JARS”, “we”, “us”, or “our”)</i> is committed to protecting your privacy. We have prepared this Privacy
                  Policy to describe to you our practices regarding the information we collect, use, and share in connection with our website, mobile
                  app, and other services we and our affiliates provide to you (collectively, the &quot;Service&quot;).
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClosePrivacy}>Okay, I understand</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button color="primary" onPress={onOpenTerms}>
        <p className="font-semibold">Terms and Service</p>
      </Button>
      <Modal isOpen={isTermsOpen} onOpenChange={onOpenChangeTerms} scrollBehavior="inside" size="3xl" backdrop="blur">
        <ModalContent>
          {(onCloseTerms: any) => (
            <>
              <ModalHeader className="flex flex-col p-6">Terms And Conditions</ModalHeader>
              <hr />
              <ModalBody>
                <p>
                  Last Updated: <b>November 11,2024</b>
                </p>
                <P>
                  Welcome to JARS, owned and operated by Alrae, Jeffrey, Patrick, Rigor, Inc. d/b/a JARS (“JARS,” “we,” “us”, or “our”). These Terms
                  of Service (“Terms”) govern your access to and use of the JARS website(s),software, tools, features, or functionalities provided on
                  or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs,
                  and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public
                  blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a
                  blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content
                  or data.
                </P>
                <p>
                  BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN
                  BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onCloseTerms}>I Agree</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { className, children, ...otherProps } = props;
  return (
    <p className={cn(className + "pb-2 pt-2 font-black")} {...otherProps}>
      {children}
    </p>
  );
}
