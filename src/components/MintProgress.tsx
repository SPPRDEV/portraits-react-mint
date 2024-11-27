import { networks } from "@/AppKitProvider";
import { ABI, NFTCONTRACT } from "@/contract";
import { useState, useEffect } from "react";
import { createPublicClient, http } from "viem";

const MintCounter = () => {
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    const fetchSupply = async () => {
      const client = createPublicClient({
        chain: networks[0],
        transport: http(),
      });

      try {
        const supply = await client.readContract({
          address: NFTCONTRACT,
          abi: ABI,
          functionName: "totalSupply",
        });
        setTotalSupply(Number(supply));
      } catch (err) {
        console.error(err);
      }
    };

    fetchSupply();
    const interval = setInterval(fetchSupply, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
   <div className="flex items-center gap-2 font-['avenir']">
     <span className="flex text-base">
     Current claim:
    </span>
    <span>{totalSupply} PdF Passes per claim at €0 each</span>
   </div>
  );
};

export default MintCounter;
