window.onscroll = function() 
{
    scrollNavbar()
};

function scrollNavbar() 
{

    if (document.documentElement.scrollTop > 100) 
    {
        document.getElementById("nav").classList.add('scrolled');
    } 
    else 
    {
        document.getElementById("nav").classList.remove('scrolled');
    }
}


function copy(link) 
{
    navigator.clipboard.writeText(link);
    let clipboardMsg = document.getElementById('clipboard-copy');
    clipboardMsg.innerHTML =  'Copiado!'
}

function openPopup(link) 
{
    document.getElementById("background").style.display = 'initial';
    let popup = document.getElementById("popup")

    popup.style.display = 'initial';
    popup.innerHTML = link
}