import { type Component } from 'solid-js';
import { useLocation } from "solid-app-router";
import config from "./catalog.json";
import "./style.css";

const Catalog = () => {
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const queryData = queryParams.get('data') ?? "";

    return (
        <>
        <div class="container">
            {queryData && config[queryData] ? (
                config[queryData].map((item) => (
                    <div class="card">
                        <iframe class="iframe" src={item.link} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <a href={item.link} target="_blank">link to video</a>
                    </div>
                ))
            ) : (
                <>
                </>
            )}
        </div>
        </>
    );
};

export default Catalog;