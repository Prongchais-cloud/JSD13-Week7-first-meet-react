import Card from "./Card";

export default function Section() {
    return (
        <main className="grid grid-cols-1 gap-6 py-6 justify-items-center bg-amber-100 md:grid-cols-2 lg:grid-cols-3">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </main>
    );
}
