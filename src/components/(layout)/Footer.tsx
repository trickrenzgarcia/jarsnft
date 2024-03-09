"use client"

import { useTheme } from 'next-themes';
import Link from 'next/link';
import { FaFacebookF, FaDiscord, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { Moon, Sun } from "lucide-react"
import { IconType } from 'react-icons';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import { cn } from '@/lib/utils';
import { ModeToggle } from '../(interfaces)';
import { Separator } from '../ui/separator';

export default function Footer() {
  const { setTheme, theme } = useTheme()
  const { isOpen: isPrivacyPolicyOpen, onOpen: onOpenPrivacy, onOpenChange: onOpenChangePrivacy, onClose: onClosePrivacy } = useDisclosure();
  const { isOpen: isTermsOpen, onOpen: onOpenTerms, onOpenChange: onOpenChangeTerms, onClose: onCloseTerms } = useDisclosure();

  return (
    <footer className=''> {/* pt-32 px-20 pb-10 */}
    <Separator className='w-full h-[2px]' />
      <section className=''> {/* max-w-screen-xl mx-auto */}
        <div className='pt-32 px-8 lg:px-20 pb-10 grid grid-cols-3 gap-x-5 gap-y-10 mb-14'>
          <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold mb-1'>Resource</h1>
            <Link href='/learn/getting-started' className='hover:underline'>Getting Started</Link>
            <Link href='/insights' className='hover:underline'>Insights</Link>
            <Link href='/learn/faqs' className='hover:underline'>FAQs</Link>
          </div>
          <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold mb-1'>Help</h1>
            <Link href='/learn' className='hover:underline'>What is NFT?</Link>
            <Link href='/learn/buying-nfts' className='hover:underline'>How to buy an NFT</Link>
            <Link href='/learn/selling-nfts' className='hover:underline'>How to sell an NFT</Link>
            <Link href='/learn' className='hover:underline'>What are blockchain gas fees?</Link>
            <Link href='/learn' className='hover:underline'>What is a blockchain?</Link>
          </div>
          <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold mb-1'>Company</h1>
            <Link href='/' className='hover:underline'>About</Link>
            <Link href='/team' className='hover:underline'>Team</Link>
          </div>
          {/* <div className='flex flex-col gap-y-5'>
            <h1 className='font-semibold mb-1'>Marketplace</h1>
            <Link href='/category/art' className='hover:underline'>Art</Link>
            <Link href='/category/photography' className='hover:underline'>Photography</Link>
            <Link href='/category/pfps' className='hover:underline'>PFPs</Link>
          </div> */}
        </div>

        <div className='px-8 lg:px-20 mb-24'>
          <h1 className='text-2xl font-semibold mb-3'>Join us</h1>
          <div className="flex justify-between">
            <div className='flex gap-2'>
              <SocialLinkButton Icon={FaFacebookF} link='' />
              <SocialLinkButton Icon={FaDiscord} link='https://discord.gg/scBduTZyGd' />
              <SocialLinkButton Icon={FaTwitter} link='' />
              <SocialLinkButton Icon={FaInstagram} link='' />
              <SocialLinkButton Icon={FaGithub} link='https://github.com/BroJavaDevs' />
            </div>
            <div>
              <ModeToggle setTheme={setTheme} theme={theme} />
            </div>
          </div>
        </div>

        <Separator className='w-full h-[2px]' />

        <div className="copyright px-8 lg:px-20 pb-5">
          <ul className='mt-5 flex flex-col md:flex-row justify-between'>
            <li>
              <div className="left">
                © 2023 Alrae, Jeffrey, Patrick, Rigor
              </div>
            </li>
            <li>
              <div className="right ml-auto flex gap-4">
                <Button onPress={onOpenPrivacy}>Privacy Policy</Button>
                <Modal isOpen={isPrivacyPolicyOpen} onOpenChange={onOpenChangePrivacy}
                  scrollBehavior='inside' size='3xl' backdrop='opaque'
                  classNames={{
                    body: "py-5 px-5",
                    backdrop: "bg-[#121212]/50 backdrop-opacity-40",
                    base: "border-[#ffffff] bg-[#131418] dark:bg-[#d9d9d9] text-[#ffffff] dark:text-[#131418]",
                    header: "border-b-[1px] border-[#292f46] py-5 mr-5 ",
                    footer: "border-t-[1px] border-[#292f46] mr-5 ml-5",
                  }}>

                  <ModalContent>{(onClosePrivacy: any) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 ml-5">Privacy Policy</ModalHeader>
                      <ModalBody>
                        <P>
                          Last Updated: February 23, 2024
                        </P>
                        <p>
                          JARS NFT, Inc.JARS (“JARS”, “we”, “us”, or “our”) is committed to protecting your privacy. We have prepared this Privacy Policy to describe to you our practices regarding the information we collect, use, and share in connection with
                          our website, mobile app, and other services we and our affiliates provide to you (collectively, the &quot;Service&quot;).
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
                        <Button onPress={onClosePrivacy}>
                          Okay, I understand
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                  </ModalContent>
                </Modal>
                <Button onPress={onOpenTerms}>Terms and Service</Button>
                <Modal isOpen={isTermsOpen} onOpenChange={onOpenChangeTerms}
                  scrollBehavior='inside' size='3xl' backdrop='opaque'
                  classNames={{
                    body: "py-5 px-5 mx-5 my-5",
                    backdrop: "bg-[#121212]/50 backdrop-opacity-40",
                    base: "border-[#ffffff] bg-[#131418] dark:bg-[#d9d9d9] text-[#ffffff] dark:text-[#131418]",
                    header: "border-b-[1px] border-[#292f46] py-5 mr-5 ",
                    footer: "border-t-[1px] border-[#292f46] mr-5 ml-5",
                  }}>

                  <ModalContent>{(onCloseTerms: any) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1 ml-5">Terms And Conditions</ModalHeader>
                      <ModalBody>
                        <P>
                          Last Updated: February 23, 2024
                        </P>
                        <P>1. Introduction</P>
                        <P>Welcome to JARS, owned and operated by Alrae, Jeffrey, Patrick, Rigor, Inc. d/b/a JARS (“JARS,” “we,” “us”, or “our”). These Terms of Service (“Terms”) govern your access to and use of the JARS website(s),software, tools, features, or functionalities provided on or in connection with our services; including without limitation using our services to view, explore, help display and create NFTs, and using our tools, at your own discretion, to connect directly with others to mint, purchase, sell, or transfer NFTs on public blockchains (collectively, the “Service”). “NFT” in these Terms means a non-fungible token or similar digital item implemented on a blockchain (such as the Ethereum blockchain), which uses smart contracts to link to or otherwise be associated with certain content or data.</P>
                        <p>BY CLICKING TO ACCEPT, SIGN, AND/OR USING OUR SERVICE, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL OF THE TERMS INCORPORATED HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE SERVICE.</p>
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
                        <Button onPress={onCloseTerms}>
                          I Agree
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                  </ModalContent>
                </Modal>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

function P(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { className, children, ...otherProps } = props
  return <p className={cn(className + "font-black pt-2 pb-2")} {...otherProps}>{children}</p>
}

function SocialLinkButton({ Icon, link }: { Icon: IconType, link: string }) {
  return (
    <Link href={link} target='_blank'>
      <div className='w-[50px] h-[50px] bg-gray-200 dark:bg-card text-2xl rounded-[10px] flex items-center justify-center'>
        <Icon />
      </div>
    </Link>
  )
}
