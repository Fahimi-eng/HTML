//-----------------------------------------
//------------side-menu-toggle-------------
//-----------------------------------------
let side = document.getElementById("sidebar-menu");
let toggleBtn = document.getElementById("menu-toggle");
let closeBtn = document.getElementById("menu-close");

function toggleMenu() {
  side.classList.toggle("get-in");
}

toggleBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);





//-----------------------------------------
//-------------alert-box-close-------------
//-----------------------------------------
let closeAlertButton = document.querySelector('#close-alert-btn');
let closeAlertButton_parentNode = closeAlertButton.parentNode;
closeAlertButton.addEventListener('click', () => closeAlertButton_parentNode.classList.add("d-none"));



//-----------------------------------------
//-------------episode toggle--------------
//-----------------------------------------
const episodeContainer = document.getElementById('episodes-container');
const seasons = Array.from(document.getElementsByClassName('seasons'));

seasons.forEach(season => {
  season.addEventListener('click', (e) => {
    const target = e.target;
    
    // Toggle the season / show the episodes
    if (target.classList.contains('toggle-episode-btn')) {
      target.classList.toggle('c-rotate');
      
      const episodes = season.getElementsByClassName('episodes');
      Array.from(episodes).forEach(episode => {
        episode.classList.toggle('d-none');
      });
      
      // Close other seasons
      Array.from(episodeContainer.children).forEach(sibling => {
        if (sibling !== season) {
          const siblingEpisodes = sibling.getElementsByClassName('episodes');
          Array.from(siblingEpisodes).forEach(siblingEpisode => {
            if (!siblingEpisode.classList.contains('d-none')) {
              siblingEpisode.classList.add('d-none');
            }
          });
        }
      });
    }
  });
});

//-----------------------------------------
//------open/close comment editor----------
//-----------------------------------------

let editorBox =document.getElementById("editor-box");
let showEditorButton = document.getElementById("showEditorButton");
let closeEditorButton = document.getElementById("closeEditorButton");

showEditorButton.addEventListener('click', ()=>{
  editorBox.classList.toggle('d-none');
});

closeEditorButton.addEventListener('click', ()=>{
  editorBox.classList.toggle('d-none');
});