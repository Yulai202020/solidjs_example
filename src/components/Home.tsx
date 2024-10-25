import { type Component } from 'solid-js';
import config from "./catalog.json";
import { createSignal } from 'solid-js';
import "./style.css";

interface CatalogItem {
    title: string;
    link: string;
    description: string;
}

const Home = () => {
    const [catalogItems, setCatalogItems] = createSignal<CatalogItem[]>([]);

    const loadAllCatalogs = () => {
        const allItems = Object.values(config).flat() as CatalogItem[];
        setCatalogItems(allItems);
    };

    loadAllCatalogs();

    return (
        <>
        <div class="container">
            {catalogItems().map((item) => (
                <div class="card">
                    <iframe class="iframe" src={item.link} title={item.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <a href={item.link} target="_blank">link to video</a>
                </div>
            ))}
        </div>
        </>
    );
};

export default Home;