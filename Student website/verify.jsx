import React, { useState } from 'react';
import Web3 from 'web3';
import './verify.css'; // Import the CSS file

export default function SepoliaEtherscanVerifier() {
    const [hash, setHash] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [verificationResult, setVerificationResult] = useState(null);
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contractABI = [
        // Contract ABI details
    ];
    const contractAddress = '0xDA0bab807633f07f013f94DD0E6A4F96F8742B53';

    const web3 = new Web3(Web3.givenProvider || "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID");

    const fetchTransactionData = async () => {
        setLoading(true);
        setError(null);

        const apiKey = 'XVA3NWVCQFSC2KMBXJ1B1FSJ81EFWPU2PW';
        const url = `https://api-sepolia.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=${hash}&apikey=${apiKey}`;

        try {
            const response = await fetch(url);
            const result = await response.json();
            if (result.result) {
                setData(result.result);
                setFromAddress(result.result.from);
                setToAddress(result.result.to);
                setIsSubmitted(true); // Hide input after successful submission
            } else {
                setError('Transaction not found or invalid hash');
            }
        } catch (err) {
            setError('Failed to fetch data');
        } finally {
            setLoading(false);
        }
    };

    const handleVerifyClick = () => {
        if (hash) {
            fetchTransactionData();
        } else {
            setError('Please enter a hash value.');
        }
    };

    const handleValidationClick = async () => {
        // Contract interaction logic
    };

    return (
        <div className="container">
            <h2>Verify Transaction</h2>
            {!isSubmitted && (
                <>
                    <input
                        type="text"
                        value={hash}
                        onChange={(e) => setHash(e.target.value)}
                        placeholder="Enter Transaction Hash"
                        className="input"
                    />
                    <button onClick={handleVerifyClick} className="button">
                        Fetch Transaction
                    </button>
                </>
            )}
            {loading && <p>Loading...</p>}
            {error && <p className="error">{error}</p>}
            {data && (
                <div className="dataContainer">
                    <h3>Transaction Details</h3>
                    <p><strong>Block Hash:</strong> {data.blockHash}</p>
                    <p><strong>From:</strong> {data.from}</p>
                    <p><strong>To:</strong> {data.to}</p>
                    <p><strong>Gas:</strong> {data.gas}</p>
                    <p><strong>Value:</strong> {data.value}</p>
                    <p><strong>Nonce:</strong> {data.nonce}</p>

                    <div className="inputContainer">
                        <input
                            type="text"
                            value={fromAddress}
                            className="input_box"
                            onChange={(e) => setFromAddress(e.target.value)}
                            placeholder="Enter From Address"
                        />
                    </div>
                    
                    <button onClick={handleValidationClick} className="button">
                        Verify Certification
                    </button>
                </div>
            )}
            {verificationResult && <p className="result">{verificationResult}</p>}
        </div>
    );
}
