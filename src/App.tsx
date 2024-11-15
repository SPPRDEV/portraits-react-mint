import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export default function Mint() {
  return (
    <div className="container mx-auto p-5 flex lg:flex-row flex-col-reverse items-center justify-between ">
      <div className="flex flex-col gap-2 max-w-lg">
        <div className="text-black text-2xl font-normal font-['Cardo']">
          Minting.
        </div>
        <div className="w-full  text-black text-base font-normal font-['Avenir Next LT Pro'] leading-normal">
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
        <CrossmintPayButton
          collectionId="69b57982-b9d1-4ab7-8bc2-20eb2fbbdf87"
          projectId="e22a833b-af6b-4d8c-9fe5-515d6c1f17a7"
          mintConfig={{ totalPrice: "0.01", _amount: "1" }}
          environment="staging"
          checkoutProps={{ paymentMethods: ["ETH", "SOL"] }}
        />
        </div>
      </div>
      <video
      autoPlay
      loop
      muted
      className="lg:w-[400px] w-full"
    >
      <source src="/nft.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
       
    </div>
  );
}
