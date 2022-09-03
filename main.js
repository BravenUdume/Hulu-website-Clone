
document.getElementById('what_is_included').style.display = 'none';
document.getElementById('live_tv_terms').style.display = 'none';

document.getElementById('channels').style.display = 'none';


document.getElementById('breaking').style.display = 'none';
document.getElementById('biggest').style.display = 'none';

// document.getElementById('click_included').addEventListener('onclick', whatsIncluded());

function openBreakingNews(){
    document.getElementById('live').style.display = 'none';
    document.getElementById('biggest').style.display = 'none';
    document.getElementById('breaking').style.display = 'block';
}
function openLiveSports(){
    document.getElementById('breaking').style.display = 'none';
    document.getElementById('biggest').style.display = 'none';
    document.getElementById('live').style.display = 'block';
}
function openBiggestEvents(){
    document.getElementById('breaking').style.display = 'none';
    document.getElementById('live').style.display = 'none';
    document.getElementById('biggest').style.display = 'block';
}


function whatsIncludedOpen(){
    document.getElementById('what_is_included').style.display = 'block';
}
function whatsIncludedClose(){
    document.getElementById('what_is_included').style.display = 'none';
}

function liveTvTermsOpen(){ 
    document.getElementById('live_tv_terms').style.display = 'block';
}
function liveTvTermsClose(){
    document.getElementById('live_tv_terms').style.display = 'none';
}

function channelsOpen(){ 
    document.getElementById('channels').style.display = 'block';
}
function channelsClose(){
    console.log('hekllo');
    document.getElementById('channels').style.display = 'none';
}