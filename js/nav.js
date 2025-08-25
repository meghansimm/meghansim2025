
//
// Navigation setup functions.  Each one of these finds a HTML element (by its id=tag) and rewrites the innerHTML 
// with standardized navigation content.

function setupTopNav() {
    var topNav = document.querySelector("#nav2");
    topNav.innerHTML = `
        <nav class="top-nav">
            <a href="/">Design</a>
            <a href="/illustration">Illustration</a>
            <a href="/archive">Archive</a>
        </nav>`;
}

function setupMobileNav() {
    var mobileNav = document.querySelector("#mobile-nav");
    mobileNav.innerHTML = `
        <h1><a href="/">Meghan Sim</a> </h1>
        <div class="nav-wrapper">
            <li><a href="/">Design</a></li>
            <li><a href="/illustration">Illustration</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/archive">Archive</a></li>
        </div>`;
}

function setupDescription() {
    var desc = document.querySelector("#desc-h2");
    desc.innerHTML = `
       is a designer and illustrator at <a href="https://www.saic.edu/" target="_blank">SAIC</a>.
       <br>Currently at <a href="https://fnewsmagazine.com/" target="_blank">F Newsmagazine</a>, <a href="https://www.saic.edu/capx" target="_blank">CAPX</a>.
       <br>Previously at <a href="https://www.ogilvy.com/" target="_blank">Ogilvy</a>.`;
}

function setupAccordion() {
    var accordion = document.querySelector("#accordion");
    accordion.innerHTML = `
        <p>She loves to make things that require navigation and interaction, 
           whether that be physical or digital. She’s perfected the delicate art 
           of Instagram carousel design.<br><br>
           You'll likely find her crying during movie credits, dancing, jumping into 
           the cold, dark, depths of Lake Michigan, or becoming one with machines.
        </p>
        <div>
            <a href="mailto:meghan@meghans.im"><span>meghan@meghans.im↗</span></a>
            <a href="https://indd.adobe.com/view/fbfd964c-4e91-40de-adf1-8359e979cf8e" target="_blank"><span>Resume↗</span></a>
            <a href="https://www.linkedin.com/in/meghannsim/" target="_blank"><span>LinkedIn↗</span></a>
        </div>
        <figure>
            <img src="/about/about-me.jpeg">
        </figure>`;
}
function setupSideNav() {
    var sideNav = document.querySelector("#side-nav");
    var url = new URL(document.URL);
    // url.pathname is something like '/illustration/' the slice call here chops off the
    // leading and trailing slashes. So far there's only one level of directories, but 
    // this method *should* also work for sub directories like '/illustration/cats/'
    //  should slice down to 'illustration/cats'.
    // This kinda counts on the webserver always adding the trailing slash (which seems to 
    // be the case for github pages)
    var dir = url.pathname.slice(1,-1);

    var illustrationDirs = ["illustration", "fnews", "diablo", "eggnog", "character", "personal"];
    var designDirs = ["leather", "gng", "obi", "tlon", "arch", "capx", "archive"];
    
    // if the directory matches something in the illustration list show that
    // side-nav otherwise show design side-nav (including on the default "empty" dir)
    if ( illustrationDirs.includes(dir) ) {
        sideNav.innerHTML = `
            <a href="/fnews"><span>F Newsmagazine</span></a>
            <!-- <a href="#"><span>Certain Knowledge from Herodotus</span></a> -->
            <a href="/diablo"><span>Mount Diablo</span></a>
            <a href="/eggnog"><span>Granny's Eggnog</span></a>
            <a href="/character"><span>Character Design</span></a>
            <a href="/personal"><span>Personal Illustration</span></a>`;
    }
    else {
        sideNav.innerHTML = `
            <a href="/leather"><span>Leather Archives and Museum</span></a>
            <a href="/gng"><span>Galleries and Goblins</span></a>
            <a href="/cindy"><span>Cindy Sherman</span></a>
            <a href="/obi"><span>Ogilvy Bureau of Investigation</span></a>
            <a href="/tlon"><span>Tlön, Uqbar, Orbis Tertius</span></a>
            <a href="/arch"><span>Architecture Lecture Series</span></a>
            <!-- <a href="/capx"><span>CAPX</span></a> -->`;
    }
}

// Pop a script tag in the header to load and run the tinkerbell cursor sparkle
function loadTinkerbell() {
    var tinkerbell = document.createElement("script");
    tinkerbell.src = '/js/tinkerbell.js';
    document.head.appendChild(tinkerbell);
}

// add a DOMContentLoaded (supposed to be more efficient than just window.onload) listener
// to run the setup functions above when the page loads
document.addEventListener('DOMContentLoaded', function() {
    setupTopNav();
    setupSideNav();
    setupDescription();
    setupMobileNav();
    setupAccordion();
    loadTinkerbell();
});
