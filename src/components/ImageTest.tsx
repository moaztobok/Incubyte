'use client'
import Image from 'next/image';
import { useState } from 'react';

const ImageTest = () => {
    const [loadStatus, setLoadStatus] = useState({});

    // Test both forward slash and backslash paths
    const testPaths = [
        '/images/algeria-ill.svg',
        '/images\\algeria-ill.svg',
        '/images/Algeria-ill.svg',
        '/test.svg' // If you copied one to public root
    ];

    const handleLoad = (path) => {
        setLoadStatus(prev => ({
            ...prev,
            [path]: 'loaded'
        }));
        console.log(`Successfully loaded: ${path}`);
    };

    const handleError = (path, error) => {
        setLoadStatus(prev => ({
            ...prev,
            [path]: 'error'
        }));
        console.error(`Failed to load ${path}:`, error);
    };

    return (
        <div className="p-4 space-y-8">
            {testPaths.map((path, index) => (
                <div key={index} className="border p-4 rounded">
                    <h3 className="font-mono text-sm mb-2">Testing: {path}</h3>

                    {/* Regular img tag */}
                    <div className="mb-4">
                        <p className="text-sm mb-1">Regular img tag:</p>
                        <img
                            src={path}
                            alt="Test"
                            width={100}
                            height={100}
                            onLoad={() => handleLoad(`${path}-img`)}
                            onError={(e) => handleError(`${path}-img`, e)}
                            className="border"
                        />
                        <p className="text-sm mt-1">
                            Status: {loadStatus[`${path}-img`] || 'loading...'}
                        </p>
                    </div>

                    {/* Next Image */}
                    <div>
                        <p className="text-sm mb-1">Next.js Image component:</p>
                        <Image
                            src={path}
                            alt="Test"
                            width={100}
                            height={100}
                            onLoad={() => handleLoad(`${path}-next`)}
                            onError={(e) => handleError(`${path}-next`, e)}
                            className="border"
                        />
                        <p className="text-sm mt-1">
                            Status: {loadStatus[`${path}-next`] || 'loading...'}
                        </p>
                    </div>
                </div>
            ))}

            <div className="bg-gray-50 p-4 rounded">
                <h3 className="font-bold mb-2">Debug Info:</h3>
                <pre className="text-sm whitespace-pre-wrap">
                    {JSON.stringify({
                        loadStatus,
                        publicPath: process.env.PUBLIC_URL || 'not set',
                        baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'not set'
                    }, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default ImageTest;