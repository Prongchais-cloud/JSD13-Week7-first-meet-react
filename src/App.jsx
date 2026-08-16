import MainContent from "./components/MainContent";

export default function App() {
    return (
        <div className="flex flex-col min-h-screen bg-blue-400">
            <header className="bg-emerald-500 py-4 text-center">
                <h1>HEADER</h1>
            </header>
            <MainContent></MainContent>
            <footer className="bg-slate-700 py-4 text-center text-white">
                <h2>FOOTER</h2>
            </footer>
        </div>
    );
}
