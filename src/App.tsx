/* eslint-disable @typescript-eslint/no-explicit-any */
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { useState } from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Minus, Plus } from "lucide-react";
import MintCounter from "./components/MintProgress";

const FeatureCard = ({
  title = "Title 01",
  description = "Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in.",
  iconSrc = "/star.png",
  iconAlt = "Feature icon",
}) => {
  return (
    <div className="flex gap-4 my-4">
      <img src={iconSrc} alt={iconAlt} className="h-6 w-6 mt-1" />
      <div className="flex flex-col items-start gap-2">
        <div className="text-left md:text-center text-gray-800  text-base md:text-lg font-normal font-['Cardo']">
          {title}
        </div>
        <div className="max-w-[250px] text-black  text-[14px] md:text-base font-normal font-['avenir'] leading-normal">
          {description}
        </div>
      </div>
    </div>
  );
};

const FAQ = ({
  value,
  title = "Illo animi rerum et quibusdam explicabo explicabo?",
  description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
}: any) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="hover:no-underline">
        <div className="py-4 flex items-center justify-start gap-6 hover:no-underline text-black text-[15px] font-normal font-['Cardo']">
          <img src="/star.png" className="h-[20px] w-[20px]" />
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent>{description}</AccordionContent>
    </AccordionItem>
  );
};

export default function Mint() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen pb-[80px]">
      <div className="container mx-auto p-5 flex lg:flex-row flex-col items-center justify-between ">
        <div className="flex flex-col gap-2 max-w-lg">
          <div className="text-black text-2xl font-normal font-['Cardo']">
            Minting.
          </div>
          <div className="w-full  text-gray-700 text-base font-normal font-['Avenir Next LT Pro'] leading-normal">
            Sit sit eius culpa eligendi neque laborum ex doloremque ut. In
            exercitationem ex dignissimos quaerat earum perspiciatis. Aliquam
            laboriosam nam enim aliquid. Id sed et aut facilis. Architecto
            possimus et et sed esse nulla consequatur.
            <br />
            <br />
            Sit qui et natus dolore. Molestiae omnis explicabo sit nobis neque
            sint voluptate. Consequatur ad sed. Corrupti eos excepturi dolores
            porro.
          </div>
          <div className="flex flex-col gap-4 mt-3">
            <div className="max-w-[300px] mt-4 flex items-center gap-2">
              <CrossmintPayButton
                projectId="e22a833b-af6b-4d8c-9fe5-515d6c1f17a7"
                collectionId="69b57982-b9d1-4ab7-8bc2-20eb2fbbdf87"
                theme="dark"
                
                environment="staging"
                mintConfig={{
                  type: "erc-721",
                  totalPrice: "0.01",
                  _amount: quantity,
                }}
                className="xmint-btn"
                getButtonText={(connecting) =>
                  connecting ? "Connecting" : `Claim PdF Pass`
                }
              />

              <div className="flex items-center gap-3 p-4  rounded-lg w-fit">
                <div className="relative flex">
                  <div className="w-3 h-3 bg-[#4CFF54] rounded-full animate-pulse"></div>
                  <div className="absolute w-3 h-3 bg-[#4CFF54] rounded-full animate-ping"></div>
                </div>
                <span className="font-medium text-[#4CFF54]">Live</span>
              </div>
            </div>

            <MintCounter/>
            <div className="bg-white p-4 hidden">
              <Card className="p-4 w-full mb-3">
                <div className="flex flex-col items-center gap-4">
                  <h3 className="text-lg font-semibold">Select Quantity</h3>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrement}
                      disabled={quantity <= 1}
                      className="h-10 w-10"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>

                    <span className="text-xl font-bold w-12 text-center">
                      {quantity}
                    </span>

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={increment}
                      className="h-10 w-10"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              {/* <CrossmintPaymentElement
                projectId="e22a833b-af6b-4d8c-9fe5-515d6c1f17a7"
                collectionId="69b57982-b9d1-4ab7-8bc2-20eb2fbbdf87"
                environment="staging"
                cardWalletPaymentMethods={["apple-pay", "google-pay"]}
                emailInputOptions={{
                  show: true,
                }}
                mintConfig={{
                  type: "erc-721",
                  totalPrice: "0.01",
                  _amount: quantity,
                }}
              /> */}
            </div>
          </div>
        </div>
        <video autoPlay loop muted className="lg:w-[400px] w-[300px]">
          <source src="/nft.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto mt-32">
        <div className="text-center text-black text-2xl font-normal font-['Cardo']">
          Get Access To…
        </div>

        <div className="grid grid-cols-2 px-4 md:grid-cols-4 mt-12">
          <div className="col-span-1">
            <FeatureCard
              title="Feature 1"
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>

          <div className="col-span-1">
            <FeatureCard
              title="Feature 1"
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>

          <div className="col-span-1">
            <FeatureCard
              title="Feature 1"
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>

          <div className="col-span-1">
            <FeatureCard
              title="Feature 1"
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32">
        <div className="text-center md:text-left text-black text-2xl font-normal font-['Cardo']">
          Minting FAQ.
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 mt-12 gap-4 px-4">
          <div className="col-span-1">
            <Accordion type="single" collapsible>
              <FAQ value="1" />
              <FAQ value="2" />
              <FAQ value="3" />
              <FAQ value="4" />
            </Accordion>
          </div>

          <div className="col-span-1">
            <Accordion type="single" collapsible>
              <FAQ value="5" />
              <FAQ value="6" />
              <FAQ value="7" />
              <FAQ value="8" />
            </Accordion>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-32">
        <div className="text-center text-black text-2xl font-normal font-['Cardo']">
          Our DNA.
        </div>

        <div className="grid grid-cols-2 px-4 md:grid-cols-4 mt-12">
          <div className="col-span-1">
            <FeatureCard
              iconSrc="/icon1.png"
              title="Exclusive Capsules."
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>

          <div className="col-span-1">
            <FeatureCard
              iconSrc="/icon2.png"
              title="Token-gated Shopping Experience."
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>

          <div className="col-span-1">
            <FeatureCard
              iconSrc="/icon3.png"
              title="Artist Empowerment."
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>

          <div className="col-span-1">
            <FeatureCard
              iconSrc="/icon4.png"
              title="Sustainability & Social Cause."
              description="Blanditiis dignissimos unde eos. Perferendis dolor quidem consequatur quia neque ipsum itaque optio in."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
