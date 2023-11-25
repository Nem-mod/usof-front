import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {LogInForm} from "./components/Forms/LogInForm";
import {RegisterForm} from "./components/Forms/RegisterForm";
import {Feed} from "./pages/Feed/Feed";
import {PostForm} from "./pages/PostCreation/PostForm";
import {PostPage} from "./pages/PostPage/PostPage";
import {Account} from "./pages/Account/Account";

export default App;

function App() {
    return (
        <BrowserRouter>

            <div className="flex flex-col h-screen">
                <Header/>
                <main className="flex-1 pt-12 bg-gray-900">
                    <div
                        className="max-w-4xl h-fit min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16 m-auto border-gray-500 rounded-md border-2">
                        <Routes>
                            <Route path={"/login"} element={<LogInForm/>}/>
                            <Route path={"/signup"} element={<RegisterForm/>}/>
                            <Route path={"/"} element={<Feed/>}/>
                            <Route path={"/createpost"} element={<PostForm/>}/>
                            <Route path={"/post/:id"} element={<PostPage/>}/>
                            <Route path={"/account"} element={<Account/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </div>

        </BrowserRouter>
    );
}
