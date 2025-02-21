import "/src/styles/Reviews styles/LoadingCards.css";
import { useEffect, useState } from "react";

export default function LoadingCards (){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="cont-loading">
            {loading && (
                <>
                    <div className="loading">
                        <div className="load-img"></div>
                        <div className="load-name"></div>
                        <div className="load-text"></div>
                        <div className="load-text"></div>
                        <div className="load-text"></div>
                    </div>
                    <div className="loading">
                        <div className="load-img"></div>
                        <div className="load-name"></div>
                        <div className="load-text"></div>
                        <div className="load-text"></div>
                        <div className="load-text"></div>
                    </div>
                    <div className="loading">
                        <div className="load-img"></div>
                        <div className="load-name"></div>
                        <div className="load-text"></div>
                        <div className="load-text"></div>
                        <div className="load-text"></div>
                    </div>
                </>
            )}
        </div>
    );
};