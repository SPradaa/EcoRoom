import React from "react";
import '../styles/Search.css'


function Salas () {
    const [query, setQuery] = React.useState("");

    return(
        <div className="Search">
            <input type="text" placeholder="Buscar sala..."
            className="input-Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />

        </div>
    );
}
export default Salas; 