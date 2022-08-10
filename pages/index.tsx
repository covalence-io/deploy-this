import type { NextPage } from "next";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
    const [platforms, setPlatforms] = useState<string[]>([]);

    useEffect(() => {
        fetch("/api/platforms")
            .then(res => res.json())
            .then(setPlatforms)
            .catch(console.error);
    }, []);

    return (
        <div className="grid h-screen place-items-center">
            <div>
                <h1 className="text-indigo-700 text-8xl">Deploy This!</h1>
                {platforms.map((pl, index) => (
                    <p className="text-3xl text-center text-indigo-500" key={`platform-${index}-${pl}`}>
                        {pl}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Home;
