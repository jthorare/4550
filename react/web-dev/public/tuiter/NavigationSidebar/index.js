const NavigationSidebar = () => {
    return (`
        <div class="wd-lights-out-text d-inline-block list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
            <!-- continue the rest of the list -->
                <a href="./home.html" class=" list-group-item list-group-item-action ">
                    <i class="fa fa-home"></i>
                    <label class="d-none d-lg-inline">Home</label>
                </a>
                <a href="./explore.html" class=" list-group-item list-group-item-action ">
                    <i class="fa-solid fa-hashtag"></i>
                    <label class="d-none d-lg-inline">Explore</label>
                </a>
                <a href="#" class=" list-group-item list-group-item-action ">
                    <i class="fa-solid fa-bell"></i>
                    <label class="d-none d-lg-inline">Notifications</label>
                </a>
                <a href="#" class=" list-group-item list-group-item-action ">
                    <i class="fa-solid fa-envelope"></i>
                    <label class="d-none d-lg-inline">Messages</label>
                </a>
                <a href="#" class=" list-group-item list-group-item-action ">
                    <i class="fa-solid fa-bookmark"></i>
                    <label class="d-none d-lg-inline">Bookmarks</label>
                </a>
                <a href="#" class=" list-group-item list-group-item-action ">
                    <i class="fa-solid fa-list"></i>
                    <label class="d-none d-lg-inline">Lists</label>
                </a>
                <a href="./profile.html" class=" list-group-item list-group-item-action ">
                    <i class="fa-solid fa-user"></i>
                    <label class="d-none d-lg-inline">Profile</label>
                </a>
                <a href="./edit-profile.html.html" class="-tabs list-group-item list-group-item-action ">
                    <i class="fa-solid fa-ellipsis"></i>
                    <label class="d-none d-lg-inline">More</label>
                </a>
            </div>
            <div class="d-grid mt-2 d-inline-block w-75">
                <a href="tuit.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
    `);
}
export default NavigationSidebar;
