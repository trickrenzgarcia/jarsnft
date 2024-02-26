import { Navbar } from "@/components/(layout)";
import NewsCover from "@/components/(layout)/NewsCover";

export default function InsightPage() {
    return (
        <div>
            <Navbar display='fixed' />
            <NewsCover />
            <h1>Insights</h1>
        </div>
    );
}