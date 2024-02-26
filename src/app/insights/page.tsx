import { NFTContentWrapper } from "@/components/(interfaces)";
import {Navbar} from "@/components/(layout)";
import NewsCover from "@/components/(layout)/NewsCover";

export default function insightPage(){  
    return(
        <div>
            {/* To Do: Add card for each article and a pop up screen when clicked */}
            <Navbar display='fixed' />
            <NewsCover />
            <NFTContentWrapper title='Popular Collection' />
            <h1>Insights</h1>
        </div>
    );
}