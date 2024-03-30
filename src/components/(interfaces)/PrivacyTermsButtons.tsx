"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { cn } from "@/lib/utils";

export default function PrivacyTermsButtons() {
  const {
    isOpen: isPrivacyPolicyOpen,
    onOpen: onOpenPrivacy,
    onOpenChange: onOpenChangePrivacy,
    onClose: onClosePrivacy,
  } = useDisclosure();
  const {
    isOpen: isTermsOpen,
    onOpen: onOpenTerms,
    onOpenChange: onOpenChangeTerms,
    onClose: onCloseTerms,
  } = useDisclosure();

  return (
    <div className="ml-auto flex gap-4">
      <Button onPress={onOpenPrivacy}>Privacy Policy</Button>
      <Modal
        isOpen={isPrivacyPolicyOpen}
        onOpenChange={onOpenChangePrivacy}
        scrollBehavior="inside"
        size="3xl"
        backdrop="opaque"
        classNames={{
          body: "py-5 px-5",
          backdrop: "bg-[#121212]/50 backdrop-opacity-40",
          base: "border-[#ffffff] bg-[#131418] dark:bg-[#d9d9d9] text-[#ffffff] dark:text-[#131418]",
          header: "border-b-[1px] border-[#292f46] py-5 mr-5 ",
          footer: "border-t-[1px] border-[#292f46] mr-5 ml-5",
        }}
      >
        <ModalContent>
          {(onClosePrivacy: any) => (
            <>
              <ModalHeader className="ml-5 flex flex-col gap-1">
                Privacy Policy
              </ModalHeader>
              <ModalBody>
                <P>Last Updated: February 23, 2024</P>
                <p>
                  JARS NFT, Inc.JARS (“JARS”, “we”, “us”, or “our”) is committed
                  to protecting your privacy. We have prepared this Privacy
                  Policy to describe to you our practices regarding the
                  information we collect, use, and share in connection with our
                  website, mobile app, and other services we and our affiliates
                  provide to you (collectively, the &quot;Service&quot;).
                </p>
                <P>1. Types of Information We Collect</P>
                <P>2. Use of Your Information</P>
                <P>3. Disclosure of Your Information</P>
                <P>4. Third-Party Websites</P>
                <P>5. Third-Party Wallets</P>
                <P>6. Your Choices Regarding Information</P>
                <P>7. Data Access and Control</P>
                <P>8. Data Retention</P>
                <P>9. Security</P>
                <P>10. Minors</P>
                <P>11. Users Outside of the Philippines</P>
                <P>12. Changes to This Privacy Policy</P>
                <P>13. Questions; Contacting Us; Reporting Violations</P>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClosePrivacy}>Okay, I understand</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Button onPress={onOpenTerms}>Terms and Service</Button>
      <Modal
        isOpen={isTermsOpen}
        onOpenChange={onOpenChangeTerms}
        scrollBehavior="inside"
        size="3xl"
        backdrop="opaque"
        classNames={{
          body: "py-5 px-5 mx-5 my-5",
          backdrop: "bg-[#121212]/50 backdrop-opacity-40",
          base: "border-[#ffffff] bg-[#131418] dark:bg-[#d9d9d9] text-[#ffffff] dark:text-[#131418]",
          header: "border-b-[1px] border-[#292f46] py-5 mr-5 ",
          footer: "border-t-[1px] border-[#292f46] mr-5 ml-5",
        }}
      >
        <ModalContent>
          {(onCloseTerms: any) => (
            <>
              <ModalHeader className="ml-5 flex flex-col gap-1">
                Terms And Conditions
              </ModalHeader>
              <ModalBody>
                <P>Last Updated: February 23, 2024</P>
                <P>1. Introduction</P>
                <P>
                  Welcome to JARS, owned and operated by Alrae, Jeffrey,
                  Patrick, Rigor, Inc. d/b/a JARS (“JARS,” “we,” “us”, or
                  “our”). These Terms of Service (“Terms”) govern your access to
                  and use of the JARS website(s),software, tools, features, or
                  functionalities provided on or in connection with our
                  services; including without limitation using our services to
                  view, explore, help display and create NFTs, and using our
                  tools, at your own discretion, to connect directly with others
                  to mint, purchase, sell, or transfer NFTs on public
                  blockchains (collectively, the “Service”). “NFT” in these
                  Terms means a non-fungible token or similar digital item
                  implemented on a blockchain (such as the Ethereum blockchain),
                  which uses smart contracts to link to or otherwise be
                  associated with certain content or data.
                </P>
                <p>
                  BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU
                  AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS
                  INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE
                  TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.
                </p>
                <P>2. Accessing the Service</P>
                <P>3. Ownership</P>
                <P>4. License to Access and Use Our Service and Content</P>
                <P>5. Third-Party Content, Agreements, and Services</P>
                <P>6. User Conduct</P>
                <P>7. Intellectual Property Rights</P>
                <P>8. Communication Preferences</P>
                <P>9. App Terms</P>
                <P>10. Indemnification</P>
                <P>11. Disclaimers</P>
                <P>12. Changes to This Privacy Policy</P>
                <P>13. Limitation of Liability</P>
                <P>14. Privacy Policy</P>
                <P>15. Modifications to the Services</P>
                <P>16. Dispute Resolution; Arbitration</P>
                <P>17. Governing Law and Venue</P>
                <P>18. Termination</P>
                <P>19. Severability</P>
                <P>20. Injunctive Relief</P>
                <P>21. Export Laws</P>
                <P>22. Survival</P>
                <P>23. Miscellaneous</P>
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
