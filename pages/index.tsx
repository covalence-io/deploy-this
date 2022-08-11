import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { Platform } from "../interfaces";

const Home: NextPage = () => {
    const [platforms, setPlatforms] = useState<Platform[]>([]);

    useEffect(() => {
        fetch("/api/platforms")
            .then(res => res.json())
            .then(setPlatforms)
            .catch(console.error);
    }, []);

    return (
        <div className="grid h-screen place-items-center">
            <div>
                <h1 className="mb-10 text-indigo-700 text-8xl">Deploy This!</h1>
                {platforms.map(platform => (
                    <p className={`text-3xl text-center ${platform.isComplete ? "text-green-500" : "text-indigo-500"}`} key={`platform-${platform.name}`}>
                        {platform.name}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Home;
