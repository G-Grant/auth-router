import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UnregisterCallback } from "history";
import "./App.css";
import routes from "./routes";
import { renderRoutes } from "./renderRoutes.js";

function App() {
    const [txt, setTxt] = useState("1");
    const oldTxtRef:MutableRefObject<string>= useRef('1')
    const history = useHistory();
    const blockRef: MutableRefObject<UnregisterCallback | undefined> = useRef();
    const changeTxt = useCallback((e) => {
        setTxt(e.target.value);
    }, []);
    const gotoB = useCallback(() => {
        history.push("/b");
    }, [history]);

    useEffect(()=>{
        if(txt !== oldTxtRef.current){
            // 阻止路由跳转
            blockRef.current = history.block();
        }else{
            // 不再阻止路由跳转
            blockRef.current && blockRef.current();
        }
    }, [txt, history])

    return (
        <div>
            <Link to="/a">
                <button>跳转 A</button>
            </Link>
            <Link to="/b">
                <button>跳转 B</button>
            </Link>
            <Link to="/c">
                <button>跳转 C</button>
            </Link>
            <Link to="/d">
                <button>跳转 D</button>
            </Link>
            <input type="text" value={txt} onChange={changeTxt} />
            <button onClick={gotoB}>前往 B 页面</button>
            {renderRoutes(routes)}
        </div>
    );
}

export default App;
