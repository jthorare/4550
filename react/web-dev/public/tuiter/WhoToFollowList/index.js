import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
${who.map(followListItem => {
        return (WhoToFollowListItem(followListItem));
    }).join('')}
            </div>
`);
}

export default WhoToFollowList;

