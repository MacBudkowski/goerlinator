import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from "../styles/InstructionsComponent.module.css";

export default function ClaimFundsForm() {
  const [walletAddress, setWalletAddress] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting wallet address: ${walletAddress}`);
    // handle submit logic
    // if success
    router.push(`/Claimed?address=${walletAddress}`)
    // // if already claimed
    // router.push(`/AlreadyClaimed?address=${walletAddress}`)
    // // if denied
    // router.push(`/Denied?address=${walletAddress}`)

  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter your wallet address"
          style={{ textAlign: "left", width: "100%" }}
          value={walletAddress}
          onChange={handleInputChange}
        />
      <button className={styles.formButton} onClick={handleSubmit}>Claim</button>
      
      </div>
    </form>
  );
}