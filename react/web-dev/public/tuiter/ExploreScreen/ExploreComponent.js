import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
    return(`
           <!-- center column of explore w/ search, horizontal tabs, suggested Tuits -->
            <!-- top row of search bar + gear icon -->
            <div class="w-100 position-relative h-auto">
                <i class="fa fa-search position-absolute" id="MAG-GLASS">
                </i>
                <input class="wd-rounded-corners-all-around wd-bg-color-dark-grey text-white"
                       id="search"
                       placeholder="Search Tuiter"
                       type="text">
                <a href="explore-settings.html">
                    <i class="fa-solid fa-gear wd-blue"></i>
                </a>
            </div>

            <!-- tabs with highlight on active and focus -->
            <div class="w-100 position-relative list-group list-group-horizontal">
                <button class="text-nowrap wd-linkset wd-bg-color" href="for-you.html">For you</button>
                <button class="text-nowrap wd-linkset wd-bg-color" href="trending.html">Trending</button>
                <button class="text-nowrap  wd-linkset wd-bg-color" href="news.html">News</button>
                <button class="text-nowrap wd-linkset wd-bg-color" href="sports.html">Sports</button>
                <button class="text-nowrap wd-linkset wd-bg-color" href="entertainment.html">Entertainment</button>
            </div> 
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
