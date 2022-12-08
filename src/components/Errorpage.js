import React from "react";
import { Link } from "react-router-dom";
const Errorpage = () => {
    return (
        <>
            <div id='notfound'>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Error 404</h1>
                    </div>
                    <h2>We are sorry, page not found !</h2>
                    <p className="mb-5"> THE PAGE YOU ARE LOOKING FOR MIGHT BEEN REMOVED AND HAD ITS NAME CHANGED OR IT TEMPORARILY UNAVAILABLE.</p>
                    <Link to="/">Back to HomePage</Link>
                </div>
            </div>
        </>
    )
}
export default Errorpage