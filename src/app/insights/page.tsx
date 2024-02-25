import {Navbar} from "@/components/(layout)";
import NewsCover from "@/components/(layout)/newsCover";

export default function insightPage(){
    return(
        <div>
            <Navbar display='fixed' />
            <NewsCover />
            <h1>Insights</h1>
        </div>
    );
}