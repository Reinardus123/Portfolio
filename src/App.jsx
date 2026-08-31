import { useState } from "react";
import LoadingScreen from "./loadingScreen/LoadingScreen";
import Navbar from "./Navbar/Navbar";
import AllPage from "./AllPage";

function App(){

    const [loading, setLoading] = useState(true);

    return(
       <>
        {loading && (
            <LoadingScreen onFinish={() => setLoading(false)}/>
        )}

        {!loading &&(
            <>
                <AllPage/>
            </>
        )}
       </>
    )
}

export default App;